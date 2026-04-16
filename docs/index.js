const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tasks API",
      version: "1.0.0",
      description: "Documentación técnica de la API de Tareas",
    },
    servers: [{ url: "http://localhost:3000", description: "Local" }],
    paths: {
      "/create": {
        post: {
          summary: "Crea una tarea",
          tags: ["Tasks"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: { 201: { description: "Creada" } },
        },
      },
      "/": {
        get: {
          summary: "Lista tareas",
          tags: ["Tasks"],
          responses: { 200: { description: "OK" } },
        },
      },
      "/id/{_id}": {
        put: {
          summary: "Actualiza tarea",
          tags: ["Tasks"],
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: { 200: { description: "Actualizada" } },
        },
        delete: {
          summary: "Elimina tarea",
          tags: ["Tasks"],
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Eliminada" } },
        },
      },
    },
    components: {
      schemas: {
        Task: {
          type: "object",
          required: ["title"],
          properties: {
            title: { type: "string" },
            completed: { type: "boolean" },
          },
        },
      },
    },
  },
  apis: [], // al estar todo en 'definition', dejamos esto vacío
};

module.exports = swaggerOptions;
