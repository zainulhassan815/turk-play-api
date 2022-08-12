import { RequestHandler, Router } from 'express';
import * as EpisodesController from '../../controllers/episode.controller';
import Episode from '../../models/Episode';

const router = Router();

const postHandler: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await Episode.bulkCreate(data);
    res.send(response);
  } catch (e) {
    next(e);
  }
};

router.route('/').get(EpisodesController.getEpisodes).post(postHandler);

export default router;
