import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const HookCounter2: FunctionComponent<Props> = (props) => {
    const initialCount = 0;
    const [count, setCount] = useState(0);

    const incrementFive = () => {
        for(let i =0; i < 5; i++){
            setCount(prev => prev + 1);
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    );
};

export default HookCounter2;
