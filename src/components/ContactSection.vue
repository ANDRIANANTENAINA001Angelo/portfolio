<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import emailjs from 'emailjs-com'
import linkedinlogo from "@/assets/in-logo.svg"
import fblogo from "@/assets/fb-logo.svg"


const props = defineProps<{
  prefill: {
    subject: string
    message: string
  }
}>()

const contactRef = ref<HTMLElement>()
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const form: Record<string, string> = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})


const errors: Record<string, string> = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')
  
  let isValid = true
  
  if (!form.name.trim()) {
    errors.name = 'Le nom est requis'
    isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'L\'email est requis'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email invalide'
    isValid = false
  }
  
  if (!form.subject.trim()) {
    errors.subject = 'Le sujet est requis'
    isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'Le message est requis'
    isValid = false
  }
  
  return isValid
}


const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      subject: form.subject,
      message: form.message,
      to_name: "ANDRIANANTENAINA Angelo",
    }

    await emailjs.send(
      'service_h2f2loo',      
      'template_wbsf4nk',     
      templateParams,
      'MwOxj26E8Q85n2hY2'       
    )

    isSubmitted.value = true
    Object.keys(form).forEach(key => form[key] = '')

  } catch (error) {
    console.error('Erreur lors de l’envoi de l’e-mail :', error)
  } finally {
    isSubmitting.value = false
  }
}


const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'a.angelo.mada@gmail.com',
    link: 'mailto:a.angelo.mada@gmail.com'
  },
  {
    icon: '📱',
    title: 'Téléphone',
    value: '+261 345 992 047',
    link: 'tel:+261345992047'
  },
  {
    icon: '📍',
    title: 'Localisation',
    value: 'Fianarantsoa, Madagascar',
    link: '#'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'ANDRIANANTENAINA Angelo',
    link: 'https://www.linkedin.com/in/andrianantenaina-angelo/'
  }
]

const lastInjectedTitle = ref('')

watch(() => props.prefill, (newPrefill) => {
  if (newPrefill.subject && newPrefill.subject !== lastInjectedTitle.value) {
    form.subject = newPrefill.subject
    form.message = newPrefill.message
    lastInjectedTitle.value = newPrefill.subject
  }
}, { immediate: true, deep: true })

</script>

