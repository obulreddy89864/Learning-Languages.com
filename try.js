//topbar scrolling
window.addEventListener('scroll', function() {
    var topbar = document.querySelector('.topbar');
    if (window.scrollY > 0) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});

//off-canvas
function closeNav() {
    var sideNav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");
    sideNav.style.width = "0";
    overlay.style.display = "none";
}
    
document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");
    var sideNav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");

    function openNav() {
        sideNav.style.width = "250px";
        overlay.style.display = "block";
    }

    if (openBtn) {
        openBtn.addEventListener("click", openNav);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeNav);
    }

    if (overlay) {
        overlay.addEventListener("click", closeNav);
    }
});
//wish
document.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('greeting');

    function updateGreeting() {
        const currentTime = new Date().getHours();
        let greetingMessage = '';

        if (currentTime >= 5 && currentTime < 12) {
            greetingMessage = 'Morning';
        } else if (currentTime >= 12 && currentTime < 18) {
            greetingMessage = 'Afternoon';
        } else {
            greetingMessage = 'Evening';
        }

        greetingElement.textContent = `Good ${greetingMessage} 😊`;
    }

    // Update the greeting initially
    updateGreeting();

    // Update the greeting every minute (adjust the interval as needed)
    setInterval(updateGreeting, 6000);
});


//dark-theme
document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        // Apply dark theme to other elements if needed
        document.querySelector('.lsidebar').classList.add('dark-theme');
        document.querySelector('.rsidebar').classList.add('dark-theme');
        document.querySelector('.topbar').classList.add('dark-theme');

        // Update dark mode toggle icon
        updateDarkModeToggle(true);
    }
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update icon based on dark mode state
    updateDarkModeToggle(isDarkMode);

    // Apply dark theme to other elements if needed
    document.querySelector('.lsidebar').classList.toggle('dark-theme', isDarkMode);
    document.querySelector('.rsidebar').classList.toggle('dark-theme', isDarkMode);
    document.querySelector('.topbar').classList.toggle('dark-theme', isDarkMode);
}

function updateDarkModeToggle(isDarkMode) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.innerHTML = `<i class="material-symbols-rounded">${isDarkMode ? 'wb_sunny' : 'dark_mode'}</i>`;
}

// Call the function initially to set the correct state
updateDarkModeToggle(document.body.classList.contains('dark-theme'));


