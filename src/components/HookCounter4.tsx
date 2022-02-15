import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type Item = {
    id: number;
    value: number;
}

const HookCounter4: FunctionComponent<Props> = (props) => {

    const [items, setItems] = useState<Item[]>([]);

    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor(Math.random() * 10 + 1)}])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => {
                        return (
                            <li key={item.id}>{item.value}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default HookCounter4;
