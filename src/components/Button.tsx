import React, {FunctionComponent} from 'react';

interface OwnProps {
    handleClick: () => void;
    children: string;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({handleClick, children}) => {
    console.log(`Rendering ${children} button`);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
};

export default React.memo(Button);
