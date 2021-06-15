import React from 'react';
// I forgot to specify the component Comment :( 
import Comment from '../components/Comment';

class CommentsContainer extends React.Component {
    // local state, not through store
    state = { 
        comments: [ {name: "John", content: "test1"}, 
            {name: "James", content: "test2"} ]
    }

    render() {
    
        return (
            <div>
            {this.state.comments.map((comment) => 
            <Comment name={comment.name} content={comment.content}/>
            )}
            </div>
           
           
        )
        
    }
}
    
    export default CommentsContainer;