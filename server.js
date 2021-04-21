const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ExampleApi",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["server.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);

server.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification)); // Add custom routes before JSON Server router
/**
 * @swagger
 * /test:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Bisection:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /False_position:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Onepoint:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Newton_raphson:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Secant:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Crammer:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Gauss:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Gauss_Jordan:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /LU:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Jacobi:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Gauss_seijei:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Conjugate_Gradient:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Newton:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Lagrange:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Spline:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Linear:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /Polynomial:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /MultipleLinear:
 *  get:
 *    description: Use to request all Example
 *    responses:
 *      '200':
 *        description: A successful response
 */
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
