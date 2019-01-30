import React from 'react';

const Panel = props => {
    const message = "Result is more than 10 - stack overflow!!! omg";
    return (
        <>
            <h2>Click counter: {props.count}</h2>
            <h2>Result: {props.result}</h2>
            {props.count > 10 && <p>{message}</p>}
        </>
    );
}

export default Panel;