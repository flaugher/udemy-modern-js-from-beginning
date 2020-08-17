class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create row element.
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `
    // Add new row to list
    list.appendChild(row);
  }

  deleteBookFromList(target) {
    // Go up two elements, from the anchor inside the column to the column in the row, in order to delete the row
    if (target.className === 'delete') {
      // Traverse the DOM up two levels
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className) {
    // howto: insert an element before another element
    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = `alert ${className}`;
    // Add text to div
    div.appendChild(document.createTextNode(message));
    // Get parent of new div element and existing form element
    const container = document.querySelector('.container');
    // Get form that we'll insert the error before
    const form = document.querySelector('#book-form');
    // Insert error div inside the container before the form
    container.insertBefore(div, form);
    // Remove error after 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event Listener for adding a book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values.
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate a book.
  const book = new Book(title, author, isbn);

  // Instantiate the UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert("Please fill in all fields.", 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Show 'success' alert
    ui.showAlert("Book added!", 'success');
    // Clear form
    ui.clearForm();
  }

  e.preventDefault();
})

// If you have a page element like the "X" delete button that will show up on the page and have
// the same class or something that is added dynamically because it's not there when the page
// loads, you have to use event delegation.

// Event listener for deleting a book
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBookFromList(e.target);
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});