const imageContainer = document.querySelector('.image-container');
const previousBtn = document.querySelectorAll('.previousBtn');
const nextBtn = document.querySelectorAll('.nextBtn');

let currentIndex = 0;

const mobileImages = [
  {
    image: './images/mobile-image-hero-1.jpg',
    desktopImage: './images/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    image: './images/mobile-image-hero-2.jpg',
    desktopImage: './images/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    image: './images/mobile-image-hero-3.jpg',
    desktopImage: './images/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
];

function loadContent(index) {
  // Load image
  imageContainer.innerHTML = ''; // Clear the container
  const img = document.createElement('img');
  const imageSrc = window.innerWidth > 700 ? mobileImages[index].desktopImage : mobileImages[index].image;
  img.src = imageSrc;
  img.alt = `hero image ${index + 1}`;
  imageContainer.appendChild(img);

  // Load text
  const title = document.getElementById('title');
  title.innerHTML = mobileImages[index].title;

  const description = document.getElementById('description');
  description.innerHTML = mobileImages[index].description;
}

function showNextContent() {
  currentIndex = (currentIndex + 1) % mobileImages.length;
  loadContent(currentIndex);
}

function showPreviousContent() {
  currentIndex = (currentIndex - 1 + mobileImages.length) % mobileImages.length;
  loadContent(currentIndex);
}

previousBtn.forEach((btn) => {
  btn.addEventListener('click', showPreviousContent);
});

nextBtn.forEach((btn) => {
  btn.addEventListener('click', showNextContent);
});

// Initial load
loadContent(currentIndex);
