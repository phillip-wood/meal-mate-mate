import React from 'react'
import { connect } from 'react-redux'
import { fetchComments, postComment } from '../apis/comments'
import { updateComment } from '../actions'

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
      this.props.dispatch(postComment(2, this.state.input))

      // create new state to pass to action
      let updatedState = this.props.comments.map(comment => ({...comment}))
      updatedState.push({id: 'new', comment: this.state.input})
      
      //add comment to current global state
      this.props.dispatch(updateComment(updatedState))

      //reset local state to clear input
      this.setState({
         input: ''
      })
   }

    render () {
      return (
        <>
          <h3>Comments</h3>
          {this.props.comments.map((comment, key) => {
             return(
                <p key={key}>{comment.comment}</p>
             )
          })}
          <input 
            type="text" 
            placeholder='Enter new comment here' 
            onChange={(event) => this.handleChange(event)}
            value={this.state.input}/>
          <button onClick={this.submitComment}>Submit comment</button>
  
        </>
      )
    }
  }
  
  function mapStateToProps (globalState) {
    return {
      comments: globalState.mealComments,
      // id: globalState.activeId
    }
  }
  
  export default connect(mapStateToProps)(Comment)