//digital clock
function updateDigitalClock() {
    const clockElement = document.getElementById('digital-clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeFormat = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    const timeString = `${formattedHours}:${padZero(minutes)}:${padZero(seconds)} ${timeFormat}`;
    clockElement.textContent = timeString;
  }

  // Function to pad zero for single-digit numbers
  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  // Update the digital clock every second
  setInterval(updateDigitalClock, 1000);

  // Initial clock update
  updateDigitalClock();
//calender
  //scollbar rsidebar

//post
function initializePostWidget(postWidget) {
            const sliderContainer = postWidget.querySelector('.slider-container');
            const mediaElements = sliderContainer.querySelectorAll('img, video');
            const sliderIcons = postWidget.querySelector('.slider-icons');
            const sliderCounter = postWidget.querySelector('.slider-counter');
            const prevArrow = postWidget.querySelector('.slider-prev');
            const nextArrow = postWidget.querySelector('.slider-next');
        
            let currentIndex = 0;
            let touchStartX = 0;
            let touchEndX = 0;
        
            function showMedia(index) {
                mediaElements.forEach((element, i) => {
                    if (i === index) {
                        element.style.display = 'block';
                        if (element.tagName.toLowerCase() === 'video') {
                            element.play(); // Auto-play the video when displayed
                        }
                    } else {
                        element.style.display = 'none';
                        if (element.tagName.toLowerCase() === 'video') {
                            element.pause(); // Pause other videos
                        }
                    }
                });
        
                if (mediaElements.length > 1) {
                    sliderCounter.textContent = `${index + 1}/${mediaElements.length}`;
                    sliderCounter.style.display = 'block';
                } else {
                    sliderCounter.textContent = '';
                    sliderCounter.style.display = 'none';
                }
        
                if (currentIndex === 0) {
                    prevArrow.style.display = 'none';
                    nextArrow.style.display = 'block';
                } else if (currentIndex === mediaElements.length - 1) {
                    prevArrow.style.display = 'block';
                    nextArrow.style.display = 'none';
                } else {
                    prevArrow.style.display = 'block';
                    nextArrow.style.display = 'block';
                }
            }
        
            function nextMedia() {
                currentIndex = (currentIndex + 1) % mediaElements.length;
                showMedia(currentIndex);
            }
        
            function prevMedia() {
                currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
                showMedia(currentIndex);
            }
        
            function openPopup(mediaSource) {
                const popupContainer = postWidget.querySelector('.popup-container');
                const popupMedia = postWidget.querySelector('.popup-media');
        
                // Set the media source inside the popup
                popupMedia.innerHTML = mediaSource;
        
                // Show the popup
                popupContainer.style.display = 'flex';
            }
        
            function closePopup() {
                const popupContainer = postWidget.querySelector('.popup-container');
                const popupMedia = postWidget.querySelector('.popup-media');
        
                // Clear the media source
                popupMedia.innerHTML = '';
        
                // Hide the popup
                popupContainer.style.display = 'none';
            }
        
            function handleTouchStart(event) {
                touchStartX = event.changedTouches[0].clientX;
            }
        
            function handleTouchEnd(event) {
                touchEndX = event.changedTouches[0].clientX;
        
                // Check for a swipe
                if (touchEndX < touchStartX) {
                    // Swiped left
                    nextMedia();
                } else if (touchEndX > touchStartX) {
                    // Swiped right
                    prevMedia();
                }
            }
        
            // Add touch event listeners to the slider container
            sliderContainer.addEventListener('touchstart', handleTouchStart);
            sliderContainer.addEventListener('touchend', handleTouchEnd);
        
            // Add click event listeners to your images and videos
            mediaElements.forEach((element, index) => {
                element.addEventListener('click', (event) => {
                    // Stop propagation to prevent closing when clicking inside the popup
                    event.stopPropagation();
        
                    const mediaSource = element.tagName.toLowerCase() === 'video'
                        ? `<video src="${element.src}" controls></video>`
                        : `<img src="${element.src}" alt="Full Screen Image">`;
        
                    openPopup(mediaSource);
                });
            });
        
            // Set up popup close event
            const popupContainer = postWidget.querySelector('.popup-container');
            popupContainer.addEventListener('click', closePopup);
        
            // Prevent closing when clicking inside the popup content
            const popupContent = postWidget.querySelector('.popup-content');
            popupContent.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        
            if (mediaElements.length > 1) {
                sliderIcons.style.display = 'block';
            } else {
                sliderIcons.style.display = 'none';
            }
        
            nextArrow.addEventListener('click', nextMedia);
            prevArrow.addEventListener('click', prevMedia);
        
            sliderContainer.addEventListener('mouseover', function () {
                sliderIcons.style.opacity = '1';
            });
        
            sliderContainer.addEventListener('mouseout', function () {
                sliderIcons.style.opacity = '0';
            });
        
            showMedia(currentIndex);
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize existing posts
            const existingPosts = document.querySelectorAll('.post-widget');
            existingPosts.forEach((postWidget, widgetIndex) => {
                initializePostWidget(postWidget);
            });
        
            // Assume this is the function to add a new post to the DOM
            function addNewPost() {
                // ... Add your new post to the DOM ...
        
                // Get the new post and initialize it
                const newPostWidget = document.querySelector('.post-widget'); // Adjust this selector accordingly
                if (newPostWidget) {
                    initializePostWidget(newPostWidget);
                }
            }
        
            // Example: Call addNewPost after a button click or some other event
            // document.getElementById('addPostButton').addEventListener('click', addNewPost);
        });
        
        //to disable right click
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        
        //to load lag the site
        document.addEventListener('DOMContentLoaded', function () {
            // Simulate content loading
            setTimeout(function () {
                // Hide placeholder
                document.querySelector('.post-widget-placeholder').style.display = 'none';
        
                // Show actual post content
                document.querySelectorAll('.post-widget').forEach(postWidget => {
                    postWidget.style.display = 'block';
                });
            }, 2000); // Replace this timeout with your actual content loading logic
        });
        

    document.addEventListener('DOMContentLoaded', function () {
        // ... (your existing code)

        // Attach click event listener to the document and use delegation for love and bookmark icons
        document.addEventListener('click', function (event) {
            const loveIcon = event.target.closest('.action.love i');
            const bookmarkIcon = event.target.closest('.action.bookmark i');

            // Toggle the 'filled' class and adjust the icon content and color
            if (loveIcon) {
                loveIcon.classList.toggle('filled');
                loveIcon.innerHTML = loveIcon.classList.contains('filled') ? 'favorite' : 'favorite_border';
                loveIcon.style.color = loveIcon.classList.contains('filled') ? 'red' : 'initial';
            }

            if (bookmarkIcon) {
                bookmarkIcon.classList.toggle('filled');
                bookmarkIcon.innerHTML = bookmarkIcon.classList.contains('filled') ? 'bookmark' : 'bookmark_border';
                bookmarkIcon.style.color = bookmarkIcon.classList.contains('filled') ? 'black' : 'initial';
            }
        });

        // ... (the rest of your existing code)
    });



  (() => {
    "use strict";

    // Create a loading spinner
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "post-widget-placeholder";
    document.body.appendChild(loadingSpinner);

    window.onload = () => {
      // Select the elements
      const lsidebar = document.querySelector(".lsidebar.hide-initially");
      const rsidebar = document.querySelector(".rsidebar.hide-initially");
      const topbar = document.querySelector(".topbar.hide-initially");

      // Function to display the elements
      function showElements() {
        lsidebar.classList.remove("hide-initially");
        rsidebar.classList.remove("hide-initially");
        topbar.classList.remove("hide-initially");

        // Remove the loading spinner
        loadingSpinner.remove();
      }

      // Call the function after a delay (e.g., 2 seconds)
      setTimeout(showElements, 2000);
    };
  })();


