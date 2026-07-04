export const SITE = {
  name: 'phx5g.cloud',
  title: 'phx5g.cloud | Phoenix 5G Cloud — Premium Domain',
  description:
    'phx5g.cloud — Phoenix 5G Cloud Infrastructure. A clean, modern landing page for 5G edge computing, private 5G networks, and cloud-native infrastructure serving the Phoenix metro area.',
  url: 'https://phx5g.cloud',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  price: '8997',
  priceDisplay: '$8,997',
  googleSiteVerification: 'JvPrE8PouQodW9Jt47GaauobNhdKixuJS5BPB4Ok2Ag',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'a9ac8cce-d80e-4b63-12e4-733323b42900',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('phx5g.cloud Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phx5g.cloud.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'July 2, 2026';
