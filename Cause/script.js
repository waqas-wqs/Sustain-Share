// Define a function to scroll to the top
function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  
  // Call the function when the window is loaded
  window.onload = function () {
    scrollToTop();
  };
  
  // Call the function when the page is reloaded
  window.addEventListener('beforeunload', function () {
    scrollToTop();
  });

// DONATE BUTTON

window.onscroll = function() {
    var donateButton = document.getElementById('donateButton');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        donateButton.classList.add('show');
    } else {
        donateButton.classList.remove('show');
    }
  };

// MOBILE MENU

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.classList.toggle('active');
    });
  });
});

// COUNTER JS

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 400; // Increase this number to make the counter slower

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 60);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});


