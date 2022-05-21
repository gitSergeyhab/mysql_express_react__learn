import { Request, Response } from "express";
import ApiError from "../error/api-error";

const errorHandler = (err: Error | ApiError, req: Request, res: Response, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: 'Unknown Error' });
}

export default errorHandler;