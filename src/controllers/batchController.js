const BatchModel= require("../models/batchModel")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await BatchModel.create(batch)
    res.send({data: batchCreated})
}


module.exports.createBatch= createBatch