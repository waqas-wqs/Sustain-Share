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

window.onscroll = function () {
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

// DONATE BUTTON

// JavaScript to handle donation type selection and update amounts
document.addEventListener('DOMContentLoaded', function () {
    const oneTimeAmounts = ['$35', '$50', '$100', '$250'];
    const monthlyAmounts = ['$5', '$10', '$15', '$20']; // Example monthly amounts

    const donationTypeButtons = document.querySelectorAll('.donation-type-button');
    const donationAmountButtons = document.querySelectorAll('.donation-amount-button');

    function updateDonationAmounts(amounts) {
        donationAmountButtons.forEach((button, index) => {
            button.textContent = amounts[index];
        });
    }

    donationTypeButtons.forEach(button => {
        button.addEventListener('click', function () {
            donationTypeButtons.forEach(btn => btn.classList.remove('selected-donation-type'));
            this.classList.add('selected-donation-type');

            if (this.classList.contains('one-time-donation')) {
                updateDonationAmounts(oneTimeAmounts);
            } else {
                updateDonationAmounts(monthlyAmounts);
            }
        });
    });

    // Initialize with the default selected type
    updateDonationAmounts(oneTimeAmounts);
});