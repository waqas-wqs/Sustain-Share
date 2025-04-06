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

// COUNTER JS

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // Increase this number to make the counter slower

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

// DONATE BUTTON

window.onscroll = function () {
  var donateButton = document.getElementById('donateButton');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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

// LIVE CHAT JS

function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'flex' : 'none';
  document.getElementById('initial-message').style.display = chatBox.style.display === 'flex' ? 'block' : 'none';
}

function sendMessage() {
  const messageInput = document.getElementById('chat-message');
  const message = messageInput.value.trim();
  if (message) {
      const chatContent = document.getElementById('chat-content');
      chatContent.innerHTML += `<div class="message user-message">You: ${message}</div>`;
      messageInput.value = '';
      chatContent.scrollTop = chatContent.scrollHeight;

      document.getElementById('initial-message')?.remove();

      setTimeout(() => {
          chatContent.innerHTML += `<div class="message admin-message">Admin: We'll assist you shortly.Thank</div>`;
          chatContent.scrollTop = chatContent.scrollHeight;
      }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => document.getElementById('chat-box').style.display = 'none');

document.addEventListener('click', (event) => {
  const chatBox = document.getElementById('chat-box');
  if (!chatBox.contains(event.target) && !event.target.matches('button')) {
      chatBox.style.display = 'none';
  }
});
