import * as types from '../action-types';
import {push} from 'connected-react-router';
interface incrementAction {
    type: string
}
interface decrementAction {
    type: string
}
export type Action = incrementAction | decrementAction;
export default {
    increment() {
        // return { type: types.INCREMENT }
        return function (dispatch: any, getState: any) { // redux-thunk
            setTimeout(function () {
                dispatch({ type: types.INCREMENT });
            }, 1000)
        }
    },
    decrement(): decrementAction {
        return { type: types.DECREMENT }
    },
    goto(){
        // 如何通过派发actions的方式跳转路径，分三步
        return push('/2')
    }
}