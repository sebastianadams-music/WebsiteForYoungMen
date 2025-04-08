


// Function to show/hide overlay
function toggleOverlay(event, overlayId) {
    event.preventDefault(); // Prevent the default link behavior
    
    const overlay = document.getElementById(overlayId);
    
    if (overlay.style.display === 'flex') {
      overlay.style.display = 'none'; // Hide the overlay if it's currently visible
    } else {
      overlay.style.display = 'flex'; // Show the overlay
    }
  }
  
  // Function to close overlay when clicking outside of it
  function closeOverlayOnClickOutside(event) {
    const overlay = event.target;
    if (overlay.classList.contains('overlay')) {
      overlay.style.display = 'none'; // Hide the overlay if clicked outside content
    }
  }
  
  // Event listeners for multiple overlays
  document.querySelectorAll('.overlay-trigger').forEach(trigger => {
    const overlayId = trigger.getAttribute('data-overlay-id');
    trigger.addEventListener('click', (event) => toggleOverlay(event, overlayId));
  });
  
  // Event listener to close the overlay when clicking outside the content
  document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', closeOverlayOnClickOutside);
  });
  

// JavaScript to toggle the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// Sticky hamburger functionality
window.onscroll = function() {
    const hamburger = document.getElementById('hamburger');
    if (window.scrollY > 50) {
        hamburger.classList.add('sticky');
    } else {
        hamburger.classList.remove('sticky');
    }
};