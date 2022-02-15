import React, {FunctionComponent, useState, useEffect} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const HookMouse: FunctionComponent<Props> = (props) => {
    const [x, setX] = useState(0);
    const [y, sety] = useState(0);

    const logMousePosition = (e: MouseEvent) => {
        setX(e.clientX);
        sety(e.clientY);
    }

    useEffect(() => {

        window.addEventListener('mousemove', logMousePosition);

        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []);

    
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
};

export default HookMouse;
