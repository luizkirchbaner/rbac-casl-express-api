import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

export function setupSwagger(app: Express): void {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Express REST API with CASL',
        version: '1.0.0'
      }
    },
    apis: ['src/**/*.ts']
  };

  const swaggerSpec = swaggerJsdoc(options);

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
