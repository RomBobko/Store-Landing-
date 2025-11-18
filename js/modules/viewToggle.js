export function viewToggleBtn() {
  const toggleGroup = document.querySelector('.view-toggle');
  const catalogList = document.querySelector('ul[data-role="catalog"]');

  toggleGroup.addEventListener('click', event => {
    const button = event.target.closest('button[data-view]');
    if (!button) return;

    const view = button.dataset.view;

    toggleGroup.querySelectorAll('button[data-view]').forEach(btn => {
      btn.classList.toggle('view-toggle__button--active', btn === button);
      btn.setAttribute('aria-pressed', btn === button);
    });

    catalogList.classList.toggle('products--grid', view === 'grid');
    catalogList.classList.toggle('products--list', view === 'list');
  });
}

// export function viewToggleBtn() {
//   const gridBtn = document.querySelector('button[data-view="grid"]');
//   const listBtn = document.querySelector('button[data-view="list"]');
//   const catalogList = document.querySelector('ul[data-role="catalog"]');

//   gridBtn.addEventListener('click', () => {
//     gridBtn.classList.add('view-toggle__button--active');
//     listBtn.classList.remove('view-toggle__button--active');

//     gridBtn.setAttribute('aria-pressed', true);
//     listBtn.setAttribute('aria-pressed', false);

//     catalogList.classList.add('products--grid');
//     catalogList.classList.remove('products--list');
//   });

//   listBtn.addEventListener('click', () => {
//     listBtn.classList.add('view-toggle__button--active');
//     gridBtn.classList.remove('view-toggle__button--active');

//     listBtn.setAttribute('aria-pressed', true);
//     gridBtn.setAttribute('aria-pressed', false);

//     catalogList.classList.add('products--list');
//     catalogList.classList.remove('products--grid');
//   });
// }
