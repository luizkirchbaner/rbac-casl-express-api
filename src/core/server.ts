import express from 'express';
import { setupSwagger } from './swagger';
import { setupCors } from './cors';

const app = express();

app.use(express.json());
setupCors(app);
setupSwagger(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/docs`);
});
