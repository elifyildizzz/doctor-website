**Uzm. Dr. Mumtaz Aktas - Clinic Website**

### Project Overview
This project is a multilingual (TR/EN/RU) Next.js website built for a pediatric clinic in Antalya/Kemer.

Main sections include:
- Doctor profile
- Services and service detail pages
- Clinic gallery
- Contact and map section
- Google Business profile actions

### Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

### Local Development
Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open in browser:

```text
http://localhost:3000
```

### NPM Scripts
```bash
npm run dev    # Development mode
npm run lint   # ESLint checks
npm run build  # Production build
npm run start  # Production server
```

### Project Structure
```text
app/         -> Routes and pages
components/  -> UI components
contexts/    -> Language state management
data/        -> Content, SEO, and route data
public/      -> Static assets (images/icons)
```

### Content Update Guide
- Contact info and map links: `data/localizedContent.ts`
- UI translations: `contexts/LanguageContext.tsx`
- SEO metadata: `data/seo.ts`
- Route paths: `data/routes.ts`

### Maps and Google Business
In the contact section:
- Clicking the map opens the Google Maps location
- Profile/review actions open the Google Business profile

Related configuration: `data/localizedContent.ts`
