// An empty array that will hold every book object in the library
const myLibrary = [];

// Constructor: a template for building book objects.
// Call it with `new`, and `this` refers to the brand-new object being created.
function Book(title, author, pages, read) {
    // Generates a unique id string for each book, so books can be
    // told apart even if they share a title or get reordered/removed
    this.id = crypto.randomUUID();

    // Copy each argument onto the new object as a property
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // e.g. true/false: has the book been read?
}

// Separate function (not inside the constructor) that takes book details,
// builds a Book from them, and stores it in the library
function addBookToLibrary(title, author, pages, read) {
    // `new` runs the constructor and gives back a fresh book object
    const newBook = new Book(title, author, pages, read);

    // Add the new book to the end of the myLibrary array
    myLibrary.push(newBook);
}