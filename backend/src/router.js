const express = require('express');
const routes = express.Router();
const calc = require('./calc');

routes.post("/add", calc.add);
routes.post("/sub", calc.sub);
routes.post("/mult", calc.mult);
routes.post("/div", calc.div);
routes.post("/pow", calc.pow);

module.exports = routes;