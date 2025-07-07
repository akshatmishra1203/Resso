import {Router} from 'express';
import { getALlSongs , getFeaturedSongs , getMadeForYouSongs , getTrendingSongs } from '../controller/song.controller.js';
import { protectRoute , requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protectRoute , requireAdmin , getALlSongs);
router.get("/featured", getFeaturedSongs);
router.get("/made-for-you" ,getMadeForYouSongs);
router.get("/trending" , getTrendingSongs);

export default router;