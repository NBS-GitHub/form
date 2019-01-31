import React from 'react';

const Button = props => {

    const text = props.text;

    const btn = text === '-' ? (props.order === 0 ? true : false) : props.order === props.stock ? true : false;

    return (
        <>
            <button disabled={btn} onClick={props.click}>{props.text}</button>
        </>
    );
}

export default Button;