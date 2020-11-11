const { Router } = require('express');
const router = Router();
const handlers = require('../controllers/users/users');
const Auth = require('../handlers/Auth/Auth');



router.route('/signup').post(handlers.signup);
router.route('/signin').post(handlers.signin);
router.route('/data').get(Auth.IsAuth,(req, res) =>{
    // console.log('local: ',req.body);
});



module.exports = router;
