const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');
const submitBtn = document.getElementById('submit-btn');
let myLibrary = [];


// Book object
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Prototype method via object
Book.prototype.info = function(){
    return `${this.title} by ${this.author} has ${this.pages} pages ${this.read}`;
}


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    myLibrary = [bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value];
    addBookToLibrary();
});

function addBookToLibrary() {
    const Books = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    const node = document.createElement('li');
    const textnode = document.createTextNode(Books.info());

    node.appendChild(textnode);
    document.getElementById('storage').appendChild(node);
}







