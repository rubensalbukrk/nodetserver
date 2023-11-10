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
exports._removeProduct = exports._getProducts = exports._createProduct = void 0;
const prisma_1 = require("../services/prisma");
const _createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma_1.prisma.product.create({
        data
    });
    return product;
});
exports._createProduct = _createProduct;
const _getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield prisma_1.prisma.product.findMany();
    return allProducts;
});
exports._getProducts = _getProducts;
const _removeProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removedProduct = yield prisma_1.prisma.product.delete({
        where: {
            id
        }
    });
});
exports._removeProduct = _removeProduct;
