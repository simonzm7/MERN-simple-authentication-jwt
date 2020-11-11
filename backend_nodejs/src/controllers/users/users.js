const usersHandlers = {}
const userSchema = require('../../db/schemas/signup.schema');
const Crypto = require('../../handlers/Crypto/Cryptography');
const jwt = require('jsonwebtoken');
const passport = require('passport');
usersHandlers.signup = async function(req, res)
{
    const { email, password } = req.body;
    const userAgent = req.headers['user-agent'];
    const IpAddress = req.headers['x-forwarded-for'];

    const errors = []
    if(!email)
    {
        errors.push({msg: "Email can't be null", msgType: false});
    }
    if(!password)
    {
        errors.push({msg: "Password can't be null", msgType: false});
    }
    if(errors.length > 0)
    {
        res.json(errors);
    }else{
        const verifyEmail = await userSchema.findOne({email});
        if(!verifyEmail)
        {
           const registerUser = new userSchema({
               email, 
               password,
               userAgent,
               IpAddress
           });
           registerUser.password = Crypto.Encrypt(registerUser.password);
           registerUser.save().then(() =>{
               res.json({msg: 'Account Created Successfully', msgType: true})
           }).catch(() => {
            res.json({msg: 'Error to create Account', msgType: false})
           })
        }
        else{
            res.json({msg: 'Email already exists', msgType: false});
        }
    }
    
}
usersHandlers.signin = async function(req, res) 
{
    const { email, password } = req.body;
    const errors = []
    if(!email)
    {
        errors.push({msg: "Email can't be null", msgType: false});
    }
    if(!password)
    {
        errors.push({msg: "Password can't be null", msgType: false});
    }
    if(errors.length > 0)
    {
        res.json(errors);
    }else{
        const user = await userSchema.findOne({email});
        if(!user)
        {
            return res.json({msg: "Email doesn't exist", msgType: false});
        }else{
            if(!Crypto.Compare(password, user.password))
            {
                return res.json({msg: "Incorrect Password", msgType: false});
            }
            else{
                const token = jwt.sign({id: user.id}, '_d[3/_k2jmMgJ;@6XVbZ{zz%J4k%TB', {
                    expiresIn: '7d'
                });
                if(token)
                {
                    res.status(200).json({msg: 'Log In Successfully', msgType: true, token});
                }
            }
        }
    }

}
module.exports = usersHandlers;