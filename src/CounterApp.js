import React, { useState } from 'react';
import PropTypes from 'prop-types';

// FC
const CounterApp = ({ value }) => {
  console.log(`Valor recibido como propiedad: ${value}`);

  const [ counter, setCounter ] = useState (0); // []

  //HandleAdd
  const handleAdd = () => {
      setCounter ( counter + 1);
    // setCounter ( (c) =>  c + 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>

      <button onClick= { handleAdd }>+1 </button>
    </>
  );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;