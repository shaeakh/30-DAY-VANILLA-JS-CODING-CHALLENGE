// Select all the input elements with the class 'controls'
const inputs = document.querySelectorAll('.controls input');

// Define a function to handle the update of the CSS variables
function handleUpdate() {
  // Get the suffix from the 'data-sizing' attribute of the input element, or an empty string if it doesn't exist
  const suffix = this.dataset.sizing || '';
  
  // Set the value of the CSS variable with the name equal to the 'name' attribute of the input element
  // The value is obtained from the 'value' property of the input element, concatenated with the suffix
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Add event listeners to each input element
inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Listen for the 'change' event
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // Listen for the 'mousemove' event