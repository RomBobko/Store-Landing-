import { products } from '../data/products.js';
import { renderCatalog } from './catalog.js';

const filtersRoot = document.querySelector('aside[data-filters]');

const filtersState = {
  categories: new Set(),
  price: null,
  rating: null,
};

export function initFilters() {
  if (!filtersRoot) return;

  filtersRoot.addEventListener('change', handleFiltersChange);
}

function handleFiltersChange(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) return;

  if (target.name === 'category') {
    handleCategoryChange(target);
  }

  if (target.name === 'price') {
    handlePriceChange(target);
  }

  if (target.name === 'rating') {
    handleRatingChange(target);
  }

  applyFilters();
}

function handleCategoryChange(input) {
  const value = input.value;

  if (input.checked) {
    filtersState.categories.add(value);
  } else {
    filtersState.categories.delete(value);
  }
}

function handlePriceChange(input) {
  const value = Number(input.value);

  filtersState.price = value > 0 ? value : null;
}

function handleRatingChange(input) {
  const value = Number(input.value);

  filtersState.rating = value > 0 ? value : null;
}

function normalizeCategory(category) {
  return category
    .toLowerCase()
    .replace(/\s*&\s*/g, '-')
    .replace(/\s+/g, '-');
}

function applyFilters() {
  let result = products.slice();

  if (filtersState.categories.size > 0) {
    const selectedCategories = Array.from(filtersState.categories);

    result = result.filter(product => {
      const normalized = normalizeCategory(product.category);
      return selectedCategories.includes(normalized);
    });
  }

  if (filtersState.price !== null) {
    result = result.filter(product => product.price <= filtersState.price);
  }

  if (filtersState.rating !== null) {
    result = result.filter(product => product.rating >= filtersState.rating);
  }

  renderCatalog(result);
}
