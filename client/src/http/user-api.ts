import decode from 'jwt-decode';
import { authHost, host } from ".";

const saveToken = (token: string) => localStorage.setItem('token', token);

export const registration = async({ email, password } : { email: string, password: string }) => {
    const { data } = await host.post('api/user/registration', { email, password, role: 'ADMIN' });
    saveToken(data.token);
    return decode(data.token);
} 

export const login = async({ email, password } : { email: string, password: string }) => {
    const { data } = await host.post('api/user/login', { email, password });
    saveToken(data.token);
    return decode(data.token);
} 

export const check = async() => {
    const { data } = await authHost.get('api/user/auth');
    saveToken(data.token);
    return decode(data.token);
} 