import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
import sequelize from './db';
import { Basket, BasketDevice, Brand, Device, DeviceInfo, Rating, Type, TypeBrand, User } from './models/models';
import router from './routes';
import errorHandler from './middleware/error-handling';
import fileUpload from 'express-fileupload';
import path from 'path';




const PORT = process.env.PORT || 5000;
console.log('process.env.PORT', process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

app.use(errorHandler);


app.get('/', (req, res) => {
    res.status(200).json({ message: 'It is working' })
})






const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Started on port ${PORT}`));
    } catch (err) {
        console.error(err);
    }
}


start();