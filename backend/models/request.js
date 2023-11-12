const mongoose = require('mongoose');
const { Schema } = mongoose;


const reqSchema = new Schema({
    citizen : {
        type: Schema.Types.ObjectId, 
        ref: 'Citizen',
        // required : true
    },
    dateOfReq : { type: Date, default: Date.now },
    address : {
        type : String,
        required : true
    },
    assignedDriver : {
        type: Schema.Types.ObjectId, 
        ref: 'Driver',
    },
    completionStatus : { 
        type: String, 
        enum: ['pending', 'sent-to-driver','completed'],
        default : 'pending'
    },
    quantity : {
        type : Number,
        required : true
    }
});

const Request = mongoose.model('Request', reqSchema);
module.exports = Request;