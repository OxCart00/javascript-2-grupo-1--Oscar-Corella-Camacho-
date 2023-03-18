import Bookstore from './modulos/Bookstore.js';
import Book from './modulos/Book.js';
import Comic from './modulos/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Bookstore', 'LV');
  const sidebar = document.getElementById('sidebar');
  const menu = ['Show Books', 'Show Comics', 'Add Book', 'Add Comic'];

  const initialize = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
      ${bookstore1.getName}
      </h2>`
    );
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
    menuFunctionality();
  }

  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
        <button id="${index}">${elem}</button>
      </li>`
    });

    return menuHtml;
  }

  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu

        const { id } = event.target
            const mainContent = document.getElementById('main-content');
        switch (id) {
          
          case '0':
            showBooks();
            addBookForm.style.display = "none";
            addComicForm.style.display = "none";
            break;
          case '1':
            showComics();
            addBookForm.style.display = "none";
            addComicForm.style.display = "none";
            break;
          case '2':
            addBookForm.style.display = "block";
            addComicForm.style.display = "none";
            mainContent.innerHTML = '';
            break;
          case '3':
            addComicForm.style.display = "block";
            addBookForm.style.display = "none";
            mainContent.innerHTML = '';
            break;
          default:
            break;
        }
      });
    });
  }

  const addBooks = (title, author, price, stock, year) => {
    if (title && author && !isNaN(price) && !isNaN(stock) && !isNaN(year)) {
      const book = new Book(title, author, price, stock, year);

      const repeatedBook = bookstore1.getBooks.find(b => b.title === title);
      if (repeatedBook) {
        alert('The book already exists.');
        return;
      }
      bookstore1.setBooks = book.getInfo();
    } else {
      alert('enter valid values.');
    }
    
  }
  const showBooks = () => {
    const books = bookstore1.getBooks;
    const bookElements = viewBook(books);
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    mainContent.insertAdjacentHTML('beforeend', bookElements);
  }
  const viewBook = (books) => {
    let bookHtml = '';
    books.forEach((book) => {
      bookHtml += `
      <div class="book">
      <p>title: ${book.title}</p>
      <p>author: ${book.author}</p>
      <p>price:${book.price}</p>
      <p>stock: ${book.stock}</p>
      <p>year: ${book.year}</p>
      </div>
    `;
    });
    return bookHtml;
  }
  const addComics = (title, author, price, stock, year, illustrator, publisher, volume) => {
    if (title && author && !isNaN(price) && !isNaN(stock) && !isNaN(year) && illustrator && publisher && !isNaN(volume)) {
      const comic = new Comic(title, author, price, stock, year,illustrator,publisher,volume);

      const repeatedComic = bookstore1.getComics.find(b => b.title === title);
      if (repeatedComic) {
        alert('The book already exists.');
        return;
      }
      bookstore1.setComics = comic.getInfo();
    } else {
      alert('enter valid values.');
    }
    
  }
  const showComics = () => {
    const comics = bookstore1.getComics;
    const comicElements = viewComic(comics);
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    mainContent.insertAdjacentHTML('beforeend', comicElements);
  }
  const viewComic = (comics) => {
    let comicHtml = '';
    comics.forEach((comic) => {
      comicHtml += `
        <div class="comic">
          <p>Title: ${comic.title}<p>
          <p>Author: ${comic.author}</p>
          <p>Price: ${comic.price}</p>
          <p>Stock: ${comic.stock}</p>
          <p>Year: ${comic.year}</p>
          <p>Illustrator: ${comic.illustrator}</p>
          <p>Publisher: ${comic.publisher}</p>
          <p>Volume: ${comic.volume}</p>
        </div>
      `;
    });
    return comicHtml;
  }
  const addBookForm = document.getElementById('add-book-form');
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const price = document.getElementById('bookPrice').value;
    const stock = document.getElementById('bookStock').value;
    const year = document.getElementById('bookYear').value;

    addBooks(title, author, price, stock, year);
    addBookForm.reset();
  });
  const addComicForm = document.getElementById('add-comic-form');
  addComicForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('comicTitle').value;
    const author = document.getElementById('comicAuthor').value;
    const price = document.getElementById('comicPrice').value;
    const stock = document.getElementById('comicStock').value;
    const year = document.getElementById('comicYear').value;
    const illustrator = document.getElementById('illustrator').value;
    const publisher = document.getElementById('publisher').value;
    const volume = document.getElementById('volume').value;

    console.log(title,author,price,stock,year,illustrator,publisher,volume);

    addComics(title, author, price, stock, year, illustrator, publisher, volume);
    addComicForm.reset();
  });

  initialize();
})();