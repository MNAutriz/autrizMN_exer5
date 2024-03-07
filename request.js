import needle from 'needle';

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



needle.post(
    'http://localhost:3000/add-book',
    { bookname: "Harry Potter and the Chamber of Secrets",
    isbn: "0-7475-3849-2",
    author: "J.K Rowling",
    yearPublished: "1998" },  
    (err, res) => {
      console.log(res.body);
    }
);



needle.post(
    'http://localhost:3000/add-book',
    { bookname: "The Little Prince",
    isbn: "978-0156012195",
    author: "Antoine Saint-Exupery",
    yearPublished: "1943" },  
    (err, res) => {
      console.log(res.body);
    }
);

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', 
(err, res) => {
    console.log(res.body);   
});

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=Antoine Saint-Exupery', 
(err, res) => {
    console.log(res.body);   
});

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K.+Rowling', 
(err, res) => {
    console.log(res.body);   
});

