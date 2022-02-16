import React, {FunctionComponent, useState, useEffect, useRef} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const HookTimer: FunctionComponent<Props> = (props) => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<NodeJS.Timer>(null!);

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
};

export default HookTimer;
