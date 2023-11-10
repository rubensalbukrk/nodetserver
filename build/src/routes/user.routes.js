"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controllers_1 = require("../controllers/users-controllers");
const userRoutes = (app) => {
    app.get("/users", users_controllers_1.get);
    app.post("/users", users_controllers_1.create);
    app.delete("/users", users_controllers_1.remove);
};
exports.default = userRoutes;
