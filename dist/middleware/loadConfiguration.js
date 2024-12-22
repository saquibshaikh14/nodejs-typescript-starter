"use strict";
/**
 * author Saquib Shaikh
 * created on 09-11-2024-02h-37m
 * github: https://github.com/saquibshaikh14
 * copyright 2024
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureApp;
const express_1 = __importDefault(require("express"));
const server_config_1 = __importDefault(require("../config/server.config"));
function configureApp(app) {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        req.config = server_config_1.default;
        req.logger = {};
        next();
    });
}
