<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FAQSection from '@/components/FAQSection.vue'
import { useLang } from '@/composables/useLang'
import { useSeo } from '@/composables/useSeo'
import { homePath } from '@/i18n'
import { businessSchema, faqSchema, personSchema, websiteSchema } from '@/seo/schema'

const { t, lang } = useLang()
const l = lang.value

useSeo({
  lang: l,
  title: t.value.meta.title,
  description: t.value.meta.description,
  keywords: t.value.meta.keywords,
  path: homePath(l),
  alternates: { fr: homePath('fr'), en: homePath('en') },
  jsonLd: [
    websiteSchema(l),
    personSchema(l),
    businessSchema(l),
    faqSchema(t.value.faq.items.map(i => ({ q: i.q, a: i.a })))
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
    <FAQSection />
  </div>
</template>
