const jwt = require("jsonwebtoken")


const auth = (req,res,next) =>{
    const {token} =  req.cookies
 
if(!token){
   res.status(403).send("please login first")
}

try {
const decode = jwt.verify(token, "secret_key")
req.user = decode 
} catch (error) {
    console.log(error)
    res.status(401).send("invalid token")
    
}
return next();
}

module.exports = auth


