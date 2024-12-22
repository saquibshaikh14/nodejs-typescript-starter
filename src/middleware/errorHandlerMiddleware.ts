/**
 * author Saquib Shaikh
 * created on 09-11-2024-21h-03m
 * github: https://github.com/saquibshaikh14
 * copyright 2024
 */

import { NextFunction, Request, Response } from "express";

export default function errorHandlerMiddleware(
	err: Error,
	req: Request,
	res: Response,
	_next: NextFunction
) {
	req.logger.info("Some error in processing request");
	//use custom error handler.
	let response = null; //get it from custom error handlers based on types

	//if there is no error specific error handler, set generic response.
	if (!response) {
		response = {
			status: "error",
			code: 500,
			message: "Internal server error.",
			error: {
				type: "ServerError",
			},
			requestId: req.requestId,
		};
	}

	res.status(response.code).json(response);
	req.logger.error(err);
	req.logger.debug(response, "Response");
	req.logger.info("Response sent with error");
}
