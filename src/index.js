import './style.scss';

(() => {

  const root = document.querySelector('.accordion');
  const items = root.querySelectorAll('.accordion__item');

  items.forEach((item) => {
    item.addEventListener('click', () => {

      if ( item.classList.contains('is-open') ) {
        item.classList.remove('is-open');
        return;
      }

      items.forEach(el => el.classList.remove('is-open'));
      item.classList.add('is-open');

    })
  });

})();
