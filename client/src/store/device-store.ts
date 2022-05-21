import { makeAutoObservable } from 'mobx';

type TypeType = { id: number, name: string };

type BrandType = { id: number, name: string };

type DeviceType = { id: number, name: string, price: number, rating: number, img: string };



export default class DeviceStore {
    _types: TypeType[];
    _brands: BrandType[];
    _devices: DeviceType[];


    constructor() {
        this._types = [
            { id: 1, name: 'Fridges' },
            { id: 2, name: 'Phones' },
        ];

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
        ];

        this._devices = [
            { id: 1, name: 'Samsung 1', price: 11111, rating: 4, img: 'https://picsum.photos/id/237/200/300' },
            { id: 2, name: 'Samsung 2', price: 22222, rating: 5, img: 'https://picsum.photos/id/237/200/300' },
            { id: 3, name: 'Samsung 3', price: 33333, rating: 3, img: 'https://picsum.photos/id/237/200/300' },
            { id: 4, name: 'Apple 1', price: 44444, rating: 4, img: 'https://picsum.photos/id/237/200/300' },
            { id: 5, name: 'Apple 11', price: 55555, rating: 5, img: 'https://picsum.photos/id/237/200/300' },
        ];

        makeAutoObservable(this);
    }

    setTypes(types: TypeType[]) {
        this._types = types;
    }

    setBrands(brands: BrandType[]) {
        this._brands = brands;
    }

    setDevices(devices: DeviceType[]) {
        this._devices = devices;
    }

    get types () {
        return this._types;
    }

    get brands () {
        return this._brands;
    }

    get devices () {
        return this._devices;
    }
}