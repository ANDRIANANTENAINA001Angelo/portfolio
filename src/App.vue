<script setup lang="ts">

import HomePage from './components/HomePage.vue'

</script>

<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<style>
:root {
  --primary-color: #FF6B35;
  --secondary-color: #4A90E2;
  --accent-color: #FFD23F;
  --bg-dark: #0F0F23;
  --bg-darker: #0A0A1F;
  --bg-card: rgba(255, 255, 255, 0.05);
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B0;
  --text-muted: #808080;
  --border-color: rgba(255, 255, 255, 0.1);
  --shadow-light: 0 4px 20px rgba(255, 107, 53, 0.1);
  --shadow-heavy: 0 10px 40px rgba(0, 0, 0, 0.3);
  --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  --gradient-dark: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--gradient-dark);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-darker);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff5722;
}

/* Utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-padding {
  padding: 2rem 0; /* Réduit significativement de 3rem à 2rem */
}

.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
}

.btn-secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Glass effect */
.glass {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
}

/* Section headers */
.section-header {
  text-align: center;
  margin-bottom: 2rem; /* Réduit de 3rem à 2rem */
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .section-padding {
    padding: 1.5rem 0; /* Encore plus réduit sur mobile */
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-header {
    margin-bottom: 1.5rem;
  }
}
</style>