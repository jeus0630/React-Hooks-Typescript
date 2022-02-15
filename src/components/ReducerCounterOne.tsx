import React, {FunctionComponent, useReducer} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type Reducer = (state: number, action: string) => number;

const initialState = 0;

const reducer: Reducer = (state, action) => {
    switch(action){
        case 'increment' :
            return state + 1;
        case 'decrement' :
            return state - 1;
        case 'reset' :
            return initialState;
        default:
            return state;
    }
}

const ReducerCounterOne: FunctionComponent<Props> = (props) => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
};

export default ReducerCounterOne;
