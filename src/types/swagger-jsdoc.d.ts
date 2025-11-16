declare module 'swagger-jsdoc' {
  export interface SwaggerJSDocOptions {
    definition: Record<string, any>;
    apis: string[];
  }

  export default function swaggerJsdoc(options: SwaggerJSDocOptions): any;
}
