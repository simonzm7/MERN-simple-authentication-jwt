const bcrypt = require('bcryptjs');


const handlers = {};

handlers.Encrypt =  (password) =>
{
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return hash;
}
handlers.Compare = (password, encryptedPassword) =>{
    const compare = bcrypt.compareSync(password, encryptedPassword);
    return compare;
}

module.exports = handlers;