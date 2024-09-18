const showBookDialogButton = document.querySelector('.showBookDialogButton');
const bookDialog = document.getElementById('bookDialog');
const closeDialogButton = document.querySelector('.closeDialogButton');
const addBookToListButton = document.querySelector('.addToList'); 

let bookLibrary = [];

function Book(name,author,pages){
  this.bookName = name;
  this.author = author;
  this.pages = pages;
}

addBookToListButton.addEventListener('click',()=>{
  const inputBookName = document.querySelector('#bookName');
  const name = inputBookName.value;

  const inputAuthor = document.querySelector('#author');
  const author = inputAuthor.value;

  const inputPages = document.querySelector('#pages');
  const pages = inputPages.value;

  const data = new Book(name,author,pages);
  bookLibrary.push(data);
})



// Button default behavior is submit, use preventDefault to cancel the default
function preventButtonDefault(event){
  event.preventDefault();
}

showBookDialogButton.addEventListener('click',()=>{
  bookDialog.showModal();
})

closeDialogButton.addEventListener('click', ()=>{
  bookDialog.close();
})

closeDialogButton.addEventListener('click', preventButtonDefault);

addBookToListButton.addEventListener('click', preventButtonDefault);
