import { products } from '../data/products.js';

export const catalogEl = document.querySelector('ul[data-role="catalog"]');
catalogEl.insertAdjacentHTML('beforeend', createCatalogItemsMarkup(products));

function createCatalogItemsMarkup(products) {
  return products
    .map(
      ({
        id,
        title,
        price,
        oldPrice,
        rating,
        reviews,
        isNew,
        image,
        inStock,
        category,
      }) => {
        let badgeMarkup = '';

        if (oldPrice && price) {
          const discount = Math.round(((oldPrice - price) / oldPrice) * 100);
          badgeMarkup = `<span class="badge badge--sale">-${discount}%</span>`;
        } else if (isNew) {
          badgeMarkup = `<span class="badge badge--new">New</span>`;
        }

        const ratingText = rating ? rating.toFixed(1) : 'No Rating';
        const reviewsText = reviews ? `(${reviews})` : '(0)';

        const oldPriceMarkup = oldPrice
          ? `<span class="product-card__price-old">$${oldPrice}</span>`
          : '';

        return `
      <li class="product-card" data-category="${category}">
  <article class="product-card__inner">
    <div class="product-card__media">
      <div class="product-card__badges">
        ${badgeMarkup}
      </div>
      <button class="product-card__favorites" aria-label="Add to favorites" type="button">
        <svg class="icon icon--heart" width="15" height="15">
          <use href="./images/symbol-defs.svg#icon-heart"></use>
        </svg>
      </button>
      <img class="product-card__img" src="${image}" alt="${title}" />
      <button class="product-card__cart-btn" aria-label="Add to cart">
        <svg class="icon icon--cart" width="17" height="17">
          <use href="./images/symbol-defs.svg#icon-shopping-cart"></use></svg
        >Add to cart
      </button>
    </div>
    <div class="product-card__meta">
      <h3 class="product-card__title">${title}</h3>
      <div class="product-card__rating">
        <span class="rating-value">Rating: ${ratingText}</span>
        <span class="rating-count">${reviewsText}</span>
      </div>
      <p class="product-card__price">
        <span class="product-card__price-current">$${price}</span>
        ${oldPriceMarkup}
      </p>
    </div>
  </article>
</li>`;
      },
    )
    .join('');
}
