//Mark Neil G. Autriz
//CMSC 100 - UV2L : Exercise 05 Web Server with Express JS.

/*This program allows the user to create an Express JS server that accepts requests on these endpoints. Primarily, it allows to create 
a post method for adding books along with the get method for retrieving the entire book details using ISBN and author as search criteria. */

import express from 'express';
import fs, { readFile } from 'fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//This allows you to get the isbn and the author of the books.
app.get('/find-by-isbn-author', (req, res) => { 
    res.send('{"isbn": "'+req.query.isbn+'", "'+'"author": "'+req.query.author+'"}');
});

app.get('/find-by-author', (req, res) => {
    res.send('{"author": ' + '"'+req.query.author+'"}');
});


app.post('/add-book', (req, res) => {
    const { bookname, isbn, author, yearPublished } = req.body;
    //This prints false whenever there is something that is missing into the required parameters.
    if (!bookname || !isbn || !author || !yearPublished) {
        res.send({ success: false });
        return; 
    }

    const bookDetails = `${bookname}, ${isbn}, ${author}, ${yearPublished}\n`;
    //Otherwise, if it is complete then we append that to the file named books.txt to record the data.
    fs.appendFile('books.txt', bookDetails, (err) => {
        if (err) { //Whenever hindi parin existent yung storage ng paglalagyan then magsasabi na false.
            console.error(err);
            res.status(500).send({ success: false });
        } else { //Prints the success message whenever it is done properly and saved it to the books.txt
            console.log('Book added successfully'); 
            res.send({ success: true });
        }
    });
});

app.listen(3000, () => { console.log('Server started at port 3000')} ); //Prompts the user that the server is already started.


/*
  app.get('find-by-author', (req,res) => {
    readFile('book.txt', 'utf8', (err,data) => {
      if(err) throw err;

      var lines = data.split('\n');
      var result = [];

      lines.forEach(line => {
        var line_element = line.split(', );

        if(line_element.indexOf(req.query.author) == 2){
          console.log("Found it: " + line);
          result.push(line);

        }

      });
      res.send(result)

    })

  }
*/