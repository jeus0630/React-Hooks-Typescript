import React, {ChangeEvent, FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type Name = {
    firstName: string;
    lastName: string;
}

const HookCounter3: FunctionComponent<Props> = (props) => {

    const [fullName, setFullName] = useState<Name>({
        firstName: '',
        lastName: ''
    });

    const changeHandler = (e: ChangeEvent) => {
        const {name, value} = e.target as HTMLInputElement;

        setFullName({
            ...fullName,
            [name] : value
        })
    }

    return (
        <div>
            <form action="">
                <input type="text" name={"firstName"} onChange={changeHandler}/>
                <input type="text" name={"lastName"} onChange={changeHandler}/>
                <h2>Your first name is - {fullName.firstName}</h2>
                <h2>YOur last name is - {fullName.lastName}</h2>
            </form>
        </div>
    );
};

export default HookCounter3;
