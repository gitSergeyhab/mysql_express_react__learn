import { makeAutoObservable } from 'mobx';
import { TypeType, BrandType, DeviceType } from '../types/types';





export default class DeviceStore {
    _types: TypeType[];
    _brands: BrandType[];
    _devices: DeviceType[];
    _selectedType: TypeType | Object;
    _selectedBrand: BrandType | Object;


    constructor() {
        this._types = [];
        this._brands = [];

        this._selectedType = {};
        this._selectedBrand = {};

        this._devices = [
            // { id: 1, name: 'Samsung 1', price: 11111, rating: 4, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 2, name: 'Samsung 2', price: 22222, rating: 5, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 3, name: 'Samsung 3', price: 33333, rating: 3, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 4, name: 'Apple 1', price: 44444, rating: 4, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 5, name: 'Apple 11', price: 55555, rating: 5, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 6, name: 'Lenovo 1', price: 11111, rating: 4, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 7, name: 'Philips 1', price: 22222, rating: 5, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 8, name: 'Samsung 3', price: 33333, rating: 3, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 9, name: 'Apple 1', price: 44444, rating: 4, img: 'https://picsum.photos/id/237/200/300' },
            // { id: 10, name: 'Apple 11', price: 55555, rating: 5, img: 'https://picsum.photos/id/237/200/300' },
        ];

        makeAutoObservable(this);
    }

    setTypes(types: TypeType[]) {
        this._types = types;
    }

    setSelectedType(type: TypeType) {
        this._selectedType = type;
    }
    setSelectedBrand(brand: BrandType) {
        this._selectedBrand = brand;
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

    get selectedType () {
        return this._selectedType;
    }

    get selectedBrand () {
        return this._selectedBrand;
    }

    get brands () {
        return this._brands;
    }

    get devices () {
        return this._devices;
    }
}