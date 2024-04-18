document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-item-header');

    header.addEventListener('click', () => {
      item.querySelector('.accordion-item-content').classList.toggle('active');
    });
  });
});
