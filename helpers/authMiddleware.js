
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = (req, res, next) => {
        //Extract Authorization Token
       let token = req.header("auth-token");
       if (!token) {
           res.status(401).json({msg:'YOU ARE NOT AUTHORIZED'})
       }
        jwt.verify(token, process.env.SECRET, function(err, payload) {
            if (err) {
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            }
            
            req.client = { clientId: payload.clientId, role: payload.role };
            
        
        })
        next();
    }
module.exports = authMiddleware;