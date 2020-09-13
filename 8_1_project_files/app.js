// Create instance of Github class
const github = new GitHub;

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

        } else {
          // Show profile

        }
      })
  } else {
    // Clear profile
  }
});