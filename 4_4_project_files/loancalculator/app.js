document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  // UI vars
  const elAmount = document.getElementById('amount');
  const elInterest = document.getElementById('interest');
  const elYears = document.getElementById('years');
  const elMonthlyPayment = document.getElementById('monthly-payment');
  const elTotalPayment = document.getElementById('total-payment');
  const elTotalInterest = document.getElementById('total-interest');

  // Convert amount to floating point decimal number
  const principal = parseFloat(elAmount.value);
  const calculatedInterest = parseFloat(elInterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(elYears.value) * 12;

  // Calculations
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Check that monthly got calculated
  if (isFinite(monthly)) {
    // Display result with two decimal places
    elMonthlyPayment.value = monthly.toFixed(2);
    elTotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    elTotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }

  e.preventDefault();
}

// Show error
function showError(message) {
  // Create error div
  const errorDiv = document.createElement('div');

  // Add class to div
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(message));

  // Get elements needed to display error
  const elCard = document.querySelector('.card');
  const elHeading = document.querySelector('.heading');

  // Insert error in the card element before (above) the heading element
  elCard.insertBefore(errorDiv, elHeading);

  // Clear error after three seconds elapse
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}