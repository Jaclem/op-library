const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const submitBtn = document.getElementById('submit-btn');
const addBtn = document.getElementById('add-book');
const addForm = document.getElementById('form-flex');
const modal = document.getElementById('modal');
let bookRead;
let myLibrary = [];

const toggleActive = () => {
    addForm.classList.add('display-modal');
}

const toggleInactive = () => {
    addForm.classList.remove('display-modal');
}

// Book object
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = Number(pages)
    this.read = read
}

// Prototype method via object
Book.prototype.info = function() {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    

    if(document.getElementById('book-yes').checked){
        bookRead = "\u2705";
    }
    else {
        bookRead = "\u274C";
    }

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
    const Books = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead);
    myLibrary = [Books.title, Books.author, Books.pages, Books.read];
    const node = document.createElement('tr');
    let nodeHeader;
    let textnode;

    myLibrary.forEach(book => {
        nodeHeader = document.createElement('td');
        textnode = document.createTextNode(book);
        node.appendChild(nodeHeader);
        nodeHeader.appendChild(textnode);
        document.getElementById('storage').appendChild(node);
    });
}







