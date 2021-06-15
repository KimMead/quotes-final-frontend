import React from 'react';

const Comment = (props) => {

    return (
        <div> 
            <p>Name: {props.name} Comment: {props.content}</p>
        </div>
    )
}

export default Comment;