const express = require("express");
const app = express();
require("dotenv").config();


const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("yaml");
const swaggerFile = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = yaml.parse(swaggerFile);

const sendMail = require("./controllers/sendMail");

let PORT = process.env.PORT || 4800;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/", (req, res) => {
  res.send("The Server");
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Running server at ${PORT}`);
      console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
