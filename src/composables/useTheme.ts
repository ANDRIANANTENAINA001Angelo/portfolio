import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'

export function useTheme() {
  // Light first (default false = light)
  const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'portfolio-theme',
    // Default to light
    initialValue: 'light'
  })

  const toggleTheme = useToggle(isDark)

  const themeLabel = computed(() => (isDark.value ? 'dark' : 'light'))

  return {
    isDark,
    toggleTheme,
    themeLabel
  }
}
