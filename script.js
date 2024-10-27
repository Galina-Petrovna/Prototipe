const images = document.querySelectorAll('.header__image');
  images.forEach((img, index) => {
    img.style.animationDelay = `${index * 1.4}s`; 
  });