const express = require('express');
const Request = require('../models/request');
const Worker = require('../models/worker');
const Citizen = require('../models/worker');
const router = express.Router();

router.get('requests/all', async (req, res)=>{
    try {
        const {userID} = req.body;
        const user = await Citizen.findById(userID).populate('request');
        const allRequests = user.requests;
        res.status(200).json({allRequests});
    } catch (error) {
        res.status(500).json({error});
    }
});

router.post('requests/new', async (req,res)=>{
    try {
        const {userID, quantity} = req.body;
        const user = await Citizen.findById(userID);
        const newReq = new Request({
            citizen : user._id,
            address : user.address,
            completionStatus : 'pending',
            quantity,
        });
        await newReq.save();
        res.status(200).json({newReq});
    } catch (error) {
        res.status(500).json({error});
    }
});

router.get('/requests/latest', async (req, res)=>{
    try {
        const { userID } = req.body;
        const request = await Request.find({citizen : userID}).sort({_id : -1});
        res.status(200).json(request[0]);
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = router;