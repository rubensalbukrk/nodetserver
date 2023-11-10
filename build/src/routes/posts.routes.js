"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_controllers_1 = require("../controllers/posts-controllers");
const postsRoutes = (app) => {
    app.post('/posts', posts_controllers_1.create);
    app.get('/posts', posts_controllers_1.get);
    app.delete('/posts', posts_controllers_1.remove);
    app.put('/posts', posts_controllers_1.update);
};
exports.default = postsRoutes;
