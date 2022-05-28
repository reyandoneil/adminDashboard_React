import { SET_IS_IDLE } from './index'
export const setIsIdle = (payload) => {
    return {
        type: SET_IS_IDLE,
        payload
    }
}