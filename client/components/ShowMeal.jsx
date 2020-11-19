import React from 'react'
import { connect } from 'react-redux'
import { featchMeals } from '../actions'
import Comment from './Comment'

// imports the action


export class ShowMeal extends React.Component {
  
      
     componentDidMount() {
        this.props.dispatch(featchMeals())
     }
     
     

  render () {

    
    return (
      <>
        <div className='showMeal'>
        <img className='showMealImg' src=''></img>
        <h2 className="showMealName">whitebait fritters</h2>
        <p className="showMealIngred">{this.props.meals[0][id]}</p>
        <p className="showMealDescrip">description</p>
        <p className="showMealAuthor">author</p>
        </div>

        {/* <Comment /> */}
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    meals:globalState.meals
  }
}

export default connect(mapStateToProps)(ShowMeal)