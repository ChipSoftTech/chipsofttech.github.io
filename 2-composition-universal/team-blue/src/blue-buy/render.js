const prices = {
  t_porsche: '66,000',
  t_fendt: '54,000',
  t_eicher: '58,000',
};

export default function renderBuy(sku = 't_porsche') {
  const price = prices[sku];
  return `<button type="button">buy for ${price}</button>`;
}
