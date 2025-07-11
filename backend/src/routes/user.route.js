import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getAllUsers } from '../controller/user.controller.js';

import { registerUser } from '../controller/user.controller.js';

const router = express.Router();

router.post('/', registerUser);
router.get("/", protectRoute , getAllUsers );

export default router;