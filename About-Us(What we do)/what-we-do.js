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


  // CARD FLIP JS
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const innerCard = card.querySelector('.service-card-inner');
            const isFlipped = innerCard.classList.contains('flipped');

            // Remove 'flipped' class from all cards
            cards.forEach(c => c.querySelector('.service-card-inner').classList.remove('flipped'));

            // Flip the clicked card if it wasn't already flipped
            if (!isFlipped) {
                innerCard.classList.add('flipped');
            }
        });
    });
});
