const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

require('dotenv').config();
const jwt = require('jsonwebtoken');

router.post('/signIn' ,(req, res, next) => {
    passport.authenticate('signIn', (err, user, info) => {
        if (!user) {
            return res.status(400).json({ message: info.message });
        }
        const token = jwt.sign(
            { user_id : req.body.user_id },
            process.env.JWT_SECRET_KEY
        );
        return res.json({ user ,token });
    })(req, res, next);
});

router.post('/signUp', async (req,res,next) => {

    const { user_id, password, name, age } = req.body;
    console.log(user_id);
    try{
        const exUser = await User.findOne({where: {user_id}});
        if(exUser){
            return res.status(400).json({error:[{message: '이미 존재하는 회원입니다.'}]});
        }
        const hash = await bcrypt.hash(password,12);
        let user = await User.create({
            user_id : user_id,
            password : hash,
            name : name,
            age : age,
        });
        return res.json(user);
    }catch(error){
        console.error(error);
        return next(error);
    }
});

module.exports = router;
