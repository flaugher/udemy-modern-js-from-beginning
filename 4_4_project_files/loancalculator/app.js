// This causes a submit to call calculate results immediately.
// document.getElementById('loan-form').addEventListener('submit', calculateResults);
// To implement the spinner, we replace the call with a function so we can delay calling 'calculateResults'.
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // Ensure that any previous results are hidden.
  document.getElementById('results').style.display = 'none';

  // Then display loading spinner.
  document.getElementById('loading').style.display = 'block';

  // Wait for 2 seconds before calculating results.
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// We removed the 'e' input arg since this is no longer the true event handler.
function calculateResults() {
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

    // To implement spinner, we add this code to show the results here and hide the loader.
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    showError("Please check your numbers");
  }

  // When adding the spinner feature, we can also get rid of this.
  e.preventDefault();
}

// Show error
function showError(message) {
  // To implement spinner, we add these two commands to hide the spinner and any previous results.
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';

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