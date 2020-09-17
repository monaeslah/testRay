import {RESET, LOADING} from 'redux/common/type';


export const infoLoading = (state = false, action) => {
    switch (action.type) {
        case RESET:
            return false;
        case LOADING:
            return action.data;
        default:
            return state;
    }
};
