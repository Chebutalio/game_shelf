import express from 'express';
import dotenv from 'dotenv';
import gamesRoutes from "./routes/games.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/games', gamesRoutes);


app.get('/', (_req, res) => {
  res.send('GameShelf backend is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
