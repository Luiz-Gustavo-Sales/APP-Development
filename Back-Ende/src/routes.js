const express = require("express");
const controllerRegister = require("./controllers/registerProdutividade");
const controllerLogin = require("./controllers/login");
const routes = express.Router();

routes.post("/cadastrar", controllerRegister.store);
routes.post("/login", controllerLogin.Login);
module.exports = routes;
