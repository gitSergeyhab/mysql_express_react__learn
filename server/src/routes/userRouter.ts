import { Router } from 'express';
import { userController } from '../controllers/user-controller';
import { checkAuth } from '../middleware/auth';

const router = Router();


router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', checkAuth, userController.check);


export default router;