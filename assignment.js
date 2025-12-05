const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
// 2. Get the names of all books published after 2020
// 3. Calculate the total price of all Programming books
// 4. Find the average number of pages of all books in the Design category
// 5. Get a list of authors who have written books with a rating less than 4.0
// 6. Find the most expensive book in the collection
// 7. Get all books that have more than 300 pages and are priced below 500
// 8. Create a new array with book names and their respective authors

const highRBooks = books
  .filter(book => book.rating > 4.5)
  .map(book => book.bookName);
console.log(highRBooks);

// question 2
const recentBooks = books
  .filter(book => book.publishedYear > 2020)
  .map(book => book.bookName);
console.log(recentBooks);

// question 3
const Totalprice = books
   .filter(book => book.category === "Programming")
  .reduce((sum, book) => sum + book.price, 0);
 console.log(Totalprice); 
// question 4
const avgPage = books
 .filter(book => book.category === "Design");
const sumPage=
avgPage.reduce((sum,book) => sum + book.price,0 ) / avgPage.length;
 console.log(sumPage);
// question 5
const page = books
 .filter(book => book.rating <4.0)
 .map(book => book.author);
 console.log(page);
 // question 6
let Exbook = books[0]; 
for (let i = 1; i < books.length; i++) {
  if (books[i].price > Exbook.price) {
    Exbook = books[i];
  }
}
console.log(Exbook);
// question 7
const fBooks = books.filter(
  book => book.pages > 300 && book.price < 500
);
console.log(fBooks);
// question 8
const bookList = books.map(book => ({
  bookName: book.bookName,
  author: book.author
}));
console.log(bookList);
