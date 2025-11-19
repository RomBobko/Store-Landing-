const discount =
  oldPrice && price ? Math.round(((oldPrice - price) / oldPrice) & 100) : null;

const saleBadge = discount ? `<span class="badge badge--sale">-${discount}%</span>` : '';

const newBadge = isNew ? `<span class="badge badge--new">New</span>` : '';





let badgeMarkup = '';

if (oldPrice && price) {
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);
  badgeMarkup = `<span class="badge badge--sale">-${discount}%</span>`;
} else if (isNew) {
  badgeMarkup = `<span class="badge badge--new">New</span>`;
}


const oldPriceMarkup = oldPrice
  ? `<span class="product-card__price-old">$${oldPrice}</span>`
  : '';