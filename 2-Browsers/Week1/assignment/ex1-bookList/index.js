//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ulElement = document.createElement('ul');

  books.forEach((book) => {
    const liElement = document.createElement('li');
    const pElement = document.createElement('p');
    const imgElement = document.createElement('img');

    pElement.textContent = `${book.title} by ${book.author}`;
    liElement.appendChild(pElement);

    // Using book.coverURL directly from the book object for images
    imgElement.src = book.coverURL;
    imgElement.alt = `Cover of ${book.title} by ${book.author}`;
    liElement.appendChild(imgElement);

    // Set the style based on whether the book has been read or not
    if (book.alreadyRead) {
      liElement.style.color = 'green';
    } else {
      liElement.style.color = 'red';
    }

    ulElement.appendChild(liElement);
  });

  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      coverURL: './images/design-everyday-things.jpg', // Local image path
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      coverURL: './images/most-human-human.jpg', // Local image path
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      coverURL: './images/pragmatic-programmer.jpg', // Local image path
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);

