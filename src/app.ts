import express, { Request, Response, NextFunction } from 'express';
const cors = require('cors');
const router = require('./routes/server.route');

const app = express();

app.use(express.json());           
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    credentials: true,
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
  }
));

/* ---------- Example Route ---------- */
app.get('/', (_req: Request, res: Response) => {
  res.send('🚀 Hello from Express + TypeScript!');
});

/* ---------- Health Check ---------- */
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

/* ---------- Error Handler ---------- */
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

router(app);

export default app;
