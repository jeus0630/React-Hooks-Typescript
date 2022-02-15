import React, {FunctionComponent, useEffect, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const HookCounterOne: FunctionComponent<Props> = (props) => {

    const [count, setCount] = useState(0);

    useEffect(()=>{

        document.title = `you clicked ${count} tiems`;

        return () => {

        }

    })

    const clickHandler = () => {
        setCount(prev => prev+1);
    }

    return (
        <div>
            <button onClick={clickHandler}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;
