const {Schema, model} = require('mongoose');
const bcrypt = require("bcryptjs");
const signUpSchema = new Schema(
   {
       email: {
           type: String,
           required: true,
           unique: true,
           trim: true
       },
       password:
       {
           type: String,
           required: true,
       },
       userAgent: {
           type: String
       },
       IpAddress:
       {
           type: String
       }
   },
   {timestamps: true}
);

signUpSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
signUpSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('usercollection', signUpSchema);