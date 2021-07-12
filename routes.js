module.exports=(app)=>{
    const book = require('./controller');


    app.post('/book',book.create);

    app.get('/book',book.findall);

    app.get('/book/:BooksId',book.findone);

    app.put('/book/:BooksId',book.update);

    app.delete('/book/:BooksId',book.delete);

}