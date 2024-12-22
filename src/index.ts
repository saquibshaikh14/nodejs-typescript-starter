import express, {Express, NextFunction, Request, Response} from 'express';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import configureApp from './middleware/loadConfiguration';


const app: Express = express();

configureApp(app);

//handle 404
app.use((req: Request, res: Response, next: NextFunction)=>{
    // res.status(404).json({
    //     "status": "page_not_found",
    //     "code": 404,
    //     "message": "Page Not Found",
    //     "requestId": req.requestId
    // })
    throw new Error('spme error')
})

//Error handling
app.use(errorHandlerMiddleware)

//starting server
const PORT = process.env['PORT'] || '3000';
app.listen(PORT, ()=>{
    console.log('Server started at '+ PORT);
})