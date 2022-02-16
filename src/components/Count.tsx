import React, {FunctionComponent} from 'react';

interface OwnProps {
    text: string;
    count: number;
}

type Props = OwnProps;

const Count: FunctionComponent<Props> = ({text, count}) => {

    console.log(`Rendering ${text}`);

    return (
        <div>
            {text} - {count}
        </div>
    );
};

export default React.memo(Count);
