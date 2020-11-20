import React from 'react'
import { connect } from 'react-redux'
import { fetchMeals, activeMeal, activePage } from '../actions'









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
      <div className='flex'> 
      {this.props.meals.map( meal => {
        return (
          
          <div key={meal.id} >
              <a onClick={()=> this.multiClick(meal.id, 'showMeal')}>
              <h1>{meal.mealName}</h1>
              <img src={meal.imgURL} alt="meal" className='foodPic'/>
            </a>
          </div>

        )
      })}
      </div>
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