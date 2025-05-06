document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let index = 0;
    const cardWidth = 280;  //espaço qnd clica na seta

    next.addEventListener('click', () => {
      const maxIndex = track.children.length - 1;
      if (index < maxIndex) {
        index++;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
      }
    });

    prev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
      }
    });
  });