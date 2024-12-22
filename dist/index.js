"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandlerMiddleware_1 = __importDefault(require("./middleware/errorHandlerMiddleware"));
const loadConfiguration_1 = __importDefault(require("./middleware/loadConfiguration"));
const app = (0, express_1.default)();
(0, loadConfiguration_1.default)(app);
//Error handling
app.use(errorHandlerMiddleware_1.default);
//starting server
const PORT = process.env['PORT'] || '3000';
app.listen(PORT, () => {
    console.log('Server started at ' + PORT);
});
