
  // Get all the images with the class "galimg"
  const images = document.querySelectorAll('.galimg');
  const slideshow = document.querySelector('.slideshow');
  const close = document.querySelector('.close');
  const slideshowContent = document.querySelector('.slideshow-content');

  // Function to create the slideshow for the selected image
  function createSlideshow(img) {
    const additionalImages = img.dataset.images.split(',');

    // Clear existing images in the slideshow content
    slideshowContent.innerHTML = '';

    // Create an img element for each image in the data-images attribute
    [img.src, ...additionalImages].forEach((src) => {
      const slide = document.createElement('img');
      slide.src = src;
      slide.style.width = 'auto';
      slide.style.height = '80%';
      slide.style.margin = '0 10px';
      slideshowContent.appendChild(slide);
    });

    // Show the slideshow
    slideshow.style.display = 'block';
  }

  // Attach click event listeners to each image
  images.forEach((img) => {
    img.addEventListener('click', () => createSlideshow(img));
  });

  // Close the slideshow when the close button is clicked
  close.addEventListener('click', () => {
    slideshow.style.display = 'none';
  });

