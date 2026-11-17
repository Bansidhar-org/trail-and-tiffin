document.addEventListener('click', (event) => {
  const control = event.target.closest('[data-event]');
  if (control) {
    window.trackShopEvent(control.dataset.event, control.dataset.detail);
  }
});

const filters = [...document.querySelectorAll('[data-filter]')];
if (filters.length) {
  const products = [...document.querySelectorAll('[data-category]')];
  const count = document.querySelector('#catalogue-count');
  document.querySelector('.catalogue-tools').hidden = false;
  count.textContent = products.length + ' items';

  for (const filter of filters) {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;
      for (const button of filters) {
        button.setAttribute('aria-pressed', String(button === filter));
      }
      for (const product of products) {
        product.hidden = category !== 'All' && product.dataset.category !== category;
      }
      const visible = products.filter((product) => !product.hidden).length;
      count.textContent = visible + (visible === 1 ? ' item' : ' items');
      window.trackShopEvent('catalogue_filter', category);
    });
  }
}

const enquiry = document.querySelector('#enquiry-form');
if (enquiry) {
  const gear = document.querySelector('#gear');
  const requested = new URLSearchParams(window.location.search).get('gear');
  if ([...gear.options].some((option) => option.value === requested)) {
    gear.value = requested;
  }

  const status = document.querySelector('#enquiry-result');
  enquiry.querySelector('button').disabled = false;
  enquiry.addEventListener('change', () => { status.hidden = true; });
  enquiry.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = false;
    window.trackShopEvent('demo_enquiry_submit', 'demo_form');
  });
}
