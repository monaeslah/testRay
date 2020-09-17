import {Url, Header, getRereshObject} from 'utils/utils';
import {RESET, LOADING} from 'redux/common/type';
import {refreshOtp} from 'redux/auth/action';
import store from 'redux/store'
import {message} from "antd";

let refresh = true;
let timeAction = null;

export function fetcher(url = Url("/url-not-filled", {}), header = {}, ext = {noAuth: true, toText: false}) {
    store.dispatch(loading(true));
    return fetch(Url(url), Header(header, ext.noAuth))
        .then(async (response) => {
            if (!response.ok) {//4xx-5xx

                if ((response.status === 401) && refresh) {//401
                    timeAction = setTimeout(() => {
                        refresh = true;
                    }, 6000);
                    store.dispatch(refreshOtp({
                        "refresh": getRereshObject()
                    }));

                    refresh = false;
                }
                if ((response.status === 403 ) && refresh ) {//401
                    timeAction = setTimeout(() => {
                        refresh = true;
                    }, 6000);
                    message.error('اجازه دسترسی ندارید');
                    refresh = false;
            }

                    throw new Error((await response.json()).message || response.status)





            }
            store.dispatch(loading(false));
            return response;
        })
        .then(r => r[ext.toText ? "text" : "json"]())//r["json"]() r.json()
        .catch(e => {
            store.dispatch(loading(false));
            return Promise.reject(e)
        })

}


export const reset = () => {
    return {
        type: RESET,
    }
};
export const loading = (data) => {
    return {
        type: LOADING,
        data
    }
};
