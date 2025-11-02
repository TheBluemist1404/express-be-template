
import {Router} from 'express';
import * as controller from '@/controllers/auth.controller';
import * as validate from '@/middlewares/validate.middleware';

const router = Router()

router.post('/register',validate.validateRegister, controller.register);
router.post('/login',validate.validateLogin, controller.login);

export default router;