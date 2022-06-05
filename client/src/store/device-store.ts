import { makeAutoObservable } from 'mobx';
import { TypeType, BrandType, DeviceType } from '../types/types';





export default class DeviceStore {
    _types: TypeType[];
    _brands: BrandType[];
    _devices: DeviceType[];
    _selectedType: TypeType | Object;
    _selectedBrand: BrandType | Object;

    _page: number;
    _totalCount: number;
    _limit: number;


    constructor() {
        this._types = [];
        this._brands = [];

        this._selectedType = {};
        this._selectedBrand = {};

        this._devices = [];

        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;

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

    setPage(page: number) {
        this._page = page;
    }

    setTotalCount(totalCount: number) {
        this._totalCount = totalCount;
    }

    setLimit(limit: number) {
        this._limit = limit;
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

    get page () {
        return this._page;
    }

    get totalCount () {
        return this._totalCount;
    }

    get limit () {
        return this._limit;
    }
}