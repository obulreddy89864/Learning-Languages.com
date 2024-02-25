document.addEventListener('DOMContentLoaded', function () {
  const posts = document.querySelectorAll('.post-widget');

  posts.forEach(post => {
    const imagesContainer = post.querySelector('.image-slider');
    const sliderNav = post.querySelector('.slider-nav');
    const sliderContainer = post.querySelector('.image-slider');

    let swipeStartX = 0;
    let swipeEndX = 0;
    let currentIndex = 0;

    // Example image URLs, replace these with your actual image URLs
    const imageUrls = ["1.jpg", "2.jpg", "3.jpg"];

    // Dynamically create image elements and append them to the container
    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Image';
      imagesContainer.appendChild(img);
    });

    const images = imagesContainer.querySelectorAll('img');
    const totalImages = images.length;

    function showImage(index) {
      images.forEach((img, i) => {
        if (i === index) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }

    function goToPreviousImage() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    }

    function goToNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }

    function handleTouchStart(event) {
      swipeStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
      swipeEndX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
      if (swipeEndX - swipeStartX > 50) {
        goToPreviousImage();
      } else if (swipeStartX - swipeEndX > 50) {
        goToNextImage();
      }
    }

    if (totalImages > 1) {
      // Add event listeners for swipe functionality
      sliderContainer.addEventListener('touchstart', handleTouchStart, false);
      sliderContainer.addEventListener('touchmove', handleTouchMove, false);
      sliderContainer.addEventListener('touchend', handleTouchEnd, false);

      // Always show icons in the post-widget
      post.addEventListener('mouseover', function () {
        sliderNav.style.opacity = 1;
      });

      post.addEventListener('mouseout', function () {
        sliderNav.style.opacity = 0;
      });

      sliderNav.addEventListener('click', function (event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('left-icon')) {
          goToPreviousImage();
        } else if (clickedElement.classList.contains('right-icon')) {
          goToNextImage();
        }
      });

      // Initial display
      showImage(currentIndex);
    } else {
      // Display a single image and hide the slider navigation
      images[0].style.display = 'block';
      sliderNav.style.display = 'none';
    }
  });
});