//mobile-menu .js
document.addEventListener('DOMContentLoaded', function () {
    // ... existing script code ...

    var bottomFixedMobileMenu = document.getElementById("bottomFixedMobileMenu");

    function handleBottomMenuVisibility() {
        if (window.innerWidth < 768) {
            bottomFixedMobileMenu.style.display = "flex";
        } else {
            bottomFixedMobileMenu.style.display = "none";
        }
    }

    // Call the function on page load
    handleBottomMenuVisibility();

    // Update visibility on window resize
    window.addEventListener('resize', handleBottomMenuVisibility);

    // ... rest of your script ...
});

document.addEventListener('DOMContentLoaded', function () {
    // ... existing script code ...

    var bottomFixedMobileMenu = document.getElementById("bottomFixedMobileMenu");
    var lastScrollPosition = window.scrollY;

    function handleBottomMenuVisibility() {
        if (window.innerWidth < 768) {
            var currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down
                bottomFixedMobileMenu.style.transform = "translateY(100%)";
            } else {
                // Scrolling up
                bottomFixedMobileMenu.style.transform = "translateY(0)";
            }

            lastScrollPosition = currentScrollPosition;
        }
    }

    // Call the function on page load
    handleBottomMenuVisibility();

    // Update visibility on window resize
    window.addEventListener('resize', handleBottomMenuVisibility);

    // Update visibility on scroll
    window.addEventListener('scroll', handleBottomMenuVisibility);

    // ... rest of your script ...
});
