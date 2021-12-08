const express = require('express');
const router = express.Router();

require('../db/conn');
const patient = require('../model/PatientSchema');

router.get('/', (req,res)=>{
    res.send("Hello World!");
});

router.get('/about', (req,res)=>{
    res.send("Hello ABout World!");
});

router.post('/pat', async (req,res)=>{

    const { firstName, lastName, address, city, state, zipCode, country, bpl, email, phone, uid, pan, EthID, cEthID, amountRequested, amountDonated} = req.body;

    if( !firstName || !lastName || !address || !city || !state || !zipCode || !country || !email || !phone || !uid || !pan || !EthID || !cEthID || !amountRequested || !amountDonated ){
        return res.status(422).json({error: "Plz fill the required Fields"});
    }

    try{
        const userExist = await patient.findOne({ email: email });

        if(userExist){
            return res.status(422).json({error: "Email Exists"});
        }
        
        const Patient = new patient({firstName, lastName, address, city, state, zipCode, country, bpl, email, phone, uid, pan, EthID, cEthID, amountRequested, amountDonated });

        const userRegister = await Patient.save();

        if(userRegister){        
            res.status(201).json( {message: "Details Saved Successfully"} );
        }
        else{ 
            res.status(500).json( {error: "Failed"} );
        }
    }
    catch(err){
        console.log(err);
    }

});

module.exports = router;