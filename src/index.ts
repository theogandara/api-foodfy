import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import path from 'node:path';

const app = express();
const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT} 🍔`);
    });
  })
  .catch(() => console.log('erro'));
