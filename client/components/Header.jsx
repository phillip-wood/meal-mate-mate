import React from 'react'
import { connect } from 'react-redux'



export class Header extends React.Component {

  render () {
    return (
      <>
      <nav>
        <h1>Meal Mates, Mate</h1>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Add Meal</a></li>
        </ul>
        <hr/>
      </nav>
      </>
    )
  }
}


















function mapStateToProps (globalState) {
  return {
  
  }
}

export default connect(mapStateToProps)(AddMeal)