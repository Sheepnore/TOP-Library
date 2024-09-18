

function renderPage(){

  const showBookDialogButton = document.querySelector('.showBookDialogButton');
  const bookDialog = document.getElementById('bookDialog');
  const closeDialogButton = document.querySelector('.closeDialogButton');
  const addBookToListButton = document.querySelector('.addToList'); 
  const books = document.querySelectorAll('.book');
  const ulElement = document.querySelector('ul');
  let ulHtml = ulElement.innerHTML;

  let bookLibrary = [
    {bookName: 'book1',
     author: 'unknown',
     pages: 100
    },
    {bookName: 'book2',
     author: 'unknown',
     pages: 100
    },
    {bookName: 'book2',
     author: 'unknown',
     pages: 100
    },
  ];

  bookLibrary.forEach((obj)=>{
    renderBookList(obj);  
  });

  function renderBookList(book){
    ulHtml += `
      <li class="book">
        Book: ${book.bookName}
        Author: ${book.author}
        Pages: ${book.pages}
      </li>  
    `
    ulElement.innerHTML = ulHtml;
  }
  
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

    renderBookList(data);
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

};

renderPage();


