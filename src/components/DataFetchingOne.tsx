import React, {FunctionComponent, useState, useEffect, useReducer} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type StateType = {
    loading: boolean;
    error: string;
    post: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
}

type ActionType = {type: 'loading', payload: boolean} | {type: 'error', payload: string} | {type: 'post', payload: StateType};

type Reducer = (state: StateType, action: ActionType) => StateType;

const reducer: Reducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading: action.payload
            }
        case 'error':
            return {
                ...state,
                error: action.payload
            }
        case 'post':
            return {
                ...state,
                post: {
                    ...state.post,
                    ...action.payload
                }
            }
        default :
            return initialState
    }
}

const initialState: StateType = {
    loading: true,
    error: '',
    post: {
        userId: 0,
        id: 0,
        title: '',
        body: ''
    }
}

const DataFetchingOne: FunctionComponent<Props> = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/postsss/1')
            .then(response=>{
                if(!response.ok){
                    dispatch({type:'loading',payload: true});
                    dispatch({type:'post', payload: initialState});
                    dispatch({type:'error', payload: 'something went wrong!'});
                    return;
                }
                return response.json();
            })
            .then(data=>{
                dispatch({type:'loading', payload : false});

                if(data){
                    dispatch({type:'post', payload: data});
                    dispatch({type:'error',payload : ''});
                }
            })
        return () => {

        };
    }, []);


    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
};

export default DataFetchingOne;
