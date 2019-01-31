import React from 'react';

const ListItem = props => {
    return (
        <div className='wrapper'>
            <h2>{`Name: ${props.content.name}`}</h2>
            <h3>{`Age: ${props.content.age}`}</h3>
            <h3>{`Sex: ${props.content.sex}`}</h3>
        </div>
    )
}

export default ListItem;