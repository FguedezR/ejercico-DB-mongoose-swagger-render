// const paths = require("./paths");
const components = require("./components");
const { model } = require("mongoose");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tasks API",
      version: "1.0.0",
      description:
        "Una API de tareas sencilla utilizando Express, Mongoose y documentada con Swagger",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Servidor en desarrollo",
      },
      {
        url: "https://app-en-render.onrender.com",
        description: "Servidor en producción",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;
