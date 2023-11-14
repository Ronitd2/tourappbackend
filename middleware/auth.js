const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const SECRET = 'DUMBARSE';

async function verify(req,res,next){
    if(!req.body.email || !req.body.password || !req.body.token){
        return res.json({error: 'invalid credentials'});
    }
    try{
        const decoded = jwt.verify(req.body.token, SECRET);
        if(decoded.data.email !== req.body.email){
            return res.json({error: 'invalid credentials'});
        }
        // console.log(decoded)
        req.body.email = decoded.data.email;
        // console.log(req.body.email)
        next()
    }
    catch(err){
        console.log(err)
        return res.json({error: 'invalid credentials'});
    }

}

module.exports = verify;