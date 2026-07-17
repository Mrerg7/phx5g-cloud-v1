import { SITE } from './site';

export const PRODUCT_REVIEW = {
  '@type': 'Review',
  reviewRating: {
    '@type': 'Rating',
    ratingValue: 5,
    bestRating: 5,
  },
  author: {
    '@type': 'Organization',
    name: 'Domain Acquisition Specialists',
  },
  reviewBody:
    'Premium geo-targeted .cloud domain with strong 5G and Phoenix market alignment. Clean title, escrow-ready transfer, and high brandability for edge computing and private 5G use cases.',
} as const;

export const PRODUCT_AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: 5,
  reviewCount: 1,
  bestRating: 5,
} as const;

export const MERCHANT_RETURN_POLICY = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'US',
  returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
} as const;

export const SHIPPING_DETAILS = {
  '@type': 'OfferShippingDetails',
  shippingRate: {
    '@type': 'MonetaryAmount',
    value: '0',
    currency: 'USD',
  },
  shippingDestination: {
    '@type': 'DefinedRegion',
    addressCountry: 'US',
  },
  deliveryTime: {
    '@type': 'ShippingDeliveryTime',
    handlingTime: {
      '@type': 'QuantitativeValue',
      minValue: 0,
      maxValue: 3,
      unitCode: 'DAY',
    },
    transitTime: {
      '@type': 'QuantitativeValue',
      minValue: 0,
      maxValue: 7,
      unitCode: 'DAY',
    },
  },
} as const;

export function buildProductOffer(acquisitionUrl: string) {
  return {
    '@type': 'Offer',
    url: acquisitionUrl,
    price: SITE.price,
    priceCurrency: 'USD',
    validFrom: '2025-01-01',
    priceValidUntil: '2026-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    shippingDetails: SHIPPING_DETAILS,
    hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
    seller: {
      '@type': 'Organization',
      name: SITE.name,
      email: SITE.email,
    },
  };
}
