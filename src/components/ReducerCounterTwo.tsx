import React, {FunctionComponent, useReducer} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type InitialStateType = {
    firstCounter: number;
}

type ActionType = {type: 'increment'; value: number;} | {type: 'decrement'; value: number;} | {type: 'reset'};

type Reducer = (state: InitialStateType, action: ActionType) => InitialStateType;

const initialState = {
    firstCounter: 0
};

const reducer: Reducer = (state, action) => {
    switch(action.type){
        case 'increment' :
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            }
        case 'decrement' :
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            }
        case 'reset' :
            return initialState
        default:
            return state;
    }
}

const ReducerCounterTwo: FunctionComponent<Props> = (props) => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({type : 'increment', value: 1}) }>Increment1</button>
            <button onClick={() => dispatch({type : 'decrement', value: 1})}>Decrement1</button>
            <button onClick={() => dispatch({type : 'increment', value: 5})}>Increment5</button>
            <button onClick={() => dispatch({type : 'decrement', value: 5})}>Decrement5</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </div>
    );
};

export default ReducerCounterTwo;
