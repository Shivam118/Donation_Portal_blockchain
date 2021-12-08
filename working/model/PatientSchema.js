const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    id:{
        type: Number,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    bpl: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    uid: {
        type: Number,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    EthID: {
        type: String,
        required: true
    },
    cEthID: {
        type: String,
        required: true
    },
    amountRequested: {
        type: Number,
        required: true
    },
    amountDonated: {
        type: Number,
    },
    Date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const patient = mongoose.model('patient', patientSchema);

module.exports = patient;

// {
//     "firstName": "shivam",
//     "lastName" : "sharma",
//     "address": "khoda",
//     "city": "khoda" ,
//     "state": "U.P.",
//     "zipCode": 201301 ,
//     "country": "India" ,
//     "email": "sharma@xyz.com",
//     "phone": 923283293,
//     "uid": "123123",
//     "pan": "121232",
//     "EthID": "123212321312", 
//     "cEthID": "1312312312312",
//     "amountRequested": 100, 
//     "amountDonated": 10,
//     "Date": "16-10-2021"
// }