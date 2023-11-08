"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controlers_1 = require("../controllers/user-controlers");
const userRoutes = (app) => {
    app.get("/users", user_controlers_1.get);
    app.post("/users", user_controlers_1.create);
};
exports.default = userRoutes;
