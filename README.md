# phx5g.cloud

Static Astro site for the **phx5g.cloud** premium domain listing. Deployed to Cloudflare Workers Static Assets (assets-only, no adapter).

## Stack

- Astro 5 (static output)
- TypeScript + Tailwind CSS
- Content Collections (use cases)
- Cloudflare Images CDN for hero/OG image
- `@astrojs/sitemap` for sitemap generation

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy   # wrangler deploy → Workers Static Assets
```

## Configuration

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Static site, sitemap, Tailwind |
| `wrangler.toml` | Workers Static Assets (`./dist`) |
| `src/config/site.ts` | Site metadata, CF Images, acquisition mailto |

Acquisition contact: **sales@desertrich.com**
