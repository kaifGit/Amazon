
  document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById('scroll-to-top');

    scrollToTopButton.addEventListener('click', function () {
      var topNavbar = document.getElementById('top-navbar');

      // Scroll to the top of the nav bar with a smooth effect
      topNavbar.scrollIntoView({ behavior: 'smooth' });
    });
  });