import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import personaController from "@controllers/persona.controller";

const app = express()

app.use(bodyParser.json())

app.use(function(req, res, next) {
    console.log( req.method)
    console.log( req.headers)
    console.log('==================')


    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
    res.header("Access-Control-Allow-Methods", "GET,PUT, POST, DELETE, HEAD"); 
    res.header('Access-Control-Allow-Credentials', 'true'); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, json");
    next()
  });

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})
app.use('/persona', personaController)

app.connect('/', (req: Request, res: Response) => {
    res.send('hello world  CONNECT METHOD')
})

app.use((req, res, next) => {
    let err: any = new Error(`cannot ${req.method} to ${req.originalUrl}`); // Tells us which IP tried to reach a particular URL
    err.statusCode = 404;
    err.shouldRedirect = 0;
    next(err);
})

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    console.error("error: " ,err.message);
    if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err

    if (err.shouldRedirect) {
        res.redirect('http://www.das.com/persona/all')// Renders a myErrorPage.html for the user
    } else {
        res.status(err.statusCode).send(err.message); // If shouldRedirect is notper defined in our error, sends our original err data
    }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})

