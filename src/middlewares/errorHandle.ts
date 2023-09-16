import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error.message);

    if (error.name === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}