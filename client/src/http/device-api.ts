import { authHost, host } from ".";
import { BrandType, DeviceType, TypeType } from '../types/types';


export const createType = async({ name } : { name: string }) => {
    const { data } = await authHost.post('api/type', { name });
    return data;
} 

export const fetchTypes = async() => {
    const { data } = await host.get('api/type');
    return data;
} 


export const createBrand = async({ name } : { name: string }) => {
    const { data } = await authHost.post('api/brand', { name });
    return data;
} 

export const fetchBrands = async() => {
    const { data } = await host.get('api/brand');
    return data;
} 


export const createDevice = async({ device } : { device: DeviceType | FormData }) => {
    const { data } = await authHost.post('api/device', device);
    return data;
} 

type fetchDevicesParams = { typeId: number | null, brandId: number | null, page: number, limit: number};
export const fetchDevices = async({ typeId, brandId, page, limit } : fetchDevicesParams) => {
    const { data } = await host.get('api/device', { params: { typeId, brandId, page, limit } });
    return data;
} 

export const fetchOneDevice = async(id: string) => {
    const { data } = await host.get(`api/device/${id}`);
    return data;
} 