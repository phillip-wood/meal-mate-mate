import React from 'react'
import { connect } from 'react-redux'
import { fetchMeals, activePage } from '../actions'
import Comment from './Comment'

// imports the action


export class ShowMeal extends React.Component {

    goToNewPage(page){
        this.props.dispatch(activePage(page))
      }
    

  render () {
    const meal = this.props.meals.find(oneMeal => oneMeal.id == this.props.activeMeal)

    
    return (
      <>
        <div className='showMeal'>
            <img className='showMealImg' src={meal.imgURL}></img>
            <h2 className="showMealName">{meal.mealName}</h2>
            <h3>Ingredients</h3>
            <p className="showMealIngred">{meal.ingredients}</p>
            <h3>Description</h3>
            <p className="showMealDescrip">{meal.description}</p>
            <h3>Author</h3>
            <p className="showMealAuthor">{meal.author}</p>
        </div>
        <button onClick={()=> this.goToNewPage('home')}>home</button>

        <Comment />
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    meals:globalState.meals,
    activeMeal: globalState.activeMeal
  }
}

export default connect(mapStateToProps)(ShowMeal)