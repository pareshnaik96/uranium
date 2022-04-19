const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const develperSchema = new mongoose.Schema( {
	
    name:String,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    percentage:Number,
    batch: {
        type: ObjectId,
        ref: "batches"
    }



}, { timestamps: true });

module.exports = mongoose.model('developers',develperSchema)