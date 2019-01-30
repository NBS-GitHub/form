import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <label htmlFor="age">
                <input
                    type="checkbox"
                    id="age"
                    onChange={props.change}
                    checked={props.ageEnough}
                />
                I am 16 years old.
            </label>
            <br />
            <button>Buy ticket</button>
        </form>
    );
}

export default Form;