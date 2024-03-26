const express = require('express');
const router = express.Router();
const fs = require('fs');

const filePath = require('./database.json');

//Middlewares
router.use(express.json());
router.use(express.urlencoded({extended: true}));
router.use(async (req, res, next) =>{
    try{
      const data = await readData();
      res.locals.userData = JSON.stringify(data);
    }catch(error){

    }
});


