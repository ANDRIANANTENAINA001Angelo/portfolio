<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { SOCIAL } from '@/config'

const { t } = useLang()

const links = {
  email: `mailto:${SOCIAL.email}`,
  linkedin: SOCIAL.linkedin,
  github: SOCIAL.github,
  whatsapp: SOCIAL.whatsapp
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-box card">
        <div class="contact-content">
          <h2 class="section-title">{{ t.contact.title }}</h2>
          <p class="section-subtitle">{{ t.contact.subtitle }}</p>
          <p class="available">{{ t.contact.available }}</p>

          <div class="contact-info">
            <a :href="links.email" class="info-item">
              <span class="info-label">Email</span>
              <span class="info-value">{{ t.contact.email }}</span>
            </a>
            <a :href="links.whatsapp" class="info-item" target="_blank" rel="noopener">
              <span class="info-label">WhatsApp / Phone</span>
              <span class="info-value">{{ t.contact.phone }}</span>
            </a>
            <div class="info-item">
              <span class="info-label">Location</span>
              <span class="info-value">{{ t.contact.location }}</span>
            </div>
          </div>

          <div class="contact-actions">
            <a :href="links.email" class="btn btn-primary">{{ t.contact.cta }}</a>
            <a :href="links.linkedin" class="btn btn-secondary" target="_blank" rel="noopener">
              {{ t.contact.links.linkedin }}
            </a>
            <a :href="links.github" class="btn btn-secondary" target="_blank" rel="noopener">
              {{ t.contact.links.github }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-box {
  padding: 3rem 2.5rem;
  background: linear-gradient(145deg, var(--bg-card), var(--bg-muted));
  border: 1px solid var(--border);
}

.contact-content {
  max-width: 640px;
}

.contact-content .section-title {
  margin-bottom: 0.75rem;
}

.contact-content .section-subtitle {
  margin-bottom: 0.75rem;
}

.available {
  font-size: 0.9375rem;
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.info-value {
  font-size: 1.0625rem;
  color: var(--text);
  font-weight: 500;
}

a.info-item:hover .info-value {
  color: var(--primary);
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 600px) {
  .contact-box {
    padding: 2rem 1.5rem;
  }
}
</style>
