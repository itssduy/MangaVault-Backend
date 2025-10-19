const query = require('../models/queries');

export const getAll = async (req, res)=>{
    res.json(await query.getAllUsers());
}

export const getManga = (req, res)=>{
    console.log('manga')
    res.send('/manga')
}