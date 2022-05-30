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


export const createDevice = async({ device } : { device: DeviceType }) => {
    const { data } = await authHost.post('api/device', device);
    return data;
} 

export const fetchDevices = async() => {
    const { data } = await host.get('api/device');
    return data;
} 

export const fetchOneDevices = async(id: string) => {
    const { data } = await host.get(`api/device/${id}`);
    return data;
} 