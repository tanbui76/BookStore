import express from 'express';
import connection from '../config/connectDB';
import authenicationController from '../controller/authenicationController';
import userController from '../controller/userController';

let router = express.Router();

const initAPIRoutes = (app) => {
    // router.get('/users', userController.getAllUsers);
    router.post('/create-user', userController.createUser);
    router.put('/update-user', userController.updateUser);
    router.post('/send-sms', authenicationController.sendSMS);
    router.post('/email-otp-sender', authenicationController.emailOTPSender);
    router.post('/get-user',userController.findUser);

    app.use('/api', router);
}

export default initAPIRoutes;
// http://34.29.205.142:8080/api/create-user