import React, { FunctionComponent,useState } from 'react';
import HookMouse from "./HookMouse";

interface OwnProps {}

type Props = OwnProps;

const MouseContainer: FunctionComponent<Props> = (props) => {
  const [display, setDisplay] = useState(true);

  const clickHandler = () => {
    setDisplay(!display);
  }

  return (
      <div>
        <button onClick={clickHandler}>Toggle Display</button>
        {display && <HookMouse></HookMouse>}
      </div>
  );
};

export default MouseContainer;
