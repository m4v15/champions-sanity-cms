# Migration Guide: Restructure Branch

This document explains the changes made in the `restructure` branch and how to work with the new codebase structure.

## Overview

The restructure reorganizes the codebase into a more maintainable and scalable structure by:
- Moving all application code into a `src/` directory
- Separating Sanity CMS code into its own `sanity/` directory
- Improving component organization
- Using explicit TypeScript path aliases
- Converting all JavaScript files to TypeScript

## Key Changes

### 1. Directory Structure

**Before (main branch):**
```
/
├── app/
├── components/
├── scenes/
├── schemaTypes/
├── utils/
├── sanity.client.ts
├── sanity.query.ts
├── sanity.types.ts
└── public/
```

**After (restructure branch):**
```
/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable UI components
│   │   └── Layout/       # Layout-specific components
│   ├── scenes/           # Page-level components
│   ├── utils/            # Utility functions
│   └── ...
├── sanity/               # All Sanity CMS code
│   ├── schemaTypes/
│   ├── sanity.client.ts
│   ├── sanity.query.ts
│   └── sanity.types.ts
├── public/               # Static assets
└── sanity.config.ts      # Sanity config at root
```

### 2. TypeScript Path Aliases

The `tsconfig.json` has been updated with explicit path aliases:

```json
{
  "paths": {
    "@/*": ["./src/*"],         // Application code
    "@sanity/*": ["./sanity/*"], // Sanity CMS code
    "@root/*": ["./*"]          // Root-level files (configs, etc.)
  }
}
```

### 3. Import Changes

**Old imports (main branch):**
```typescript
import { Card } from "@/components/Card"
import { getFunds } from "@/sanity/sanity.query"
import config from "@/sanity.config"
```

**New imports (restructure branch):**
```typescript
import { Card } from "@/components"             // Cleaner component imports
import { getFunds } from "@sanity/sanity.query" // Explicit @sanity alias
import config from "@root/sanity.config"        // Root-level files
```

### 4. File Extensions

All files have been converted to TypeScript:
- ✅ `src/scenes/Home/index.jsx` → `src/scenes/Home/index.tsx`
- ✅ `src/scenes/Home/components/index.js` → `src/scenes/Home/components/index.ts`

### 5. Component Organization

Components are now better organized with index files for cleaner exports:

```typescript
// src/components/index.ts
export * from "./Layout"
export { default as Faqs } from "./Faqs";
export { default as Footer } from "./Footer";
export { default as Navbar } from "./Navbar";

// src/components/Layout/index.ts
export { default as Button } from "./Button";
export { default as Card } from "./Card";
export { default as Section } from "./Section";
```

This allows for clean imports:
```typescript
import { Card, Button, Section } from "@/components"
```

## Migration Checklist

If you're merging this branch or working with it, here's what you need to know:

### For Development

1. **Update your imports** if you created new files on main:
   ```typescript
   // Old
   import { getFunds } from "@/sanity/sanity.query"

   // New
   import { getFunds } from "@sanity/sanity.query"
   ```

2. **Place new files in the correct location:**
   - Application code → `src/` directory
   - CMS schemas/queries → `sanity/` directory
   - Static assets → `public/`

3. **Use the new path aliases:**
   - `@/*` for application code in `src/`
   - `@sanity/*` for CMS code in `sanity/`
   - `@root/*` for root-level files (configs, package.json, etc.)

### For Testing

After merging, verify:

```bash
# Install dependencies
yarn install

# Test build process
yarn build

# Test development server
yarn dev

# Verify all routes work:
# - http://localhost:3000/
# - http://localhost:3000/about
# - http://localhost:3000/funds
# - http://localhost:3000/faq
# - http://localhost:3000/media
# - http://localhost:3000/volunteer
# - http://localhost:3000/studio (Sanity Studio)
```

### For Deployment

No deployment configuration changes are needed:
- ✅ Vercel auto-detection handles the `src/` directory
- ✅ Next.js build process works without modification
- ✅ All routes and API endpoints remain the same

## Benefits

### Code Organization
- **Clear separation**: Frontend code vs CMS code
- **Better discoverability**: Components grouped logically
- **Scalability**: Easier to add new features

### Developer Experience
- **Cleaner imports**: Explicit aliases prevent confusion
- **Type safety**: All files now TypeScript
- **IDE support**: Better autocomplete and navigation

### Maintainability
- **Standard convention**: Using `src/` is Next.js best practice
- **Consistent structure**: All similar files grouped together
- **Easier onboarding**: New developers can understand the structure quickly

## Troubleshooting

### TypeScript Can't Find Imports

If TypeScript can't resolve `@/` or `@sanity/` imports:

1. Restart your TypeScript server (VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server")
2. Verify `tsconfig.json` has the correct paths
3. Clear `.next` and rebuild: `rm -rf .next && yarn build`

### Build Errors

If you encounter build errors:

1. Clear all caches:
   ```bash
   rm -rf .next node_modules yarn.lock
   yarn install
   yarn build
   ```

2. Check for old import paths (`@/sanity/...` instead of `@sanity/...`)

### Module Not Found Errors

If you see "Module not found" errors:

1. Verify the file exists in the new location (`src/` or `sanity/`)
2. Check the import path uses the correct alias
3. Ensure the file extension is included in special cases

## Questions?

If you have questions about this restructure:
- Check the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/configuring/src-directory) on the `src/` directory
- Review the commits in the `restructure` branch for specific changes
- Look at the updated file structure in `src/` and `sanity/`

## Reverting Changes

If you need to revert to the old structure:

```bash
git checkout main
```

All changes are isolated to the `restructure` branch and can be safely abandoned if needed.
