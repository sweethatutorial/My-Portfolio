const cards = document.querySelectorAll('.skill-card, .project-card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = '0.3s';
  });
});