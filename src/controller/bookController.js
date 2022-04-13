const { count } = require("console")
const BookModel= require("../model/bookModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let savedData=await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: savedData})
}

const getBooksInYear=async function (req, res){
    let yr=req.query.year;
    let booksInYear=await BookModel.find({year:yr})
    res.send({msg: booksInYear})
}

const getParticularBooks= async function (req, res){
    let condition=req.body;
    let paticularBooks=await BookModel.find(condition)
    res.send({msg: paticularBooks})
}

const getXINRBooks=async function (req, res) {
    let inrBook=await BookModel.find({'price.indianprice':{$in:["100INR","200INR","500INR"]}})
    res.send({msg: inrBook})
}

const getRandomBooks=async function (req, res) {
    let savedData=await BookModel.find({$or :[{stockAvailable : true},{totalPages : {$gt : 500 }}]})
    res.send({msg: savedData})
}




    module.exports.createBook=createBook
    module.exports.bookList=bookList
    module.exports.getBooksInYear=getBooksInYear
    module.exports.getParticularBooks=getParticularBooks
    module.exports.getXINRBooks=getXINRBooks
    module.exports.getRandomBooks=getRandomBooks