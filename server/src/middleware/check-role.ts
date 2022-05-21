import { Request, Response } from "express";
import jwt from "jsonwebtoken";



export const checkRole = (role: string) => {

    return (req /*: Request */, res: Response, next) => {
        if (req.method === 'OPTIONS') {
            next();
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]; //Bearer some-token
            if (!token) {
                res.status(401).json({ message: 'Not Auth' });
            }
    
            const decoded = jwt.verify(token, process.env.SECRET_KEY); //  проверяет совпадают ли токены
    
            if ((decoded as any).role !== role) {
                return res.status(403).json({ message: 'You are not Admin' });
            }
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Not Auth' })
        }
    }


}