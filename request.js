// Importing needle module
import needle from 'needle';

// Post request to add a book
needle.post(
    'http://localhost:3000/add-book', 
    {
        // Book details to be added
        bookname: "Harry Potter and the Philosopher's Stone",
        isbn: "978-0-7475-3269-9",
        author: "J.K Rowling",
        yearPublished: "1997"
    },
    (err, res) => {
        console.log(res.body); // Logging response body
    }
);

// Post request to add another book
needle.post(
    'http://localhost:3000/add-book',
    {
        // Book details to be added
        bookname: "Harry Potter and the Chamber of Secrets",
        isbn: "0-7475-3849",
        author: "J.K Rowling",
        yearPublished: "1998"
    },
    // Callback function to handle response
    (err, res) => {
        console.log(res.body); // Logging response body
    }
);

// Post request to add another book
needle.post(
    'http://localhost:3000/add-book', 
    {
        // Book details to be added
        bookname: "The Little Prince",
        isbn: "978-0156012195",
        author: "Antoine Saint-Exupery",
        yearPublished: "1943"
    },
    // Callback function to handle response
    (err, res) => {
        console.log(res.body); // Logging response body
    }
);

// Get request to find books by ISBN and author
needle.get(
    'http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', 
    // Callback function to handle response
    (err, res) => {
        if (err) {
            console.error(err); // Logging error if occurred
        } else {
            console.log(res.body); // Logging response body if successful
        }
    }
);

// Get request to find books by author
needle.get(
    'http://localhost:3000/find-by-author?author=J.K+Rowling', // Server endpoint
    // Callback function to handle response
    (err, res) => {
        if (err) {
            console.error(err); // Logging error if occurred
        } else {
            console.log(res.body); // Logging response body if successful
        }
    }
);
