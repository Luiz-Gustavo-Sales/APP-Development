const express = require("express");
const controllerRegister = require("./controllers/register");
const controllerLogin = require("./controllers/login");
const routes = express.Router();

routes.post("/user", controllerRegister.store);
routes.get("/login", controllerLogin.index);
module.exports = routes;
