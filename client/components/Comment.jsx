import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../apis/comments'

export class Comment extends React.Component {
    
   componentDidMount() {
      this.props.dispatch(fetchComments(2))
   }

    render () {
      return (
        <>
          <h3>Comments</h3>
          {this.props.comments.map(comment => {
             return(
                <p>{comment.comment}</p>
             )
          })}
          <input type="text" placeholder='Enter new comment here'/>
          <button>Submit comment</button>
  
        </>
      )
    }
  }
  
  function mapStateToProps (globalState) {
    return {
      comments: globalState.mealComments
    }
  }
  
  export default connect(mapStateToProps)(Comment)