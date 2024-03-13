//Mark Neil G. Autriz
//CMSC 100 - UV2L : Web Server with Express JS.

//Importing necessary modules
import express from 'express';
import fs from 'fs';

//Creating Express application
const app = express();
app.use(express.json()); //Middleware to parse JSON requests
app.use(express.urlencoded({ extended: false })); //Middleware to parse URL-encoded requests

//Function to find books by author
function findBooksByAuthor(author, callback) {
    //Reading the content of 'books.txt' file
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }

        //Splitting data into lines
        var lines = data.split('\n');
        var result = [];

        //Iterating through each line
        lines.forEach(line => {
            var line_element = line.split(', ');

            //Checking if author matches
            if (line_element.indexOf(author) === 2) {
                console.log("Found it: " + line);
                result.push(line);
            }
        });

        callback(null, result); //Passing the result to the callback function
    });
}

//Function to find books by ISBN and author
function findBooksByISBNAndAuthor(isbn, author, callback) {
    //Reading the content of 'books.txt' file
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }

        //Splitting data into lines
        var lines = data.split('\n');
        var result = [];

        //Iterating through each line
        lines.forEach(line => {
            var line_element = line.split(', ');

            //Checking if ISBN and author match
            if (line_element[1] === isbn && line_element[2] === author) {
                console.log("Found it: " + line);
                result.push(line);
            }
        });

        callback(null, result); //Passing the result to the callback function
    });
}

//Endpoint to find books by author
app.get('/find-by-author', (req, res) => {
    const author = req.query.author;
    findBooksByAuthor(author, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ success: false, error: err.message });
            return;
        }
        res.send(result); //Sending the result as response
    });
});

//Endpoint to find books by ISBN and author
app.get('/find-by-isbn-author', (req, res) => {
    const isbn = req.query.isbn;
    const author = req.query.author;
    findBooksByISBNAndAuthor(isbn, author, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ success: false, error: err.message });
            return;
        }
        res.send(result); //Sending the result as response
    });
});

//Endpoint to add a book
app.post('/add-book', (req, res) => {
    const { bookname, isbn, author, yearPublished } = req.body;
    if (!bookname || !isbn || !author || !yearPublished) {
        res.send({ success: false });
        return;
    }

    const bookDetails = `${bookname}, ${isbn}, ${author}, ${yearPublished}\n`;
    //Appending book details to 'books.txt' file
    fs.appendFile('books.txt', bookDetails, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send({ success: false });
        } else {
            console.log('Book added successfully');
            res.send({ success: true }); //Sending success response
        }
    });
});

//Custom 404 error handler
app.use((req, res, next) => {
    res.status(404).send({ success: false, error: 'Not Found' });
});

//Starting Express server
app.listen(3000, () => { console.log('Server started at port 3000') });
