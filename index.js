


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
  