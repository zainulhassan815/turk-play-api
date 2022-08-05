import { Router } from 'express';
import dramasRouter from './drama.route';
import episodesRouter from './episode.route';
import featuredRouter from './featured.route';

const router = Router();

router.get('/status', async (req, res) => {
	res.json({
		message: 'OK',
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	});
});

router.use('/dramas', dramasRouter);
router.use('/episodes', episodesRouter);
router.use('/featured', featuredRouter);

export default router;
