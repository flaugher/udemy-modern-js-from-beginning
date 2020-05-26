function easyHTTP() {
  // This will take the place of "xhr = ..." that we did in previous lessons
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
  // This replaces "xhr.open..."
  this.http.open('GET', url, true);

  this.http.send();

  // Create copy of this that we can read inside the onload function
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // This is an asynchronous callback.  It has to be asynchronous because
      // we don't know how long it will take for the data to come back so we
      // don't want to print the response until it's there.  Call back tells
      // your code to wait.
      // See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
      callback(null, self.http.responseText);
      // What's happening is that when app.js runs the http.get instruction and passes in the
      // callback function which says to write the response to the console, that action won't occur
      // until http.status is 200.  Notice that 'self.http.response' here maps to the 'response'
      // argument to the callback function shown in app.js.  Note too that we could use whatever
      // variable name we want in app.js.  We used 'response' but we could also have used 'posts' or
      // 'foobar'.  Whatever you use gets mapped to responseText.

      // 'null' is the error.
    } else {
      callback("Error: " + self.http.status);
    }
  }
}

// Make an HTTP POST request

// Make an HTTP PUT request

// Make an HTTP DELETE request
