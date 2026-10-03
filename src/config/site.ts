export const SITE = {
  name: 'phx5g.cloud',
  title: 'phx5g.cloud | Premium Domain for Sale | Phoenix 5G Cloud',
  description:
    'phx5g.cloud for sale — $8,997. Premium domain for Phoenix 5G, edge computing & private networks. Escrow-protected transfer. Buy now or make an offer today.',
  url: 'https://phx5g.cloud/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  price: '8997',
  priceDisplay: '$8,997',
  googleSiteVerification: 'JvPrE8PouQodW9Jt47GaauobNhdKixuJS5BPB4Ok2Ag',
  // Free-plan friendly: Cloudflare Web Analytics token (optional).
  // Set to '' to disable. Add via https://dash.cloudflare.com → Web Analytics.
  cfWebAnalyticsToken: '',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'a9ac8cce-d80e-4b63-12e4-733323b42900',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('phx5g.cloud Domain Acquisition Inquiry — $8,997 Buy Now')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phx5g.cloud ($8,997).\n\nIntended use:\nBudget range:\nPreferred close date:\n\nThank you.')}`;

export const MAKE_OFFER_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Offer: phx5g.cloud')}&body=${encodeURIComponent('Hello,\n\nI would like to make an offer on phx5g.cloud.\n\nOffer amount (USD):\nIntended use:\nTimeline:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'July 2, 2026';
