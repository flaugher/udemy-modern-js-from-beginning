// Page state
const PageState = function () {
  // 'this' refers to the page state
  let currentState = new homeState(this);

  // Initialize page state.
  this.init = function () {
    this.change(new homeState);
  }

  // Change the current state.
  this.change = function (state) {
    currentState = state;
  }
};

// Home state
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;  // We don't want a heading, just the Jumbotron.
  document.querySelector('#heading').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `
}

// About state
const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
  <p>This is the About page</p>
  `;
}

// Contact state
const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

// Page state event listeners
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

home.addEventListener('click', (event) => {
  page.change(new homeState);
  event.preventDefault();
})

contact.addEventListener('click', (event) => {
  page.change(new contactState);
  event.preventDefault();
})

about.addEventListener('click', (event) => {
  page.change(new aboutState);
  event.preventDefault();
})

// Page controller
const page = new PageState();
page.init();