import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

const app = express();
const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT} 🍔`);
    });
  })
  .catch(() => console.log('erro'));
