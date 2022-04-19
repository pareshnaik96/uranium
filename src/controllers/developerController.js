const BatchModel = require("../models/batchModel")
const DeveloperModel= require("../models/developerModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await DeveloperModel.create(developer)
    res.send({data: developerCreated})
}

const getDeveloper= async function (req, res) {
    let developers = await DeveloperModel.find({gender:{$in:["female"]},percentage:{$gte:70}}).select({name:1})
    res.send({data: developers})
}

const getvalue= async function (req, res) {
    let data = req.query
    let batchname=data.program
    let reqpercent= data.percentage
    let reqbatch=await BatchModel.find({name:batchname}).select({_id:0})

    let result= await DeveloperModel.find({percentage:{$gte:reqpercent},batch:reqbatch}).populate("batch")
    res.send({data: result})
}

module.exports.createDeveloper= createDeveloper
module.exports.getDeveloper= getDeveloper
module.exports.getvalue= getvalue