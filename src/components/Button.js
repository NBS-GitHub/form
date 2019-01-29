import React from 'react';

const Button = props => {
    return (
        <button onClick={props.click}>{props.isVisible ? 'Hide' : 'Show'}</button>
    );
}

export default Button;