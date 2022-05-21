import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import ApiError from "../error/api-error";
import { Basket, User } from "../models/models";
import jwt from "jsonwebtoken";

interface ITolenParams { email: string, id: string, role: string };
const createToken = ({ email, id, role } : ITolenParams) => jwt.sign(
    { id, email, role }, process.env.SECRET_KEY, { expiresIn: '13h' }
    )

class UserController {
    async registration(req: Request, res: Response, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('there is not email / password'))
        }
        const candidate = await User.findOne({ where: { email } });

        if (candidate) {
            return next(ApiError.badRequest('user with this password is already registered'))
        }

        const hashPassword = await bcrypt.hash( password, 5 );
        const user = await User.create({ email, password: hashPassword, role });
        const basket = await Basket.create({ userId: (user as any).id });

        const token = createToken({ id: (user as any).id, email, role });

        return res.status(201).json(token);


    }

    async login(req: Request, res: Response, next) {

        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.internal(`there is not user with email: ${email}`))
        }

        const comparePassword = bcrypt.compareSync(password, (user as any).password) // сравнитвает пароль из тела запроса и из базы
        if (!comparePassword) {
            return next(ApiError.internal(`your password is wrong: ${password}`))
        }

        const token = createToken({ id: (user as any).id, email, role: (user as any).role });
        console.log(token, '!!!!!!!!!!!!!');
        return res.status(200).json({ token });
    }

    async check( req, res: Response, next ) {

        const { id, email, role } = req.user;

        const token = createToken({ id, email, role })

        res.status(200).json({ token })
    }

}

export const userController = new UserController()