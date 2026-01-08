/**
 * Minimum Defensible Inventory — Landing Page
 * Smooth scroll for CTA buttons (fallback for older browsers)
 */

(function () {
  'use strict';

  // Smooth scroll for anchor links targeting #waitlist
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[href="#waitlist"]');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.getElementById('waitlist');
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
})();

