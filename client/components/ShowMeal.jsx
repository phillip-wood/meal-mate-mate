import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

// imports the action


export class ShowMeal extends React.Component {
    

  render () {
    return (
      <>
        <div className='showMeal'>
        <img className='showMealImg' src="https://nt63xpepn03htbpb2sddvciv-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/img_3049-1080x720.jpg"></img>
        <h2 className="showMealName">whitebait fritters</h2>
        <p className="showMealIngred">ingredients</p>
        <p className="showMealDescrip">description</p>
        <p className="showMealAuthor">author</p>
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