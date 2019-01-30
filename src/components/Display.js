import React from 'react';

const Display = props => {
    const positiveMessage = 'You are old enough, you can buy the ticket.';
    const negativeMessage = 'You are too young, you are not coming in.';
    return (
        <>
            {props.isSubmitted ? <p>{props.ageEnough ? positiveMessage : negativeMessage}</p> : null}
        </>
    );
}

export default Display;