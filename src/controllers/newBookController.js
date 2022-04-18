const BookModel=require('../models/newBookModel')
const AuthorModel=require('../models/newAuthorModel')
const PublisherModel=require('../models/newPublisherModel')

const createBook= async function(req,res){
    let authorId=req.body.author;
    if(!authorId){
        return res.send("author id is required");
    }

    let author=await AuthorModel.findById(authorId);
    if(!author){
        return res.send("no author present in the given Id");
    }
    
    let publisherId=req.body.publisher;
    if(!publisherId){
        return res.send("publisher id must be present");
    }

    let publisher=await PublisherModel.findById(publisherId);
    if(!publisher){
        return res.send("no publisher present in the given Id");
    }
    
    let book=req.body;
    let bookCreated= await BookModel.create(book);
    res.send({data : bookCreated});
}

const populateBook= async function(req,res){
    let bookPopulate=await BookModel.find().populate("author publisher")
    res.send({data : bookPopulate});
}

    
const updateBooks = async function (req, res) {
    let hardCOverPublishers = await PublisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let arrayOfPublishers = []

    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }

    let books = await BookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

    res.send({data: books})
}


module.exports.createBook=createBook
module.exports.populateBook=populateBook
module.exports.updateBooks=updateBooks