"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_controllers_1 = require("../controllers/product-controllers");
const userRoutes = (app) => {
    app.post("/product", product_controllers_1.create);
};
exports.default = userRoutes;
