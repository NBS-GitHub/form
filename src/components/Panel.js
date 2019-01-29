import React from 'react';

const Panel = props => {
    const text = 'Lorem ipsum dolor sit amet.';
    return (
        <>
            {props.isVisible && <p>{text}</p>}
        </>
    );
}

export default Panel;