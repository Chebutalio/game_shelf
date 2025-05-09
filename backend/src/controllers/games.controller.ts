import { Request, Response } from 'express';
import { fetchGames } from "../services/games.service";

export const getAllGames = async (_req: Request, res: Response) => {
  try {
    const games = await fetchGames();
    res.json(games);
  } catch (e) {
    console.error('Failed to fetch games:', e);
    res.status(500).json({ message: 'Failed to fetch games' });
  }
};
