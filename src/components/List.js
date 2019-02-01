import React from 'react';
import ListItem from './ListItem';

const List = props => {
    return (
        props.users.map(user => <ListItem content={user} key={user.id} />)
    )
}

export default List;