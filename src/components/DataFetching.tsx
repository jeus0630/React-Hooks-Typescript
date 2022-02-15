import React, {FunctionComponent, useEffect, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type Posts = {
    body: string;
    id: number;
    title: string;
    userId: number;
}

const DataFetching: FunctionComponent<Props> = (props) => {

    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts([
                    ...posts,
                    ...data
                ])
            })

        return () => {

        };
    }, []);


    return (
        <div>
            <ul>
                {
                    posts.map(data => <li key={data.id}><em>{data.title}</em></li>)
                }
            </ul>
        </div>
    );
};

export default DataFetching;
