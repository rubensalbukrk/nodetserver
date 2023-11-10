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
exports._removeAllPosts = exports._removePost = exports._updatePost = exports._createPost = exports._getPosts = void 0;
const prisma_1 = require("../services/prisma");
const _getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield prisma_1.prisma.post.findMany();
    return posts;
});
exports._getPosts = _getPosts;
const _createPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield prisma_1.prisma.post.create({
        data
    });
    return post;
});
exports._createPost = _createPost;
const _updatePost = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield prisma_1.prisma.post.update({
        where: {
            id
        },
        data
    });
});
exports._updatePost = _updatePost;
const _removePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield prisma_1.prisma.post.delete({
        where: {
            id
        }
    });
});
exports._removePost = _removePost;
const _removeAllPosts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removedAllPosts = yield prisma_1.prisma.post.deleteMany({});
    return removedAllPosts;
});
exports._removeAllPosts = _removeAllPosts;
