// The blur event fires when an element has lost focus
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  // Should include letters A-Z, case-insensitive, and be between 2 and 10 letters long
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    // Add Bootstrap class so that error message is displayed
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validateZip() {
  const zip = document.getElementById('zip');
  // 5 digits with optional dash and four more digits
  // By adding (...)?, everything in the () group is optional
  re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}
function validateEmail() {
  const email = document.getElementById('email');
  // Letters, digits, underscore, literal dash, literal dot
  // + means more than one
  // Literal dot and last group of between two and five letters (com, net, media, etc.)
  re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validatePhone() {
  const phone = document.getElementById('phone');
  // Should accept (555) 555-5555, 555-555-5555, 555 555 5555, 555.555.5555
  re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
