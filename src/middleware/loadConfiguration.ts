/**
 * author Saquib Shaikh
 * created on 09-11-2024-02h-37m
 * github: https://github.com/saquibshaikh14
 * copyright 2024
*/

import express, { Express, NextFunction, Request, Response } from 'express';


import config from "@/config/server.config";
import logger from '@/logger';
import { randomUUID } from 'crypto';
import loggerMiddleware from './loggerMiddleware';

export default function configureApp (app: Express): void{
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(loadContext);
    app.use(loggerMiddleware);
}

function loadContext (req: Request, _res: Response, next: NextFunction) {
    req.config = config;
    let uuid = randomUUID();
    req.logger = logger.child({requestId: uuid});
    req.requestId = uuid;
    next();
}