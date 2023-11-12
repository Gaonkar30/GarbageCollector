const express = require('express');
const Request = require('../models/request');
const Worker = require('../models/worker');
const Citizen = require('../models/worker');
const router = express.Router();


router.get('/requests/all',async (req,res)=>{
    try {
        const allRequests = await Request.find({}).populate('citizen').populate('worker');
        res.status(200).json({allRequests});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/requests/new', async (req, res)=>{
    try {
        const pendingReq = await Request.find({status : 'pending'}).populate('citizen').populate('worker');
        res.status(200).json({pendingReq});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/requests/completed', async (req, res)=>{
    try {
        const completedReq = await Request.find({status : 'completed'}).populate('citizen').populate('worker');
        res.status(200).json({completedReq});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/allworkers', async (req, res)=>{
    try {
        const allWorkers = await Worker.find({});
        res.status(200).json({allWorkers});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/allcitizens', async (req, res)=>{
    try {
        const allCitizens = await Citizen.find({});
        res.status(200).json({allCitizens});
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;


