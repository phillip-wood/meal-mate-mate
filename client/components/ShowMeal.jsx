import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

// imports the action
// import { fetchMeals } from '../actions'



export class ShowMeal extends React.Component {
    

  render () {
    return (
      <>
        <div>
        {/* <img src="https://nt63xpepn03htbpb2sddvciv-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/img_3049-1080x720.jpg"></img> */}
        <h2>whitebait fritters</h2>
        <p>ingredients</p>
        <p>description</p>
        <p>author</p>
        </div>

        <Comment />
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
  
  }
}

export default connect(mapStateToProps)(ShowMeal)