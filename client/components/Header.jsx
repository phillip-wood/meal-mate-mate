import React from 'react'
import { connect } from 'react-redux'
import activePage from '../actions'


class Header extends React.Component {
  state={
    
  }


  goToNewPage(page){
    console.log(typeof(page))
    this.props.dispatch(activePage(page))
  }

  render () {
    return (
      <>
      <nav>
        <h1>Meal Mates, Mate</h1>
        <ul>
          <li><a onClick={()=> this.goToNewPage('home')}>Home</a></li>
          <li><a onClick={()=> this.goToNewPage('addMeal')}>Add Meal</a></li>
        </ul>
        <hr/>
      </nav>
      </>
    )
  }
}


function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
  }
}

export default connect(mapStateToProps)(Header)