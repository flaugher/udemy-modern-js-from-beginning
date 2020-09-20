// Create instance of Github class
const github = new GitHub;
// Create instance of UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {

  // Search as user types each keystroke
  // Get text typed in
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call using GitHub class in github.js
    github.getUser(userText)
      // Return a promise
      // Perform the arrow function on the profile data being returned by the promise
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show error alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});