import React from 'react';

const Error = ({mensaje}) => {
    return(
        <p className="alert text-center text-danger">{mensaje}</p>
    )
}

export default Error;