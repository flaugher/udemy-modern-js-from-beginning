const http = new easyHTTP;

// Create GET to get all posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create GET to get a single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create data to POST using their API (i.e. title, body fields, don't need Id or username)
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

// Create POST
// Note that it make take 30 seconds or so before you see the post response in your console.
// http.post('https://jsonplaceholder.typicode.com/posts',
//   data, function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   });

// Create PUT request to update a record
// Note that you have to pass the ID of the post you want to update
http.put('https://jsonplaceholder.typicode.com/posts/1',
  data, function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  });

// Create DELETE request to delete a record
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});