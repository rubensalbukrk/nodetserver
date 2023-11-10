"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_routes_1 = __importDefault(require("./posts.routes"));
const products_routes_1 = __importDefault(require("./products.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const routes = (app) => {
    (0, products_routes_1.default)(app);
    (0, user_routes_1.default)(app);
    (0, posts_routes_1.default)(app);
};
exports.default = routes;
