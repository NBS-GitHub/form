import React from 'react';

const Buttons = props => {

    return (
        <div className="buttonsWrapper">
            <button value='both' onClick={props.click}>Show all</button>
            <button value='male' onClick={props.click}>Show male</button>
            <button value='female' onClick={props.click}>Show female</button>
        </div>
    );
}

export default Buttons;