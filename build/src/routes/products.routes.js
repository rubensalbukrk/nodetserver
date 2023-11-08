"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_controllers_1 = require("../controllers/product-controllers");
const productsRoutes = (app) => {
    app.post("/product", product_controllers_1.create);
    app.get("/product", product_controllers_1.get);
};
exports.default = productsRoutes;
