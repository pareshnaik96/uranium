const { count } = require("console")
const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createNewAuthor= async function (req, res) {
        const reqAuthor= req.body;
        const savedData= await authorModel.create(reqAuthor);
        res.send({msg: savedData});
}

const createNewBook= async function (req, res) {
    const reqBook= req.body;
    const savedData= await bookModel.create(reqBook);
    res.send({msg: savedData});
}

const allBooks= async function (req, res) {
    const authorDetails= await authorModel.find({author_name:"Chetan Bhagat"});
    const idnum=authorDetails[0].author_id;
    const booksName=await bookModel.find({author_id:idnum}).select({name:1, _id:0});
    res.send({msg: booksName});
}
 
const updatedBookPrice= async function (req, res) {
    const authobj= await bookModel.findOneAndUpdate({name:"Two states"},{Price:100},{new:true})
    const idnum1=authobj.author_id;
    const authName=await authorModel.find({author_id:idnum1 }).select({author_name:"Chetan Bhagat"});

    const prc=await bookModel.find({name:"Two states"}).select({price:1,_id:0});
    res.send({Author:authName,updatedPrice:prc});
}

const authorName= async function (req, res) {
    const bookId= await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id=bookId.map(inp=>inp.author_id)

    let temp=[]
    for(let i=0;i<id.length;i++){
        let x=id[i]
        const author=await authorModel.find({author_id:x}).select({author_name:1,id:0})
        temp.push(author)
    }
    const authorName=temp.flat()
    res.send({msg: authorName})
}


module.exports.createNewAuthor=createNewAuthor
module.exports.createNewBook=createNewBook
module.exports.allBooks=allBooks
module.exports.updatedBookPrice=updatedBookPrice
module.exports.authorName=authorName