import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const HookCounter: FunctionComponent<Props> = (props) => {

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(prev => prev+ 1);
    }

    return (
        <div>
            <button onClick={clickHandler}>Count {count}</button>
        </div>
    );
};

export default HookCounter;
