import { viewToggleBtn } from './modules/viewToggle.js';
import { initFilters, setSort } from './modules/filters.js';

viewToggleBtn();
initFilters();
initSort();

function initSort() {
  const sortSelect = document.querySelector('.js-sort__select');

  if (!sortSelect) return;

  sortSelect.addEventListener('change', () => {
    setSort(sortSelect.value);
  });
}
