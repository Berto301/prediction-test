import Server from "./server";
require("dotenv").config();
const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 4000;
const server = new Server(port)
server.start()