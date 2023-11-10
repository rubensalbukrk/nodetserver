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
exports.remove = exports.get = exports.create = void 0;
const products_repository_1 = require("../repositorys/products-repository");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, products_repository_1._createProduct)(req.body);
        res.status(200).send(product);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.create = create;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield (0, products_repository_1._getProducts)();
        res.status(200).send(allProducts);
    }
    catch (e) {
        res.status(400).send(`Houve um problema com o servidor: ${e}`);
    }
});
exports.get = get;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removeProduct = yield (0, products_repository_1._removeProduct)(req.body.id);
        res.status(200).send('Produto foi removido do banco de dados!');
    }
    catch (e) {
        res.status(400).send(`O produto não foi encontrado, houve um problema: ${e}`);
    }
});
exports.remove = remove;
