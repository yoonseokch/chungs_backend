const express = require('express');
const db = require('../models/index.js');
const router = express.Router();
router.get('/personalprofile',(req,res)=>{
    db.Profile.Personal_Profile.findAll()
    .then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(404).json(err);
    })
})
router.get('/skills',(req,res)=>{
    db.Profile.Skills.findAll()
    .then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(404).json(err);
    })
})
module.exports = router;