/**
 * phx5g.cloud — Cloudflare Worker (free-plan compatible).
 * Static-asset hosting + www→apex redirect + security/caching headers.
 * No paid bindings. Uses Workers Static Assets only.
 */

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  // HSTS: only effective over HTTPS (which Cloudflare provides).
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'Content-Security-Policy':
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https://imagedelivery.net; " +
    "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com; " +
    "frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:; upgrade-insecure-requests",
};

const IMMUTABLE_CACHE = 'public, max-age=31536000, immutable';

function applyHeaders(res: Response, req: Request): Response {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(k)) headers.set(k, v);
  }
  const url = new URL(req.url);
  if (/\.(css|js|svg|woff2?)$/.test(url.pathname)) {
    headers.set('Cache-Control', IMMUTABLE_CACHE);
  }
  // Never index the 404 page at the HTTP layer (belt + suspenders with meta noindex).
  if (res.status === 404) headers.set('X-Robots-Tag', 'noindex');
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: { ASSETS: { fetch: typeof fetch } }): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === 'www.phx5g.cloud') {
      url.hostname = 'phx5g.cloud';
      return Response.redirect(url.href, 301);
    }

    const res = await env.ASSETS.fetch(request);
    return applyHeaders(res, request);
  },
};
