"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postsRoutes = (app) => {
    app.post("/posts");
    app.get("/posts");
};
exports.default = postsRoutes;
