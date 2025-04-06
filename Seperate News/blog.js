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

// NEWS DATA

$(document).ready(function () {
  let newsData = [];
  const itemsPerPage = 6;
  let currentPage = 1;

  function fetchNewsData() {
      $.ajax({
          url: 'newsData.json',
          type: 'GET',
          dataType: 'json',
          success: function (data) {
              newsData = data;
              renderNews();
          },
          error: function (error) {
              console.error('Error fetching news data:', error);
          }
      });
  }

  function renderNews() {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      $('#news-grid').empty();

      newsData.slice(start, end).forEach(news => {
          $('#news-grid').append(`
              <div class="news-card">
                  <div class="news-card-content">
                      <h4>${news.title}</h4>
                      <p>${news.date} / ${news.author}</p>
                      <a href="/404 Page/404-page.html" class="read-more">Read More</a>
                  </div>
              </div>
          `);
      });

      renderPagination();
  }

  function renderPagination() {
      const totalPages = Math.ceil(newsData.length / itemsPerPage);
      $('#pagination').empty();

      if (currentPage > 1) {
          $('#pagination').append('<a href="#" id="prev">&laquo; Prev</a>');
      }

      for (let i = 1; i <= totalPages; i++) {
          $('#pagination').append(`<a href="#" class="page-link" data-page="${i}">${i}</a>`);
      }

      if (currentPage < totalPages) {
          $('#pagination').append('<a href="#" id="next">Next &raquo;</a>');
      }

      $('.page-link').on('click', function (event) {
          event.preventDefault();
          currentPage = $(this).data('page');
          renderNews();
      });

      $('#prev').on('click', function (event) {
          event.preventDefault();
          if (currentPage > 1) {
              currentPage--;
              renderNews();
          }
      });

      $('#next').on('click', function (event) {
          event.preventDefault();
          if (currentPage < totalPages) {
              currentPage++;
              renderNews();
          }
      });
  }

  fetchNewsData();
});
