const express = require('express');
const mongoose = require('mongoose');
const Request = require('../models/request');
const Worker = require('../models/worker');
const router = express.Router();

router.get('/tasks/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const wkr = Worker.findById(id);
        const tasks = wkr.tasks;
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error});
    }
})

router.post('/tasks/finish', async(req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({error});
    }
})
