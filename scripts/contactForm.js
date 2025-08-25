document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Process the data (e.g., send via AJAX, display in console)
    console.log('Name:', name);
    console.log('Email:', email);

    // Optionally, you can manually submit the form if needed (e.g., to a hidden iframe)
    // form.submit(); 
  });
});