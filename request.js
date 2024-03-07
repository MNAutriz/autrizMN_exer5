import needle from 'needle';

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', 
(err, res) => {
    // console.log(res.body);   
});

//This are just for tracing statements.
needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', 
(err, res) => {
    // console.log(res.body);   
});

needle.post(
    'http://localhost:3000/add-book',
    { bookname: "Harry Potter and the Philosophes's Stone",
    isbn: "978-0-7475-3269-9",
    author: "J.K Rowling",
    yearPublished: "1991" },  
    (err, res) => {
      console.log(res.body);
    }
);