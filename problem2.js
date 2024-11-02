const books = [
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 }
];

const bookTitles = books.map(book => book.title);
console.log(bookTitles);
