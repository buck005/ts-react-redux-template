// import * as types from '../action-types';
// import { Store } from '../../types';
// import { Action } from '../actions/counter';
// let initState: Store = {
//     number: 0
// }
// export default function (state: Store = initState, action: Action) {
//     switch (action.type) {
//         case types.INCREMENT:
//             return { number: state.number + 1 };
//         case types.DECREMENT:
//             return { number: state.number - 1 };
//         default:
//             return state
//     }
// }
import { combineReducers } from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
import {connectRouter} from 'connected-react-router';
// 1.第一步合并reducers 为了将当前的路径信息写入仓库
import history from '../history';
// 合并组件状态
let reducers = combineReducers({
    counter1,
    counter2,
    router:connectRouter(history)
});
export default reducers;
