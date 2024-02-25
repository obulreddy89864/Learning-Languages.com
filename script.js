//Desktop Menu

document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.querySelector(".sidebar");
    const navbarLinks = document.querySelectorAll(".sidebar .navbar a");
    const content = document.querySelector(".content");

    // Retrieve the collapsed state from local storage or default to false
    let isSidebarCollapsed = localStorage.getItem("isSidebarCollapsed") === "true";

    // Update the UI based on the stored collapsed state
    updateSidebar();

    sidebarToggle.addEventListener("click", function () {
        isSidebarCollapsed = !isSidebarCollapsed;

        // Update the local storage with the new collapsed state
        localStorage.setItem("isSidebarCollapsed", isSidebarCollapsed);

        // Update the UI
        updateSidebar();
    });

    let mouseEnterTimeout;

    sidebar.addEventListener("mouseenter", function () {
        if (isSidebarCollapsed) {
            mouseEnterTimeout = setTimeout(function () {
                sidebar.classList.remove("sidebar-hidden");
            }, 200);
        }
    });

    sidebar.addEventListener("mouseleave", function () {
        if (isSidebarCollapsed) {
            clearTimeout(mouseEnterTimeout);
            sidebar.classList.add("sidebar-hidden");
        }
    });

    function updateSidebar() {
        // Toggle the visibility of navbar elements
        navbarLinks.forEach(link => {
            link.classList.toggle("hidden", isSidebarCollapsed);
        });

        // Toggle the collapsed class on the content
        content.classList.toggle("collapsed", isSidebarCollapsed);

        // Toggle the sidebar-hidden class on the sidebar
        sidebar.classList.toggle("sidebar-hidden", isSidebarCollapsed);
    }
});

//off-canvas menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//post

