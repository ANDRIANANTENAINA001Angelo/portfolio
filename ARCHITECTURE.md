# Architecture & contenu du portfolio

## Vue d’ensemble

```
portfolio/
├── src/
│   ├── config.ts              ← DOMAINE + liens sociaux (UNE seule source)
│   ├── data/
│   │   ├── content.ts         ← TOUS les textes FR / EN
│   │   └── projects.ts        ← TOUS les projets (titres, descriptions, images, metrics)
│   ├── components/            ← UI (Hero, Nav, Cards, etc.)
│   ├── views/                 ← Pages (Home, ProjectDetail)
│   ├── composables/           ← useLang, useTheme, useSeo
│   └── styles/main.css        ← Design tokens (light / dark)
├── public/
│   ├── images/
│   │   ├── profile.jpg        ← Photo hero
│   │   └── projects/          ← Images des projets (voir convention)
│   ├── preview-opengraph.jpg  ← Image de partage (WhatsApp / FB / LinkedIn)
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt               ← AEO (agents IA)
└── index.html                 ← Meta Open Graph statiques (crawlers)
```

---

## 1. Domaine (variable unique)

**Fichier :** `src/config.ts`

```ts
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://andrianantenaina.dev'
```

### Comment changer le domaine

| Environnement | Comment |
|---------------|---------|
| Local | Rien à faire (ou créer `.env` avec `VITE_SITE_URL=http://localhost:5173`) |
| Preview Render | `VITE_SITE_URL=https://ton-app.onrender.com` dans les env vars |
| Production | `VITE_SITE_URL=https://andrianantenaina.dev` |

Tout le SEO dynamique (useSeo) lit `SITE_URL`.  
Les fichiers **statiques** (`index.html`, `sitemap.xml`, `robots.txt`, `llms.txt`) contiennent encore le domaine en dur pour les crawlers qui ne exécutent pas le JS — mets-les à jour une fois le domaine final choisi (ou génère-les au build plus tard).

---

## 2. Textes (FR / EN)

**Fichier :** `src/data/content.ts`

Structure :
```
content.fr.hero.title
content.fr.about.body
content.fr.experience.items
content.en....
```

Modifier un texte = modifier uniquement ce fichier.  
La langue active vient de `?lang=fr` ou `?lang=en` (défaut FR).

---

## 3. Projets

**Fichier :** `src/data/projects.ts`

Chaque projet a :
- `slug` + `techSlug` → URL `/projets/{slug}/{techSlug}`
- `title`, `shortDescription`, `longDescription`, `challenge`, `solution`, `results` (FR + EN)
- `images: [{ src, alt }, ...]`
- `featured: true/false`
- `metrics` optionnels

### Featured vs Others

- `featured: true` → grille principale (GoalPay, PredictorBot, Hebrew Whisper, AI Photo Album)
- `featured: false` → section **« Autres réalisations »** en bas (Code & Scale pour l’instant)

Si tu ne vois pas « Autres réalisations », c’est qu’il n’y a aucun projet avec `featured: false`.  
Actuellement il y en a un : `code-scale-ai-platform`.

---

## 4. Images des projets — convention

Dossier :
```
public/images/projects/
```

### Convention de nommage

```
{slug}-1.jpg
{slug}-2.jpg
{slug}-3.jpg
...
```

Exemples concrets (déjà préparés comme placeholders) :

| Projet              | Fichiers attendus                          |
|---------------------|--------------------------------------------|
| GoalPay             | `goalpay-1.jpg`, `goalpay-2.jpg`           |
| PredictorBot        | `predictorbot-1.jpg`, `predictorbot-2.jpg` |
| Hebrew Whisper      | `hebrew-whisper-1.jpg`                     |
| AI Photo Album      | `ai-photo-album-1.jpg`                     |
| Code & Scale        | `code-scale-1.jpg`                         |

### Comment ajouter / remplacer une image

1. Exporte ta capture (idéalement 1200×750 ou ratio 16:10, JPEG/WebP, < 300 Ko)
2. Place-la dans `public/images/projects/` avec le bon nom (`goalpay-1.jpg`, etc.)
3. Dans `src/data/projects.ts`, le projet a déjà :
   ```ts
   images: [
     { src: '/images/projects/goalpay-1.jpg', alt: 'GoalPay dashboard' },
     { src: '/images/projects/goalpay-2.jpg', alt: 'GoalPay transactions' }
   ]
   ```
4. Si tu ajoutes une 3e image : ajoute le fichier **et** une entrée dans le tableau `images`.

La card affiche **automatiquement la première image**.  
S’il y en a plusieurs → slider auto toutes les 4 s.

---

## 5. Photo Hero

```
public/images/profile.jpg
```

Remplace ce fichier par ta photo (carré recommandé, ~400–600 px).

---

## 6. Image de partage (Open Graph)

```
public/preview-opengraph.jpg
```

Format idéal : **1200 × 630 px**.  
C’est l’image qui apparaît sur WhatsApp, Facebook, LinkedIn.

---

## 7. Navigation

- Logo texte **« Angelo »** (couleur primaire du thème)
- Section active soulignée pendant le scroll
- Toggle FR/EN + light/dark

---

## 8. Pages

| Route | Contenu |
|-------|---------|
| `/` | Hero + About + Experience + Projects + Skills + Contact |
| `/projets/:slug/:techSlug?` | Détail d’un projet |

---

## Résumé « où modifier quoi »

| Besoin | Fichier |
|--------|---------|
| Changer le domaine | `src/config.ts` (+ env `VITE_SITE_URL`) |
| Changer un texte | `src/data/content.ts` |
| Ajouter / éditer un projet | `src/data/projects.ts` |
| Image d’un projet | `public/images/projects/{slug}-N.jpg` |
| Photo hero | `public/images/profile.jpg` |
| Image de partage | `public/preview-opengraph.jpg` |
| Liens GitHub / LinkedIn | `src/config.ts` → `SOCIAL` |
