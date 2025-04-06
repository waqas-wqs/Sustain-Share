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


// FORM VAlidation 

document.getElementById('volunteerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form elements
  const formElements = document.getElementById('volunteerForm').elements;
  let isFormValid = true;
  let firstInvalidField = null;

  // Validate each required field
  for (let i = 0; i < formElements.length; i++) {
      const field = formElements[i];

      if (field.hasAttribute('required') && field.value.trim() === '') {
          isFormValid = false;
          if (!firstInvalidField) {
              firstInvalidField = field; // Track the first invalid field
          }
      }
  }

  // Display relevant popup message
  if (!isFormValid) {
      showPopup(`Please fill out all required fields. Missing: ${firstInvalidField.previousElementSibling.textContent}`);
      firstInvalidField.focus(); // Focus on the first invalid field
  } else {
      showPopup('Your volunteering form has been submitted. Thank you!');
      document.getElementById('volunteerForm').reset(); // Optionally reset the form
  }
});

function showPopup(message) {
  document.getElementById('popup-message').textContent = message;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}



