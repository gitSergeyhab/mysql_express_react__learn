import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkAuth = (req /*: Request */, res: Response, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; //Bearer some-token
        if (!token) {
            res.status(401).json({ message: 'Not Auth' })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY); //  проверяет совпадают ли токены
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Not Auth' })
    }
}