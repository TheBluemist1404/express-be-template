import app from "./app";
import dotenev from 'dotenv'

dotenev.config();

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
  // await connect() // connect to db

  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
};

bootstrap()
