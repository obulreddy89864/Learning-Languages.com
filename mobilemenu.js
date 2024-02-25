
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
    