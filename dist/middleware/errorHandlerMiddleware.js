"use strict";
/**
 * author Saquib Shaikh
 * created on 09-11-2024-21h-03m
 * github: https://github.com/saquibshaikh14
 * copyright 2024
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandlerMiddleware;
function errorHandlerMiddleware(req, res, next) {
    //use custom error handler.
    //sending generic error message if not handled before
    res.status(500).json({
        "status": "error",
        "code": 500,
        "message": "Internal server error.",
        "error": {
            "type": "ServerError",
        },
        "requestId": "abcd1234"
    });
}
