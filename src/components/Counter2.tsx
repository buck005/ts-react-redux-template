import * as React from 'react';
import { connect } from 'react-redux';
import { Store, Counter2 } from '../types';
import actions from '../store/actions/counter';
interface Props {
    number: number,
    increment: any,
    decrement: any
}
class Counter extends React.Component<Props> {
    render() {
        console.log(this.props)
        let { number, increment, decrement } = this.props;
        return (
            <div>
                <p>counter2:{number}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}
// 连接仓库
export default connect(
    (state: Store): Counter2 => state.counter2,
    actions
)(Counter);
