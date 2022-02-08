const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');
const submitBtn = document.getElementById('submit-btn');
const addBtn = document.getElementById('add-book');
const addForm = document.getElementById('form-flex');
const modal = document.getElementById('modal');
let functionIsRunning = false;

let myLibrary = [];

const toggleActive = () => {
    addForm.classList.add('display-modal');
    functionIsRunning = true;
}

const toggleInactive = () => {
    addForm.classList.remove('display-modal');
}

const isRunning = () => {
    if (!functionIsRunning) {
        functionIsRunning = true;
    }
}

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

// displays modal if Add button is clicked and closes if clicked outside of form
document.addEventListener('click', (e)=> {
    let btnClick = e.target;

    if(addBtn.contains(btnClick)){
        toggleActive();
    }
    else if(!addForm.contains(btnClick) || submitBtn.contains(btnClick)){
        toggleInactive();
    }
});


function addBookToLibrary() {
    const Books = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    const node = document.createElement('li');
    const textnode = document.createTextNode(Books.info());

    node.appendChild(textnode);
    document.getElementById('storage').appendChild(node);
}







