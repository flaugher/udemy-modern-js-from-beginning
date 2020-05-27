function easyHTTP() {
  // This will take the place of "xhr = ..." that we did in previous lessons
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
  // This replaces "xhr.open..."
  this.http.open('GET', url, true);

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

  this.http.send();
}

// Make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);

  // With POSTs you must tell the server what type of data you're sending
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  // When the page loads ('onload'), run the callback function
  this.http.onload = function () {
    // We don't need to check the status like with GET since we're sending data
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request
// Just like POST above except for the function name
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // The response will be an empty object since we're deleting a post
      callback(null, "Post deleted!");
    } else {
      callback("Error: " + self.http.status);
    }
  }

  this.http.send();
}
