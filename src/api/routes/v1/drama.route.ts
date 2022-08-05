import { Router } from 'express';
import * as DramasController from '../../controllers/drama.controller';

const router = Router();

router.route('/').get(DramasController.getDramas);

export default router;
