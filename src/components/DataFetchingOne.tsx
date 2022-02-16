import React, {FunctionComponent, useState, useEffect, useReducer} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type StateType = {
    loading: boolean;
    error: string;
    post: PostType;
}

type ActionType = {type:'FETCH_SUCCESS', payload: PostType} | {type:'FETCH_FAIL'};

type Reducer = (state: StateType, action: ActionType) => StateType;

const reducer: Reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                post: {
                    ...state.post,
                    ...action.payload
                }
            }
        case 'FETCH_FAIL':
            return {
                ...state,
                loading: false,
                error: 'Error',
                post: {
                    ...state,
                    ...initialState.post
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
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response=>{
                if(!response.ok){
                    dispatch({type:'FETCH_FAIL'});
                    return;
                }
                return response.json();
            })
            .then(data=>{
                if(data){
                    dispatch({type:'FETCH_SUCCESS',payload:data});
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({type:'FETCH_FAIL'});
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
