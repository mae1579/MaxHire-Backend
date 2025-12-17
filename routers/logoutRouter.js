const express = require("express");

const logoutRouter = express.Router();

logoutRouter.get("/",async (req, res)=> {


    res.cookie("token_auth", "", {
        expirens: new Date(0),
    })
    res.status(200).json({message:"Wylogowano pomyslnie"});

})

module.exports = {
    logoutRouter,
}
