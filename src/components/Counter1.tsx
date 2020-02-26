import * as React from 'react';
import { connect } from 'react-redux';
import { Store, Counter1 } from '../types';
import actions from '../store/actions/counter';
interface Props {
    number: number,
    increment: any,
    decrement: any,
    goto:any
}
class Counter extends React.Component<Props> {
    render() { 
        console.log(this.props)
        let { number, increment, decrement,goto } = this.props;
        return (
            <div>
                <p>counter1:{number}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={goto}>跳转到/2</button>
            </div>
        )
    }
}
// 连接仓库
export default connect(
    (state: Store): Counter1 => state.counter1,
    actions
)(Counter);
