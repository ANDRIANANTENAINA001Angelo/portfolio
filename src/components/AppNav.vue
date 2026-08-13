<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '@/composables/useLang'
import { useTheme } from '@/composables/useTheme'

const { t, lang, setLang } = useLang()
const { isDark, toggleTheme } = useTheme()
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact']

const onScroll = () => {
  scrolled.value = window.scrollY > 20

  // Active section detection
  const offset = 120
  let current = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top
      if (top <= offset) current = id
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navItems = [
  { href: '/#about', id: 'about', key: 'about' as const },
  { href: '/#experience', id: 'experience', key: 'experience' as const },
  { href: '/#projects', id: 'projects', key: 'projects' as const },
  { href: '/#skills', id: 'skills', key: 'skills' as const },
  { href: '/#contact', id: 'contact', key: 'contact' as const }
]

const closeMobile = () => { mobileOpen.value = false }
</script>

<template>
  <header class="nav" :class="{ scrolled, open: mobileOpen }">
    <div class="container nav-inner">
      <a href="/" class="logo" @click="closeMobile">
        Angelo
      </a>

      <nav class="nav-links" :class="{ open: mobileOpen }">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="item.href"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="closeMobile"
        >
          {{ t.nav[item.key] }}
        </a>
      </nav>

      <div class="nav-actions">
        <button
          class="lang-toggle"
          :aria-label="t.common.lang"
          @click="setLang(lang === 'fr' ? 'en' : 'fr')"
        >
          {{ lang === 'fr' ? 'EN' : 'FR' }}
        </button>

        <button
          class="theme-toggle"
          :aria-label="isDark ? t.common.light : t.common.dark"
          @click="toggleTheme()"
        >
          <span v-if="isDark" class="icon">☀️</span>
          <span v-else class="icon">🌙</span>
        </button>

        <button
          class="burger"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.nav.scrolled {
  border-bottom-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.03em;
  color: var(--primary);
  transition: color 0.15s;
}

.logo:hover {
  color: var(--primary-hover);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.nav-link {
  padding: 0.5rem 0.9rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 8px;
  transition: color 0.15s, background 0.15s;
  position: relative;
}

.nav-link:hover {
  color: var(--text);
  background: var(--bg-muted);
}

.nav-link.active {
  color: var(--primary);
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 4px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-toggle,
.theme-toggle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: background 0.15s, color 0.15s;
}

.lang-toggle:hover,
.theme-toggle:hover {
  background: var(--bg-muted);
  color: var(--text);
}

.theme-toggle .icon {
  font-size: 1.1rem;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 10px;
}

.burger span {
  display: block;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

@media (max-width: 900px) {
  .nav-links {
    position: fixed;
    inset: var(--nav-height) 0 auto 0;
    flex-direction: column;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    gap: 0.25rem;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    width: 100%;
    padding: 0.85rem 1rem;
    font-size: 1rem;
  }

  .nav-link.active::after {
    display: none;
  }

  .nav-link.active {
    background: var(--primary-soft);
  }

  .burger {
    display: flex;
  }
}
</style>
