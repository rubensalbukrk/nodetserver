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
exports.update = exports.remove = exports.create = exports.get = void 0;
const posts_repository_1 = require("../repositorys/posts-repository");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, posts_repository_1._getPosts)();
        res.status(200).send(posts);
    }
    catch (e) {
        res.status(200).send(`Houve um problema em obter todos os posts: ${e}`);
    }
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const post = yield (0, posts_repository_1._createPost)(req.body);
        res.status(200).send(`O post "${(_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.title}" foi criado!`);
    }
    catch (e) {
        res.status(400).send(`Não foi possivel criar um post - error / ${e}`);
    }
});
exports.create = create;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const post = yield (0, posts_repository_1._removePost)((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.id);
    }
    catch (e) {
        res.status(400).send(`Não foi encontrado o post para remover - error / ${e}`);
    }
});
exports.remove = remove;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const post = yield (0, posts_repository_1._updatePost)((_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.id, req.body);
        res.send(200).send(`O post foi criado! \n ${post}`);
    }
    catch (e) {
    }
});
exports.update = update;
