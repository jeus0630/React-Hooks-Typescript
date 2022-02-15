import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const HookCounterOne: FunctionComponent<Props> = (props) => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(()=>{
        console.log('updating title');
        document.title = `you clicked ${count} tiems`;

        return () => {

        }

    },[count]);

    const clickHandler = () => {
        setCount(prev => prev+1);
    }

    const changeHandler = (e: ChangeEvent) => {
        const {value} = e.target as HTMLInputElement;
        setName(value);
    }

    return (
        <div>
            <input type="text" onChange={changeHandler}/>
            <button onClick={clickHandler}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;
