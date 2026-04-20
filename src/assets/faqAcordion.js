document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
    const accordionItem = button.parentElement;

    // Alternar la clase active en el ítem clickeado
    accordionItem.classList.toggle('active');
    if (!accordionItem.classList.contains('init')) {
      accordionItem.classList.add('init');
    }
  });
});