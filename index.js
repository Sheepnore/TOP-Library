function renderPage(){

  const showBookDialogButton = document.querySelector('.showBookDialogButton');
  const bookDialog = document.getElementById('bookDialog');
  const closeDialogButton = document.querySelector('.closeDialogButton');
  const addBookToListButton = document.querySelector('.addToList'); 
  const ulElement = document.querySelector('ul');
  let ulHtml = ulElement.innerHTML;

  let bookLibrary = [
    {bookName: 'book1',
     author: 'unknown',
     pages: 100,
     id:"id" + Math.random().toString(16).slice(2),
     readStatus:'unread'
    },
    {bookName: 'book2',
     author: 'unknown',
     pages: 100,
     id:"id" + Math.random().toString(16).slice(2),
     readStatus:'unread'
    },
    {bookName: 'book2',
     author: 'unknown',
     pages: 100,
     id:"id" + Math.random().toString(16).slice(2),
     readStatus:'unread',
    },
  ];

  console.log(bookLibrary);

  bookLibrary.forEach((obj)=>{
    renderBookList(obj);
  });

  function renderBookList(book){
    ulHtml = `
      <li class="book" data-book-id='${book.id}'>
        Book: ${book.bookName}
        Author: ${book.author}
        Pages: ${book.pages}
        <button class='remove' data-removal='${book.id}'>Remove</button>
        <button class='readStatus' data-readButtonId='${book.id}'>Read</button>
      </li>
    `
    ulElement.innerHTML += ulHtml;
    handleButton();
  };

  let books = document.querySelectorAll('.book');
  console.log(books);


  // remove buttons

  function handleButton(){
    ulElement.addEventListener('click',(e)=>{

      if (e.target.classList.contains('remove')){
        const removalId = e.target.dataset.removal;
        const bookItem = document.querySelector(`li[data-book-id='${removalId}']`);
        if (bookItem){
          bookItem.remove();
        }

      const book = bookLibrary.findIndex(obj => obj.id === removalId);
      if (book!==-1){
        bookLibrary.splice(book,1)
        console.log(bookLibrary);
      }
      }

      if (e.target.classList.contains('readStatus')){
        console.log(e.target);
        const readStatusButtonId = e.target.dataset.readbuttonid;
        // const bookItem = document.querySelector(`li[data-readButtonId='${readStatusButtonId}']`);
        const book = bookLibrary.findIndex(obj => obj.id === readStatusButtonId);
        console.log(book);
        if (bookLibrary[book].readStatus === 'unread'){
          bookLibrary[book].readStatus = 'read';
        }
        else{
          bookLibrary[book].readStatus = 'unread';
        }
        console.log(bookLibrary);
      }
    })
  };

  
  

  function Book(name,author,pages,id,readStatus){
    this.bookName = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.readStatus = readStatus
  }
  
  addBookToListButton.addEventListener('click',()=>{
    const inputBookName = document.querySelector('#bookName');
    const name = inputBookName.value;
  
    const inputAuthor = document.querySelector('#author');
    const author = inputAuthor.value;
  
    const inputPages = document.querySelector('#pages');
    const pages = inputPages.value;

    const id = "id" + Math.random().toString(16).slice(2);
    
    const readStatus = 'unread';
  
    const data = new Book(name,author,pages,id,readStatus);
    bookLibrary.push(data);
    console.log(bookLibrary);
    renderBookList(data);
    bookDialog.close();
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


