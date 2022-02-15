import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from 'react';

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
    const [search, setSearch] = useState('');
    const initialRef = useRef(false);

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

    useEffect(() => {
        if(initialRef.current) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${search}`)
                .then(response => response.json())
                .then(data => {
                    setPosts([
                        data
                    ])
                })
        }
        return () => {

        };
    }, [search]);

    const changeHandler = (e: ChangeEvent) => {
        initialRef.current = true;
        const {value} = e.target as HTMLInputElement;

        setSearch(value);
    }

    return (
        <div>
            <input type="text" onChange={changeHandler}/>
            <ul>
                {
                    posts.map(data => <li key={data.id}><em>{data.title}</em></li>)
                }
            </ul>
        </div>
    );
};

export default DataFetching;
