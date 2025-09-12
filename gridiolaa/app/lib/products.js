export const products = [
  {
    asin: 'B07PCMWTSG',
    title: 'Amazon.com Gift Card in a Box',
    price: '50',
    description: 'Physical-style gift card — delivered digitally. Perfect for birthdays.',
    image: 'https://m.media-amazon.com/images/I/31x451MtRuL._SX425_.jpg',
    link: 'https://amzn.to/4gkt0hH'
  },
  {
    asin: 'B00KCJZ8JY',
    title: 'Amazon.com eGift Card - Email Delivery',
    price: '25',
    description: 'Send instantly via email. Best for last-minute gifts.',
    image: 'https://m.media-amazon.com/images/I/31x451MtRuL._SX425_.jpg',
    link:'https://amzn.to/3VbV8dl'
  }
];

// Helper to build Amazon affiliate URL for a gift card or product
export function buildAmazonAffiliateUrl(asinOrUrl) {
  const tag = 'gridiola-20' ;
  // If provided a raw URL (contains https://), append tag param
  try {
    const u = new URL(asinOrUrl);
    // If amazon already has tag param, keep it
    if (u.searchParams.has('tag')) return u.toString();
    u.searchParams.set('tag', tag);
    return u.toString();
  } catch (e) {
    // treat asinOrUrl as ASIN and build a product URL
    return `https://amzn.to/4gkt0hH`;
  }
}