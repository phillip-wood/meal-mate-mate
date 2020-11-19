import React from 'react'
import { connect } from 'react-redux'
import { featchMeals } from '../actions'








function Home (props){
    return (
      <>

      <button onClick={()=> props.dispatch(featchMeals())}></button>


      <div className="meal-block">
        <a href="">
          <h1>Meal Name</h1>
          <img src="url" alt=""/>
          <div>Descript</div>
        </a>
      </div>
      </>
    )
}











function mapStateToProps (globalState) {
    return {
      activePage: globalState.activePage
    }
  }
  
  export default connect(mapStateToProps)(Home)