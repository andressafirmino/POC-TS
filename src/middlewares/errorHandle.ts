import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}