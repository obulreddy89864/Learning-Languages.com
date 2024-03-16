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

document.addEventListener('DOMContentLoaded', function () {
    const postWidgets = document.querySelectorAll('.post-widget');
  
    postWidgets.forEach((postWidget, widgetIndex) => {
      const sliderContainer = postWidget.querySelector('.slider-container');
      const slides = sliderContainer.querySelectorAll('img, video');
      const sliderIcons = postWidget.querySelector('.slider-icons');
      const sliderCounter = postWidget.querySelector('.slider-counter');
      const prevArrow = postWidget.querySelector('.slider-prev');
      const nextArrow = postWidget.querySelector('.slider-next');
  
      let currentIndex = 0;
      let currentVideo = null;
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = 'block';
            if (slide.tagName.toLowerCase() === 'video') {
              currentVideo = slide;
              currentVideo.play();
            }
          } else {
            slide.style.display = 'none';
            if (slide.tagName.toLowerCase() === 'video') {
              slide.pause();
            }
          }
        });
  
        if (slides.length > 1) {
          sliderCounter.textContent = `${index + 1}/${slides.length}`;
          sliderCounter.style.display = 'block';
        } else {
          sliderCounter.textContent = '';
          sliderCounter.style.display = 'none';
        }
  
        if (currentIndex === 0) {
          prevArrow.style.display = 'none';
          nextArrow.style.display = 'block';
        } else if (currentIndex === slides.length - 1) {
          prevArrow.style.display = 'block';
          nextArrow.style.display = 'none';
        } else {
          prevArrow.style.display = 'block';
          nextArrow.style.display = 'block';
        }
      }
  
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }
  
      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }
  
      if (slides.length > 1) {
        sliderIcons.style.display = 'block';
      } else {
        sliderIcons.style.display = 'none';
      }
  
      nextArrow.addEventListener('click', nextSlide);
      prevArrow.addEventListener('click', prevSlide);
  
      sliderContainer.addEventListener('mouseover', function () {
        sliderIcons.style.opacity = '1';
      });
  
      sliderContainer.addEventListener('mouseout', function () {
        sliderIcons.style.opacity = '0';
      });
  
      showSlide(currentIndex);
    });
  });

// Define the menu items as an array of objects
const menuItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'post', icon: 'add_circle', label: 'Post' },
    { id: 'explore', icon: 'search', label: 'Explore' },
    { id: 'images', icon: 'image', label: 'Images' },
    { id: 'videos', icon: 'videocam', label: 'Videos' },
    { id: 'files', icon: 'folder_open', label: 'Files' },
    { id: 'saved', icon: 'bookmark', label: 'Saved' },
    { id: 'profile', icon: 'person', label: 'Profile' },
    { id: 'logout', icon: 'logout', label: 'Logout' },
];

// Define a function to generate the HTML for a single menu item
function generateMenuItemHTML(item) {
    let activeClass = '';
    if (window.location.pathname.endsWith(item.id + '.html')) {
        activeClass = 'active';
    }
    return `
      <a href="${item.id}.html" class="${item.id}-space ${activeClass}">
        <i class="material-symbols-rounded">${item.icon}</i>
        <span>${item.label}</span>
      </a>
    `;
}

// Define a function to generate the HTML for the entire sidebar
function generateSidebarHTML() {
    return `
      <div class="lsidebar">
        <div class="elements">
          <div class="wish" id="greeting"></div>
          <div class="space-top"></div>
          ${menuItems.map(generateMenuItemHTML).join('')}
          <div class="space-bottom"></div>
        </div>
      </div>
    `;
}

// Define a function to append the generated sidebar HTML to the page
function appendSidebarHTML() {
    const sidebarContainer = document.createElement('div');
    sidebarContainer.innerHTML = generateSidebarHTML();
    document.body.appendChild(sidebarContainer);
}

// Call the function to append the generated sidebar HTML to the page
appendSidebarHTML();
//wish
document.addEventListener('DOMContentLoaded', function () {
    // Update the greeting initially
    updateGreeting();
    // Update the greeting every minute
    setInterval(updateGreeting, 90000);
    });
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date().getHours();
    let greetingMessage = '';
    let emoji = '';
    if (currentTime >= 5 && currentTime < 12) {
        greetingMessage = 'Morning';
        emoji = '🌞';
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = 'Afternoon';
        emoji = '☀️';
    } else {
        greetingMessage = 'Evening';
        emoji = '🌃';
    }
    greetingElement.textContent = `Good ${greetingMessage} ${emoji}`;
}
//off-canvas
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the menu icon
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', toggleSidebar);

    // Call the function to handle sidebar behavior based on screen size
    handleSidebarBehavior();

    // Update sidebar behavior when the window is resized
    window.addEventListener('resize', handleSidebarBehavior);

    // Add event listener to the overlay to close the sidebar
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closeSidebar);
});

