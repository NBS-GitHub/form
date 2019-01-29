import React from 'react';

const Form = props => {
    return (
        <form>
            <input type="text" onChange={props.change} />
            <button type="button" onClick={props.click}>Reset</button>
        </form>
    );
}

export default Form;