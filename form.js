document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const displayData = document.getElementById('displayData');
  
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const dataToShow = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
      `;
  
      displayData.innerHTML = dataToShow;
      registrationForm.reset();
    });
  });
  