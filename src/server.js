import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  // CORS
  app.use(cors());

  // HTTP Routers
  app.use(contactsRouter);

  // Pino http
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // Middleware error
  app.use(notFoundHandler);

  app.use(errorHandler);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
