<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const skillsRef = ref<HTMLElement>()
const isVisible = ref(false)

const { stop } = useIntersectionObserver(
  skillsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { threshold: 0.2 }
)

const skillCategories = [
  {
    title: 'Développement Backend',
    icon: '🛠️',
    skills: ['Laravel', 'Node.js', 'Express', 'Django', 'REST API', 'JWT', 'Docker']
  },
  {
    title: 'Développement Frontend',
    icon: '🎨',
    skills: ['Vue.js', 'TailwindCSS', 'React', 'Nuxt.js', 'HTML/CSS', 'Bootstrap']
  },
  {
    title: 'Data Science & IA',
    icon: '📊',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'FastAPI', 'NLP']
  },
  {
    title: 'Base de données',
    icon: '🗃️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', "Redis"]
  },
  {
    title: 'DevOps & Outils',
    icon: '⚙️',
    skills: ['Git', 'CI/CD', 'Render', 'Nginx', 'Jenkins', 'VSCode']
  },
  {
    title: 'Soft Skills',
    icon: '💡',
    skills: ['Adaptabilité', 'Apprentissage rapide', 'Autonomie', 'Communication', 'Esprit analytique']
  }
]
</script>

<template>
  <section id="competences" ref="skillsRef" class="skills section-padding">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Mes Compétences</h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="skills-grid">
        <div 
          v-for="(category, index) in skillCategories"
          :key="index"
          class="skill-card glass"
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: (index * 0.1) + 's' }"
        >
          <div class="skill-header">
            <span class="skill-icon">{{ category.icon }}</span>
            <h3 class="skill-title">{{ category.title }}</h3>
          </div>
          <ul class="skill-list">
            <li v-for="skill in category.skills" :key="skill" class="skill-item">
              ✔ {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.skill-card {
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.skill-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-divider {
  width: 60px;
  height: 4px;
  background: var(--gradient-primary);
  margin: 0 auto;
  border-radius: 2px;
}


.skill-icon {
  font-size: 1.8rem;
}

.skill-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-item {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
}
</style>
