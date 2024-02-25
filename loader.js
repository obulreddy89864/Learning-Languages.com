//loading
// JavaScript to show and hide the loader during page transitions
document.addEventListener('DOMContentLoaded', function () {
    var loader = document.querySelector('.loader-content');
  
    // Show loader on page load
    loader.style.display = 'block';
  
    // Hide loader when the page is fully loaded
    window.addEventListener('load', function () {
      loader.style.display = 'none';
    });
  
    // Add a class to the body during page transitions
    document.body.addEventListener('click', function () {
      document.body.classList.add('loading');
    });
  
    // Remove the class when the page is fully loaded
    window.addEventListener('load', function () {
      document.body.classList.remove('loading');
    });
  });
  //sidebar hide or show

  
