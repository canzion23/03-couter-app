import React from 'react';
import PropTypes from 'prop-types';


// Function Components
const PrimeraApp = ( {saludo, subtitulo } ) => {

    // const saludo = {
    //     nombre: 'Luis',
    //     edad: 36
    // }

    return (
      <>
        {/* <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
        <h1>{ saludo }!!!</h1>
        {/* <p>Esta es mi primera aplicación</p> */}
        <p>{ subtitulo }</p>
      </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;