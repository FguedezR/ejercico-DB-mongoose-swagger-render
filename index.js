const express = require("express");
const app = express();
const PORT = 8080;
const { dbConnection } = require("./config/config");
const routes = require("./routes");
app.use(express.json());
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./docs/index");

app.use("/", routes);

const specs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

dbConnection();

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`),
);
