import express from 'express';
import connection from '../config/connectDB';
import authenicationController from '../controller/authenicationController';
import userController from '../controller/userController';
import authMiddleware from '../middleware/authMiddleware';
import bookController from '../controller/bookController';
import redisMiddleware from '../middleware/redisMiddleware';

let router = express.Router();

const initAPIRoutes = (app) => {
    // router.get('/users', userController.getAllUsers);
    router.post('/create-user', userController.createUser);
    router.put('/update-user', userController.updateUser);
    router.post('/send-sms', authenicationController.sendSMS);
    router.post('/email-otp-sender', authenicationController.emailOTPSender);
    router.post('/get-user', userController.findUser);
    router.get('/get-books', [authMiddleware, redisMiddleware], bookController.getAllBooks);

    app.use('/api', router);
}

export default initAPIRoutes;