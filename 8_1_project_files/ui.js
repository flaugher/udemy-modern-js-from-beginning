class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    // Build user profile
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-primary">Followers: ${user.followers}</span>
            <span class="badge badge-primary">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  clearProfile() {
    // You could do this to get rid of an alert if the user clears the search box but Brad
    // prefers to use a timeout function.
    // this.clearAlert()
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {
    // Clear any previous alerts
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // Get parent of place where you want to insert the div
    // He added the 'searchContainer class to the target div solely so that he could locate that div in this code.
    const container = document.querySelector('.searchContainer');
    // Get search div
    const search = document.querySelector('.search');
    // Insert div containing the alert before the search div
    container.insertBefore(div, search);
    // Remove alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message each time it's triggered so that alerts don't "pile up"
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}