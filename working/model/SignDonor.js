const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const signDonorSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required: true
    },
    lastName :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    }
});

signDonorSchema.pre('save', async function(next){
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});


const SignDonor = mongoose.model('SIGNDONOR', signDonorSchema);

module.exports = SignDonor;