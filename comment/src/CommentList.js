import React, {Component} from 'react'
class CommentList extends Component{
    
    render (){
        const comments = [
          {username: 'aa', content: '111'},
          {username: 'bb', content: '222'},
          {username: 'cc', content: '333'}
        ]
        return(
            <div>{comments.map((comment,i) => {
                return(
                    <div key={i}>{comment.username} : {comment.content}</div>
                )
            })}</div>
        )
    }
}
export default CommentList