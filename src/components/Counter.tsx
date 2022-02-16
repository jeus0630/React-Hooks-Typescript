import React, { FunctionComponent, useState, useMemo} from 'react';

interface OwnProps {}

type Props = OwnProps;

const Counter: FunctionComponent<Props> = (props) => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(prev => prev + 1);
  }

  const incrementTwo = () => {
    setCounterTwo(prev => prev + 1);
  }

  const isEven = useMemo(() => {
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
      <div>
        <div>
          <button onClick={incrementOne}>Count One - {counterOne}</button>
          <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
          <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
      </div>

  );
};

export default Counter;
