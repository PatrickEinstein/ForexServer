import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const directoryPath = `${path.join(__dirname, "..", "routes").slice(1)}\\*.js`;
const decodedpath = decodeURIComponent(directoryPath);
// console.log(decodedpath);

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "MINDFULNESS API",
      version: "1.7.1",
      description: "Mindfulness API",
      contact:{
        name: "Patrick",
        url:"folio.vercel.app",
        email:"mohammedola1234@gmail.com",
      }
    },
    servers: [
      {
        url: "http://localhost:8055/",
        description: "Development server",
      },
    ],
    basePath: "/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    explorer: true,
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [decodedpath],
};
const swaggerconfig = swaggerJSDoc(options);
export default swaggerconfig;
