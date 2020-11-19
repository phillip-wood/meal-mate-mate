import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../apis/comments'

export class Comment extends React.Component {

   state = {
      input: ''
   }
    
   componentDidMount() {
      this.props.dispatch(fetchComments(2))
   }

   handleChange = (event) => {
      this.setState({
         input: event.target.value
      })
   }

   submitComment = () => {
      //add comment to db
      this.props.dispatch(postComment(this.state.input))
      //add comment to current global state
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
          <input 
            type="text" 
            placeholder='Enter new comment here' 
            onChange={(event) => this.handleChange(event)}/>
          <button onClick={this.submitComment}>Submit comment</button>
  
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