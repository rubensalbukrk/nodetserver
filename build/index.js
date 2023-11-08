"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./src/routes"));
exports.app = (0, express_1.default)();
const port = process.env.PORT;
dotenv_1.default.config();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
(0, routes_1.default)(exports.app);
/// OUVINDO NA PORTA
exports.app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