<template>
  <section id="contact" ref="contactRef" class="contact section-padding">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Contactez-moi</h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="contact-content">
        <!-- Informations de contact -->
        <div class="contact-info">
          <div class="info-header">
            <h3>Parlons de votre projet</h3>
            <p>
              Je suis toujours interessé par de nouveaux défis et opportunités. 
              N'hésitez pas à me contacter pour discuter de vos besoins.
            </p>
          </div>
          
          <div class="contact-details">
            <div 
              v-for="info in contactInfo"
              :key="info.title"
              class="contact-item"
            >
              <div class="contact-icon">
                <span>{{ info.icon }}</span>
              </div>
              <div class="contact-text">
                <h4>{{ info.title }}</h4>
                <a :href="info.link" class="contact-link" target="_blank">{{ info.value }}</a>
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <h4 class="social-links-header">Suivez-moi</h4>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/andrianantenaina-angelo/" class="social-icon" target="_blank"><img :src="linkedinlogo" alt="linkedin-logo"></a>
              <a href="https://www.facebook.com/andrianantenaina.angelo.ia" class="social-icon" target="_blank"><img :src="fblogo" alt="facebook-logo"></a>
            </div>
          </div>
        </div>
        
        <!-- Formulaire de contact -->
        <div class="contact-form-wrapper">
          <div class="form-container">
            <div class="form-header">
              <h3>Envoyez-moi un message</h3>
              <p>Remplissez le formulaire ci-dessous et je vous répondrai rapidement.</p>
            </div>
            
            <div v-if="isSubmitted" class="success-message">
              <div class="success-icon">✅</div>
              <h3>Message envoyé !</h3>
              <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              <button @click="isSubmitted = false" class="btn-primary">
                Envoyer un autre message
              </button>
            </div>
            
            <form v-else @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nom complet *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    :class="{ 'error': errors.name }"
                    placeholder="Votre nom"
                  />
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>
                
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    :class="{ 'error': errors.email }"
                    placeholder="votre@email.com"
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Sujet *</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  :class="{ 'error': errors.subject }"
                  placeholder="Sujet de votre message"
                />
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  :class="{ 'error': errors.message }"
                  placeholder="Décrivez votre projet en détail..."
                  rows="6"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>
              
              <button 
                type="submit" 
                class="btn-submit"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Envoyer le message</span>
                <span v-else class="loading-text">
                  <span class="spinner"></span>
                  Envoi en cours...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.contact {
  background: var(--bg-dark, #0F0F23);
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  color: var(--text-primary, #FFFFFF);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  background: var(--gradient-primary, linear-gradient(135deg, #FF6B35, #4A90E2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary, #B0B0B0);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Informations de contact */
.contact-info {
  color: var(--text-primary, #FFFFFF);
}

.info-header h3 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary, #FFFFFF);
  margin-bottom: 1rem;
}

.info-header p {
  color: var(--text-secondary, #B0B0B0);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.contact-details {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: var(--bg-card, rgba(255, 255, 255, 0.05));
  transform: translateX(10px);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary, linear-gradient(135deg, #FF6B35, #4A90E2));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.contact-text h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary, #FFFFFF);
  margin-bottom: 0.25rem;
}

.contact-link {
  color: var(--text-secondary, #B0B0B0);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--primary-color, #FF6B35);
}

.social-links h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary, #FFFFFF);
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  background: var(--bg-card, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  color: var(--text-primary, #FFFFFF);
}

.section-divider {
  width: 60px;
  height: 4px;
  background: var(--gradient-primary);
  margin: 0 auto;
  border-radius: 2px;
}

.social-icon:hover {
  background: var(--gradient-primary, linear-gradient(135deg, #FF6B35, #4A90E2));
  transform: translateY(-5px);
}

/* Formulaire de contact */
.contact-form-wrapper {
  width: 100%;
  height: 100%;
}

.form-container {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary, #FFFFFF);
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--text-secondary, #B0B0B0);
  font-size: 1rem;
}

.success-message {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.success-message h3 {
  font-size: 1.5rem;
  color: var(--text-primary, #FFFFFF);
  margin-bottom: 1rem;
}

.success-message p {
  color: var(--text-secondary, #B0B0B0);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: var(--text-primary, #FFFFFF);
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  color: var(--text-primary, #FFFFFF);
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted, #808080);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color, #FF6B35);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  background: rgba(255, 255, 255, 0.15);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ff4757;
}

.error-message {
  color: #ff4757;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.btn-submit {
  background: var(--gradient-primary, linear-gradient(135deg, #FF6B35, #4A90E2));
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Media queries pour tablettes */
@media (max-width: 1024px) {
  .contact {
    padding: 3rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .contact-content {
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .info-header h3 {
    font-size: 1.8rem;
  }
  
  .form-container {
    padding: 1.5rem;
  }
}

/* Media queries pour mobile */
@media (max-width: 768px) {
  .contact {
    padding: 2rem 0;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  /* Réorganisation de l'ordre sur mobile - formulaire en premier */
  .contact-form-wrapper {
    order: 1;
  }
  
  .contact-info {
    order: 2;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: clamp(2rem, 6vw, 2.5rem);
  }
  
  .info-header h3 {
    font-size: 1.5rem;
  }
  
  .info-header p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .contact-item {
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .contact-item:hover {
    transform: none;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
  
  .contact-text h4 {
    font-size: 1rem;
  }
  
  .contact-link {
    font-size: 0.9rem;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .form-container {
    padding: 1.5rem;
    border-radius: 15px;
  }
  
  .form-header h3 {
    font-size: 1.3rem;
  }
  
  .form-header p {
    font-size: 0.9rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .btn-submit {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Media queries pour petits mobiles */
@media (max-width: 480px) {
  .contact {
    padding: 1.5rem 0;
  }
  
  .section-header {
    margin-bottom: 1.5rem;
  }
  
  .contact-content {
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: clamp(1.8rem, 7vw, 2rem);
  }
  
  .info-header h3 {
    font-size: 1.3rem;
  }
  
  .info-header p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  .contact-item {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .contact-icon {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    margin-right: 0.75rem;
  }
  
  .contact-text h4 {
    font-size: 0.95rem;
  }
  
  .contact-link {
    font-size: 0.85rem;
  }
  
  .social-links h4 {
    font-size: 1.1rem;
    text-align: center;
  }
  
  .social-icon {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
  
  .form-container {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  .form-header h3 {
    font-size: 1.2rem;
  }
  
  .form-header p {
    font-size: 0.85rem;
  }
  
  .form-group label {
    font-size: 0.9rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 0.6rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }
  
  .btn-submit {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }
  
  .success-message {
    padding: 1.5rem;
  }
  
  .success-icon {
    font-size: 3rem;
  }
  
  .success-message h3 {
    font-size: 1.3rem;
  }
  
  .success-message p {
    font-size: 0.9rem;
  }
}

/* Media queries pour très petits écrans */
@media (max-width: 360px) {
  .contact {
    padding: 1rem 0;
  }
  
  .form-container {
    padding: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    padding: 0.75rem;
  }
  
  .contact-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
  
  .btn-submit {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>



