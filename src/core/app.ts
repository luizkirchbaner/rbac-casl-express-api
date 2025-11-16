import express from 'express';

export const createApp = () => {
  const app = express();

  app.use(express.json());

  app.get('/', (_, res) => {
    res.send('API running');
  });

  return app;
};
