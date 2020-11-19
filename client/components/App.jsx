import React from 'react'
import { connect } from 'react-redux'
import home from './home'
import addMeal from './addMeal'
import showMeal from './showMeal'

// import { fetchFruits } from '../actions'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    // this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <>
        <home />
        <addMeal />
        <showMeal />
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    // fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