function toggleSidebar() {
    const sidebar = document.querySelector('.lsidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('open'); // Toggle overlay
}

function closeSidebar() {
    const sidebar = document.querySelector('.lsidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.remove('open');
    overlay.classList.remove('open'); // Hide overlay
}

function handleSidebarBehavior() {
    const sidebar = document.querySelector('.lsidebar');
    const overlay = document.getElementById('overlay');
    const screenWidth = window.innerWidth;

    // If screen width is less than 700px, enable off-canvas mode
    if (screenWidth < 700) {
        sidebar.classList.add('off-canvas');
    } else {
        sidebar.classList.remove('off-canvas', 'open');
        overlay.classList.remove('open'); // Hide overlay
    }
}


//css file load

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#darkModeToggle');

    // Check if user preference is dark mode
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check local storage for user's dark mode preference
    const localStoragePref = localStorage.getItem('darkMode');

    // If local storage pref is null, use user preference
    if (localStoragePref === null) {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            darkModeToggle.innerHTML = '<i class="material-symbols-rounded">wb_sunny</i>';
        } else {
            document.body.classList.remove('dark-theme');
            darkModeToggle.innerHTML = '<i class="material-symbols-rounded">dark_mode</i>';
        }
    } else {
        // If local storage pref is either 'dark' or 'light'
        if (localStoragePref === 'dark') {
            document.body.classList.add('dark-theme');
            darkModeToggle.innerHTML = '<i class="material-symbols-rounded">wb_sunny</i>';
        } else {
            document.body.classList.remove('dark-theme');
            darkModeToggle.innerHTML = '<i class="material-symbols-rounded">dark_mode</i>';
        }
    }

    darkModeToggle.addEventListener('click', function() {
        // If dark mode is on...
        if (document.body.classList.contains('dark-theme')) {
            // Turn it off
            document.body.classList.remove('dark-theme');
            darkModeToggle.innerHTML = '<i class="material-symbols-rounded">dark_mode</i>';
            localStorage.setItem('darkMode', 'light');
        } else {
            // If dark mode is off...
            // Turn it on
            document.body.classList.add('dark-theme');
            darkModeToggle.innerHTML = '<i class="material-symbols-rounded">wb_sunny</i>';
            localStorage.setItem('darkMode', 'dark');
        }
    });
});
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
//scroll


//scrolling effect
window.addEventListener('scroll', function() {
    var topbar = document.querySelector('.topbar');
    if (window.scrollY > 0) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});
// Function to generate the HTML for the topbar
function generateTopbarHTML() {
    // Create elements for company name
    const companyNameDiv = document.createElement('div');
    companyNameDiv.classList.add('company-name');
    companyNameDiv.textContent = 'SUBBU';

    // Create elements for menu icon
    const menuIconDiv = document.createElement('div');
    menuIconDiv.classList.add('t2-icon');
    menuIconDiv.style.cursor = 'pointer';
    menuIconDiv.innerHTML = `
        <div class="overlay" id="overlay"></div>
        <div style="cursor: pointer;" id="menu-icon">
            <i class="material-symbols-rounded">menu</i>
        </div>
    `;

    // Create elements for dark mode toggle
    const darkModeToggleDiv = document.createElement('div');
    darkModeToggleDiv.classList.add('topbar-icon');
    darkModeToggleDiv.style.cursor = 'pointer';
    darkModeToggleDiv.style.userSelect = 'none';
    darkModeToggleDiv.innerHTML = `
        <div class="dm-mode-1" id="darkModeToggle">
            <i class="material-symbols-rounded">dark_mode</i>
        </div>
    `;

    // Create topbar container
    const topbarDiv = document.createElement('div');
    topbarDiv.classList.add('topbar');
    topbarDiv.appendChild(companyNameDiv);
    topbarDiv.appendChild(menuIconDiv);
    topbarDiv.appendChild(darkModeToggleDiv);

    return topbarDiv;
}

// Function to append the generated topbar HTML to the page
function appendTopbarHTML() {
    const topbarContainer = document.createElement('div');
    topbarContainer.innerHTML = generateTopbarHTML().outerHTML;
    document.body.appendChild(topbarContainer);
}

// Call the function to append the generated topbar HTML to the page
appendTopbarHTML();