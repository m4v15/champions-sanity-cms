# Claude Context: Gaza Champions Sanity CMS

## Project Overview
**Gaza Champions** is a Next.js 15 application with Sanity CMS integration for managing a website that supports fundraising efforts for Gaza. The site features a blog, FAQs, funds information, media links, and volunteer sign-up functionality.

## Tech Stack
- **Frontend**: Next.js 15.5.12 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS 4.1.7, styled-components 6.1.18
- **CMS**: Sanity 3.68.3 with Sanity Vision plugin
- **UI Components**: Headless UI 2.2.4, Heroicons 2.2.0
- **Analytics**: Vercel Analytics
- **Package Manager**: Yarn 4.4.1

## Project Structure

### App Routes (Next.js App Router)
- **CMS Routes** (`/src/app/(cms)/`):
  - `/studio/*` - Sanity Studio interface for content management
  
- **Site Routes** (`/src/app/(site)/`):
  - `/` - Homepage with hero, featured posts, Instagram embeds, FAQs
  - `/about` - About page
  - `/blog` - Blog listing with category filtering and pagination
  - `/blog/[slug]` - Individual blog post pages
  - `/faq` - FAQ page
  - `/funds` - Funds information
  - `/media` - External media links
  - `/volunteer` - Volunteer information

### Key Directories

#### `/sanity/`
- **schemaTypes/** - Sanity schema definitions:
  - `blogPost.ts` - Blog post content type with rich text, categories, featured images
  - `category.ts` - Blog post categories
  - `siteContent.ts` - Global site content (landing title/subtitle, about text)
  - `faqs.ts` - FAQ entries
  - `funds.ts` - Fundraising fund information
  - `links.ts` - External media/social links
- **queries/** - Sanity GROQ queries for fetching content
- `sanity.client.ts` - Sanity client configuration
- `sanity.query.ts` - Query execution functions

#### `/src/components/`
- Shared components: `Navbar`, `Footer`, `Faqs`
- **Layout/** - Reusable layout components: `Button`, `Card`, `Section`

#### `/src/scenes/`
- Page-specific components organized by route:
  - **Home/** - Homepage sections (Hero, FeaturedPosts, Insta, Faqs, Substack)
  - **BlogList/** - Blog listing with CategoryFilter, Pagination
  - **BlogPost/** - Individual post display with PortableTextContent, RelatedPosts
  - **About/** - About page content
  - **Media/** - External links display
  - **Volunteer/** - Volunteer information

## Sanity Configuration
- **Project ID**: `whsvh8u8`
- **Dataset**: `production`
- **Base Path**: `/studio`
- **Plugins**: structureTool, visionTool, colorInput
- **API Version**: `2025-01-11`
- **CDN**: Disabled (useCdn: false)

## Content Types
1. **Blog Post** - Full blog posts with:
   - Title, slug, excerpt (max 200 chars)
   - Featured image with alt text
   - Rich text content (block content with headings, lists, links, images)
   - Categories, tags
   - Author info, publish date
   - Featured flag for homepage display

2. **Category** - Blog post categorization
3. **Site Content** - Global content (hero text, about section)
4. **FAQs** - Frequently asked questions
5. **Funds** - Fundraising fund details
6. **Links** - External media/social links (filtered by type, e.g., "insta")

## Important Configuration

### App Config (`/src/utils/AppConfig.tsx`)
- Site name: "Gaza Champions"
- Sign-up link: SeaTable form for volunteer registration
- Navigation links: blog, faq, newsletter (external Substack), volunteer, funds, media

### Image Configuration
- Sanity CDN images allowed via Next.js `remotePatterns`
- Protocol: https, Hostname: cdn.sanity.io

## Development Commands
```bash
yarn dev          # Start dev server with Turbopack
yarn build        # Production build
yarn start        # Start production server
yarn lint         # Run Next.js linter
yarn eslint       # Run ESLint on all files
yarn clean        # Remove .next directory
```

## Current Branch Context
- **Current Branch**: `feat/blog-schemas`
- **Default Branch**: `main`
- **Active PR**: #36 - Feat/blog schemas
- Working on blog schema and functionality improvements

## Key Features
1. **Blog System** - Full-featured blog with:
   - Category filtering
   - Pagination
   - Featured posts on homepage
   - Related posts on individual posts
   - Rich text content with Portable Text

2. **Social Integration**:
   - Instagram embeds on homepage (using react-social-media-embed)
   - Substack newsletter integration
   
3. **Content Management**:
   - Sanity Studio at `/studio` for non-technical content editing
   - Structured content types for consistency
   
4. **Volunteer System**:
   - External SeaTable form integration for sign-ups

## Styling Approach
- Tailwind CSS for utility-first styling
- Custom fonts in `/public/fonts/`
- Brand assets in `/public/logo/`
- Global styles in `src/app/globals.css`
- Some styled-components usage

## Development Notes
- Uses Next.js App Router (not Pages Router)
- Server Components by default (async components fetch data)
- Turbopack enabled for faster dev builds
- TypeScript strict mode enabled
- ESLint with Prettier integration

## Common Tasks

### Adding a New Sanity Schema
1. Create schema file in `/sanity/schemaTypes/`
2. Export from `/sanity/schemaTypes/index.ts`
3. Create corresponding query in `/sanity/queries/`
4. Export query from `/sanity/queries/index.ts`
5. Use query in page/component

### Adding a New Page
1. Create route folder in `/src/app/(site)/`
2. Add `page.tsx` with async Server Component
3. Fetch data using Sanity queries
4. Import scene component from `/src/scenes/`
5. Update navigation in `AppConfig.tsx` if needed

### Working with Blog Posts
- Content uses Portable Text (block content)
- Render with `PortableTextContent` component from `/src/scenes/BlogPost/components/`
- Images from Sanity must use `next-sanity` image builder
- Categories are referenced documents, not strings

## External Services
- **Sanity**: Content management backend
- **Vercel**: Hosting and analytics (assumed)
- **Substack**: Newsletter platform
- **SeaTable**: Volunteer form management
- **Instagram**: Social media embeds

## Important Files to Reference
- [sanity.config.ts](sanity.config.ts) - Sanity configuration
- [next.config.ts](next.config.ts) - Next.js configuration
- [src/utils/AppConfig.tsx](src/utils/AppConfig.tsx) - App-wide constants
- [sanity/schemaTypes/index.ts](sanity/schemaTypes/index.ts) - Content type definitions
- [sanity/sanity.query.ts](sanity/sanity.query.ts) - Data fetching functions
