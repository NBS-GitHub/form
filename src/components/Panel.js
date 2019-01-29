import React from 'react';

const Panel = props => {
    return (
        <h3>{props.value.toUpperCase()}</h3>
    );
}

export default Panel;