require("dotenv").config();
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { dbConnection } = require("./config/config");
const swaggerOptions = require("./docs/index");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 8080;

// conexión a bbdd
dbConnection();

// middlewares
app.use(express.json());

// swagger
try {
  const specs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
} catch (error) {
  console.error("Error al configurar Swagger:", error);
}

// rutas
app.use("/", taskRoutes);

// arranque
app.listen(PORT, () => {
  console.log(`servidor listo en: http://localhost:${PORT}`);
  console.log(`documentación en: http://localhost:${PORT}/api-docs`);
});
