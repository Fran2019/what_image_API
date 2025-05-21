const carousel = document.getElementById('whatImageComes');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let index = 0;
let allImages = 0;

// function to load images from an API
async function fetchImages() {
  const urls = [
    'https://picsum.photos/seed/39/600/400',
    'https://picsum.photos/seed/143/600/500',
    'https://picsum.photos/seed/185/600/300',
    'https://picsum.photos/seed/153/600/300',
    'https://picsum.photos/seed/39/600/400',
    'https://picsum.photos/seed/99/600/500',
    'https://picsum.photos/seed/455/600/300',
    'https://picsum.photos/seed/353/600/300'
  ];

  urls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    carousel.appendChild(img);
  });

  // to wait a bit for rendering
  setTimeout(() => {
    allImages = carousel.children.length;
    showImage(index);
  }, 100);
}

function showImage(i) {
  carousel.style.transform = `translateX(-${i * 100}%)`;
}

function nextImage() {
  if (allImages === 0) return;
  index = (index + 1) % allImages;
  showImage(index);
}

function prevImage() {
  if (allImages === 0) return;
  index = (index - 1 + allImages) % allImages;
  showImage(index);
}

// asign an event
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// load an image from the beginning.
fetchImages();
