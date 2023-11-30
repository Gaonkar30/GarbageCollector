const express = require('express');
const Request = require('../models/request');
const Worker = require('../models/worker');
const Citizen = require('../models/citizen');
const router = express.Router();



router.get('/allreq/:uid', async (req, res)=>{
    try {
        const {uid} = req.params;
        const user = await Citizen.findById(uid).populate('requests');
        const allRequests = user.requests;
        res.status(200).json(allRequests);
    } catch (err) {
        console.log(err)
        res.status(500).json({err});
    }
});

router.post('/newreq/:userID', async (req,res)=>{
    try {
        const {userID} = req.params;
        const {cartCount} = req.body;
        const user = await Citizen.findById(userID);
        const newReq = new Request({
            citizen : user._id,
            address : user.address,
            completionStatus : 'pending',
            quantity : cartCount,
        });
        // user.requests = newReq._id;
        await newReq.save();
        const newid = newReq._id;
        await Citizen.findByIdAndUpdate(user._id, {requests : newid});
        res.status(200).json(newReq);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/latestreq/:uid', async (req, res)=>{
    try {
        const { uid } = req.params;
        const user = await Citizen.findById(uid).populate('requests');
        const latestreq = user.requests;
        res.status(200).json(latestreq);
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = router;