const Book = require('./model');


exports.create=(req,res)=>{

    

    if(!req.body){
        return res.status(400).send({
            message:"Content cannot be empty"
        });
    }

    const Books = new Book({
        title:req.body.title || "Untitled Book",
        author:req.body.author,
        edition:req.body.edition,
        releasedOn:req.body.releasedOn

    });

    Books.save()
    .then(data =>{
        res.json({data});
    }).catch(err =>{
        res.status(500).send({
            message: err.message ||"Some error occured "
        })
    })
};

exports.findall=(req,res)=>{
   
        Book.find()
        .then(book => {
            res.send(book);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred "
            });
        });
    };

exports.findone=(req,res)=>{
     console.log(req.params.BooksId);
    Book.findById(req.params.BooksId)
    .then(Books=>{
        if(!Books){
            console.log(Books);
            return res.status(404).send({
                message:"Book not found"
            });
            
        }
        console.log(Books);
        res.send(Books);
        
    }).catch(err=>{
        return res.status(500).send({
            message:"Error finding Book"
        })
    })

};

exports.update=(req,res)=>{
    Book.findByIdAndUpdate(req.params.BooksId , {
        title:req.body.title || "untitled book",
        author:req.body.author,
        edition:req.body.edition,
        releasedOn:req.body.releasedOn
    },{new:true})
    .then(Books => {
        if(!Books) {
            return res.status(404).send({
                message: "book not found with id " 
            });
        }
        res.send(Books);
    }).catch(err => {
        return res.status(500).send({
            message: "Error updating book with id " 
        });
    });
};




exports.delete=(req,res)=>{
    Book.findByIdAndRemove(req.params.BooksId)
    .then(Books => {
        if(!Books) {
            return res.status(404).send({
                message: "book not found with id " 
            });
        }
        res.send({message: "book deleted successfully!"});
    }).catch(err => {
        
        return res.status(500).send({
            message: "Could not delete book with id " 
        });
    });

};
