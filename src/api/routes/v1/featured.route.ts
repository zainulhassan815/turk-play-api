import { Router } from 'express';
import * as FeaturedController from '../../controllers/featured.controller';

const router = Router();

router.route('/').get(FeaturedController.getFeatured);

export default router;
