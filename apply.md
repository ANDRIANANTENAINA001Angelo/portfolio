# Apply.md — Portfolio v2 (corrections incluses)

## Emplacement

```
/home/workdir/artifacts/portfolio/
```

## Lancer

```bash
cd portfolio
npm install
npm run dev
```

## Corrections de cette version

1. **Hero** : photo de profil visible (`public/images/profile.jpg`)
2. **Navbar** : logo texte « Angelo » uniquement (couleur thème), plus de « A »
3. **Navbar** : style actif sur la section en cours de scroll
4. **Project cards** : affichage de la **première image** (slider auto si plusieurs)
5. **Images projets** : convention claire `{slug}-N.jpg` dans `public/images/projects/`
6. **Domaine variable** : `src/config.ts` + option `VITE_SITE_URL`
7. **Autres projets** : section « Autres réalisations » plus visible (Code & Scale)

## Documentation complète

Lis **`ARCHITECTURE.md`** dans le dossier portfolio pour :
- où sont les textes FR/EN
- comment ajouter des images projets
- comment changer le domaine
- featured vs others

## Domaine (rapide)

Fichier unique : `src/config.ts`

```ts
export const SITE_URL = ... || 'https://andrianantenaina.dev'
```

Ou via env :

```bash
# .env
VITE_SITE_URL=http://localhost:5173
```

En production (Render etc.) : définir `VITE_SITE_URL` dans les variables d’environnement.

Pense aussi à aligner `index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` une fois le domaine final choisi.

## Images projets — checklist

1. Place tes captures dans `public/images/projects/`
2. Noms : `goalpay-1.jpg`, `predictorbot-1.jpg`, etc.
3. Les chemins sont déjà déclarés dans `src/data/projects.ts`
4. Recharge la page → les cards affichent les images

## Build

```bash
npm run build
```

Publish directory : `dist`
