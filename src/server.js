import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use('/uploads', express.static(UPLOAD_DIR));
  // CORS
  app.use(cors());

  //Cookies
  app.use(cookieParser());

  // HTTP Routers
  app.use(router);

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
