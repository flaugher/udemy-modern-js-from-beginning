const user = { email: 'jdoe@example.com' };

try {
  // Make ReferenceError
  // myFunction();

  // Make SyntaxError
  // eval('Hello world');

  // Make URIError
  // decodeURIComponent('%');

  // Make custom error
  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('finally always runs ...');
}

console.log('Program continues ...');
