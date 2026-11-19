<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { aboutPath, alternatePath, resourcesPath, servicesPath } from '@/i18n'
import { useLang } from '@/composables/useLang'
import { useTheme } from '@/composables/useTheme'

const { t, lang, setLang, lp } = useLang()
const { isDark, toggleTheme } = useTheme()
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const sectionIds = ['services', 'projects', 'about', 'experience', 'skills', 'contact']

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

const navItems = computed(() => [
  { href: servicesPath(lang.value), id: 'services', key: 'services' as const },
  { href: lp('/#projects'), id: 'projects', key: 'projects' as const },
  { href: aboutPath(lang.value), id: 'about', key: 'about' as const },
  { href: lp('/#experience'), id: 'experience', key: 'experience' as const },
  { href: resourcesPath(lang.value), id: 'resources', key: 'resources' as const },
  { href: lp('/#contact'), id: 'contact', key: 'contact' as const }
])

const closeMobile = () => { mobileOpen.value = false }

// Real link to the other language so crawlers discover the /en pages
const route = useRoute()
const altHref = computed(() => alternatePath(route, lang.value === 'fr' ? 'en' : 'fr'))
</script>

<template>
  <header class="nav" :class="{ scrolled, open: mobileOpen }">
    <div class="container nav-inner">
      <a :href="lp('/')" class="logo" @click="closeMobile">
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
        <a
          class="lang-toggle"
          :href="altHref"
          :hreflang="lang === 'fr' ? 'en' : 'fr'"
          :aria-label="t.common.lang"
          @click.prevent="setLang(lang === 'fr' ? 'en' : 'fr')"
        >
          {{ lang === 'fr' ? 'EN' : 'FR' }}
        </a>

        <button
          class="theme-toggle"
          :aria-label="isDark ? t.common.light : t.common.dark"
          @click="toggleTheme()"
        >
          <svg v-if="isDark" class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8" />
            <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
          <svg v-else class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
          </svg>
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
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
}

.logo {
  font-weight: 800;
  font-stretch: 118%;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  color: var(--text);
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
  padding: 0.5rem 0.8rem;
  font-size: 0.95rem;
  font-weight: 550;
  font-stretch: var(--narrow);
  color: var(--text-secondary);
  transition: color 0.15s;
  position: relative;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.active {
  color: var(--text);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 4px;
  height: 2px;
  background: var(--accent);
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
  border-radius: var(--radius);
  font-size: 0.85rem;
  font-weight: 650;
  color: var(--text-secondary);
  transition: background 0.15s, color 0.15s;
}

.lang-toggle:hover,
.theme-toggle:hover {
  background: var(--bg-muted);
  color: var(--text);
}

.theme-toggle .icon {
  display: block;
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
    box-shadow: inset 3px 0 0 var(--accent);
  }

  .burger {
    display: flex;
  }
}
</style>
