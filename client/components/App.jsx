import React from 'react'
import { connect } from 'react-redux'
// import {Switch, HashRouter} from 'react-dom'
import Home from './Home'
 import AddMeal from './AddMeal'

import ShowMeal from './ShowMeal'
import Header from './Header'

// import { fetchFruits } from '../actions'

export class App extends React.Component {
  state = {
 
  }

  componentDidMount () {
    // this.props.dispatch(fetchFruits())
  }

  renderPage = (page) => {
    switch(page){
      case 'home':
        return <Home />
      case 'addMeal':
        return  <AddMeal />
      case 'showMeal':
        return  <ShowMeal />
      default:
        return <Home />
    }
  }

  render () {
    return (
      <>
     
        {this.renderPage(this.props.activePage)}
      
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage
  }
}

export default connect(mapStateToProps)(App)
