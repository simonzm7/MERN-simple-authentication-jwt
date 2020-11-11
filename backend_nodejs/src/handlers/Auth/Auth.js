const Auth = {}
const jwt = require('jsonwebtoken');
Auth.IsAuth = (req,res, next) =>{
    const {authorization} = req.headers;
    if(authorization){
        if(jwt.verify(authorization, '_d[3/_k2jmMgJ;@6XVbZ{zz%J4k%TB'))
        {
            res.status(200).send('Authorized');
        }
        else{
            return res.status(401).json({msg: 'Unauthorized Access', msgType: false});
        }
    }else{
        return res.status(401).json({msg: 'Unauthorized Access', msgType: false});
    }
}


module.exports = Auth;