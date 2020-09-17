import cookie from 'react-cookies';
import qs from 'qs';
import {BASE_URL} from 'utils'

export function Arraify(data){
    if(!data) return []

    if(Array.isArray(data)){
        return data
    }else{
        return [data]
    }
}
export function Header(options = {},noAuth= true) {
    let token = Token(), headers = new Headers();

    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    noAuth && token && headers.set('Authorization',"Bearer "+ token);
    options.headers && Object.entries(options.headers).forEach(([k, v]) => headers.set(k, v));
    options.headers = headers;

    return options;
}

export function Url(url = "", data = undefined) {
    if (url.charAt(0) !== '/') {url = '/' + url}
    return BASE_URL + url + (data ? `?${qs.stringify(data)}` : ``);
}

export function setToken(token,refresh) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 14);
    cookie.save('token', token, {path: '/', expires});
    cookie.save('refresh', refresh, {path: '/', expires});
}

export function Token() {
    let token = cookie.load('token');
    if (token === 'undefined') {
        return undefined;
    }

    return token;
}
export function Refresh() {
    let refresh = cookie.load('refresh');
    if (refresh === 'undefined') {
        return undefined;
    }

    return refresh;
}
export function removeToken() {
    cookie.remove('token', {path: '/'});
    cookie.remove('refresh', {path: '/'});
}

export function getTokenObject() {
    let token = Token();
    if (token !== undefined) {
        return token;
    }
}
export function getRereshObject() {
    let refresh = Refresh();
    if (refresh !== undefined) {
        return refresh;
    }
}

export function formatNumber(value) {
    let f = value.match(/\d+/);
    if (f) return f[0];
    return '';
}
