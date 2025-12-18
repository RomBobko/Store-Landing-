export function sortProducts(items, sortType = 'relevance') {
  const result = items.slice();

  switch (sortType) {
    case 'price-asc':
      return result.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return result.sort((a, b) => b.price - a.price);

    case 'rating-desc':
      return result.sort((a, b) => b.rating - a.rating);

    case 'relevance':
    default:
      return items;
  }
}
