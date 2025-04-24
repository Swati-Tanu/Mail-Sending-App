// swaggerOptions.js
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mail Sender API",
      version: "1.0.0",
      description: "API to send mail using Node and Nodemailer",
    },
    servers: [
      {
        url: "http://localhost:4800",
      },
    ],
  },
  apis: ["./index.js", "./controllers/sendMail.js"], 
};

module.exports = options;
