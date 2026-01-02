import express from 'express';
import morgan from 'morgan';
import { setupSwagger } from './swagger';
import { setupCors } from './cors';
import { AppDataSource } from './database/data-source';
import { router } from '@/shared/http/router';

const init = async () => {
  try {
    await AppDataSource.initialize();
    const app = express();

    app.use(express.json());
    app.use(morgan('dev'));
    app.use(router);

    setupCors(app);
    setupSwagger(app);

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`Swagger docs available at http://localhost:${port}/docs`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();