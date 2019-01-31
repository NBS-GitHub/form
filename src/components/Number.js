import React from 'react';

const Number = props => {
    return (
        <>
            <div style={props.order > 0 ? {} : { opacity: .3 }}>{props.order}</div>
        </>
    );
}

export default Number;