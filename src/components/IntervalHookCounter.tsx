import React, {FunctionComponent, useState, useEffect} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const IntervalHookCounter: FunctionComponent<Props> = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setCount(prev => prev + 1);
        },1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {count}
        </div>
    );
};

export default IntervalHookCounter;
