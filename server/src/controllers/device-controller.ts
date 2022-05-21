import { Request, Response } from "express";
import { Device, DeviceInfo } from "../models/models";
import uuid from 'uuid';
import path, { dirname } from "path";
import { UploadedFile } from "express-fileupload";
import ApiError from "../error/api-error";
import { Model } from "sequelize";

class DeviceController {
    async create(req: Request, res: Response, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            const fileName = `${uuid.v4}.jpeg`;
    
            if ( img instanceof Array) {
                console.error('ing is Array')
            } else {
                img.mv(path.resolve(__dirname, '..', 'static', fileName ))
            }

            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                const infoObj = JSON.parse(info);
                const deviceX: any = device;
                infoObj.forEach((item) => DeviceInfo.create({ 
                    title: item.title,
                    description: item.description,
                    deviceId: deviceX.id 
                 }))
            }
    
            return res.status(201).json(device)
        } catch (err) {
            next( ApiError.badRequest(err.message) ) 
        }

    }

    async getAll(req: Request, res: Response) {
        const { brandId, typeId, limit = 9, page = 1 } = req.query;
        let devices: { rows: Model<any, any>[]; count: number } | null = null; 
        const offset = +page * +limit - +limit

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit: +limit, offset });
        } else if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, typeId, limit: +limit, offset } });
        } else if (brandId) {
            devices = await Device.findAndCountAll({ where: { brandId, limit: +limit, offset } });
        } else {
            devices = await Device.findAndCountAll({ where: { typeId, limit: +limit, offset } });
        }
        
        return res.status(200).json(devices);
    }

    async getOne(req: Request, res: Response, next) {
        try {
            const { id } = req.params;
            if (id) {
                const device = await Device.findOne({ 
                    where: { id },
                    include: [ { model: DeviceInfo, as: 'info' } ]
                });
                return res.status(200).json(device)
    
            }
            next( ApiError.badRequest('Where is not ID') ) 
        } catch ( err ) {
            next( ApiError.badRequest(err.message) ) 
        }
    }
}

export const deviceController = new DeviceController()