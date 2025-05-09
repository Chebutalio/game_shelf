import { Router } from 'express';
import { getAllGames } from '../controllers/games.controller';

const router = Router();

router.get('/', getAllGames);

export default router;
