const GA_ID = import.meta.env.VITE_GA_ID as string | undefined
let loaded = false

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function loadAnalytics() {
  if (!GA_ID || loaded) return
  loaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true })
}

export function trackPageView(path: string, title?: string) {
  if (!loaded || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  })
}

type Consent = 'accepted' | 'declined'

export function getConsent(): Consent | null {
  try {
    return localStorage.getItem('cookie-consent') as Consent | null
  } catch {
    return null
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem('cookie-consent', value)
  } catch {
    // ignore (private browsing / storage blocked)
  }
}
