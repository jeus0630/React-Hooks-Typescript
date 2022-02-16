import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Title: FunctionComponent<Props> = (props) => {
    console.log(`Rendering Title`);
    return (
        <div>
            useCallback Hook
        </div>
    );
};

export default React.memo(Title);
