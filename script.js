// JavaScript for adding functionality to checkboxes

// Get all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Check if all checkboxes are checked
    const allChecked = [...checkboxes].every(function(cb) {
      return cb.checked;
    });

    // If all checkboxes are checked, enable submit button
    const submitButton = document.querySelector('button[type="submit"]');
    if (allChecked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
});
