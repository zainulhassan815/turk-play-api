import { Router } from 'express';
import * as EpisodesController from '../../controllers/episode.controller';

const router = Router();

router.route('/').get(EpisodesController.getEpisodes);

export default router;
