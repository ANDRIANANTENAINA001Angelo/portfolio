<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import ServicesSection from './ServicesSection.vue'
import CompetencesSection from './CompetencesSection.vue'
import ProjectsSection from './ProjectsSection.vue'
import ContactSection from './ContactSection.vue'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'

import { onMounted, ref } from 'vue'


onMounted(() => {
  const fullPath = window.location.pathname
  const base = '/developper-logiciel-ia/'
  let section = fullPath.startsWith(base)
    ? fullPath.slice(base.length)
    : fullPath.slice(1)
    

  if (section) {
      const el = document.getElementById(section)
      setTimeout(() => {
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
        
      }, 200);

  }
})

const contactPrefill = ref({
  subject: '',
  message: ''
})

const setContactPrefill = (title: string) => {
  contactPrefill.value.subject = `${title}`
  contactPrefill.value.message = `Bonjour,\n\nJe souhaite en savoir plus sur le service suivant : ${title}.\n\nMerci !`
}


</script>

<template>
  <Navigation />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection @contact-request="setContactPrefill"/>
    <CompetencesSection />
    <ProjectsSection />
    <ContactSection :prefill="contactPrefill"/>
  </main>
  <Footer />
</template>
