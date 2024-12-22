/**
 * author Saquib Shaikh
 * created on 09-11-2024-21h-47m
 * github: https://github.com/saquibshaikh14
 * copyright 2024
 */

import { Request } from "express";
import { Logger } from "pino";

declare global {
	namespace Express {
		interface Request {
			logger: Logger;
			config: Record<string, boolean | string>;
			requestId: string;
		}
	}
}
