import React from 'react'
import { connect } from 'react-redux'
import { fetchMeals, activeMeal, activePage } from '../actions'
import Header from './Header'









class Home extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchMeals())
  }

  // componentDidUpdate (prevProps) {
  //   if (prevProps.id !== this.props.id){
  //     this.props.dispatch(featchMeals())
  //   }
  // } 

  goToMealPage(id) {
    this.props.dispatch(activeMeal(id))
  }

  multiClick(id,page){
    this.goToMealPage(id)
    this.goToNewPage(page)
  }
  goToNewPage(page){
    this.props.dispatch(activePage(page))
  }

  render() {
    return (
      <>
 
      <button onClick={()=> this.goToNewPage('addMeal')}>Add your own meal</button>

      {this.props.meals.map( meal => {
        return (
          <div className="meal-block" key={meal.id}>
              <a onClick={()=> this.multiClick(meal.id, 'showMeal')}>
              <h1>{meal.mealName}</h1>
              <img src={meal.imgURL} alt="meal"/>
            </a>
          </div>

        )
      })}
      
      </>
    )
  }

}











function mapStateToProps (globalState) {
    return {
      activePage: globalState.activePage,
      meals: globalState.meals
    }
  }
  
  export default connect(mapStateToProps)(Home)