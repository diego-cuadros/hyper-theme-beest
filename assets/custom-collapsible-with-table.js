document.querySelectorAll('.dc-collapsible-with-table__header').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.dc-collapsible-with-table__item');
      item.classList.toggle('dc-collapsible-with-table-is-open');
    });
  });