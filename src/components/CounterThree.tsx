import React, {FunctionComponent, useReducer} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type InitialType = {
    firstCounter: number;
}

type ActionType = {type: 'increment'} | {type: 'decrement'} | {type: 'reset'};

type Reducer = (state: InitialType, action: ActionType) => InitialType;

const reducer: Reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + 1
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - 1
            }
        case 'reset':
            return initialState;

        default :
            return initialState
    }
}

const initialState: InitialType = {
    firstCounter: 0
}

const CounterThree: FunctionComponent<Props> = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.firstCounter}</h1>
            <button onClick={() => {dispatch({type: 'increment'})}}>increment</button>
            <button onClick={() => {dispatch({type: 'decrement'})}}>decrement</button>
            <button onClick={() => {dispatch({type: 'reset'})}}>reset</button>
            <h1>{state2.firstCounter}</h1>
            <button onClick={() => {dispatch2({type: 'increment'})}}>increment</button>
            <button onClick={() => {dispatch2({type: 'decrement'})}}>decrement</button>
            <button onClick={() => {dispatch2({type: 'reset'})}}>reset</button>
        </div>
    );
};

export default CounterThree;
