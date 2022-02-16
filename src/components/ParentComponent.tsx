import React, {FunctionComponent, useState, useCallback} from 'react';
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

interface OwnProps {
}

type Props = OwnProps;

const ParentComponent: FunctionComponent<Props> = (props) => {

    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    const incrementAge = useCallback(() => {
        setAge(prev => prev + 1);
    },[setAge]);

    const incrementSalary = useCallback(() => {
        setSalary( prev => prev + 1);
    },[setSalary]);

    return (
        <div>
            <Title></Title>
            <Count text={"Age"} count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text={"Salary"} count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
};

export default ParentComponent;
