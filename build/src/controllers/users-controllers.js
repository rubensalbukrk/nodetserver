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
exports.remove = exports.create = exports.get = void 0;
const users_repository_1 = require("../repositorys/users-repository");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_repository_1._getUsers)();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_repository_1._createUser)(req.body);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.create = create;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_repository_1._removeUser)(req.body.id);
        res.status(200).send(`O usuário de id: "${req.body.id}" foi deletado!`);
    }
    catch (e) {
        res.status(400).send(`O usuário de id: "${req.body.id}" não foi encontrado para ser removido!`);
    }
});
exports.remove = remove;
