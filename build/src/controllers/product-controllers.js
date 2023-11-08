"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.create = void 0;
const products_repository_1 = require("../repositorys/products-repository");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, products_repository_1.createProduct)(req.body);
        res.status(200).send(product);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.create = create;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield (0, products_repository_1.getProducts)();
        res.status(200).send(allProducts);
    }
    catch (error) {
        res.status(400).send(`Erro encontrado: ${error}`);
    }
});
exports.get = get;
