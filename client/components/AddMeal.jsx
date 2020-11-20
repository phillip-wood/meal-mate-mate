import React from 'react'
import { connect } from 'react-redux'
import { activePage } from '../actions'


export class AddMeal extends React.Component {
  goToNewPage(page){
    this.props.dispatch(activePage(page))
  }

  render () {
    return (
      <>
       <button onClick={()=> this.goToNewPage('home')}>home</button>
       <form>
         <p>Name:</p>
         <input type="text"/>
         <p>Author:</p>
         <input type="text"/>
         <p>Image:</p>
         <input type="text"/>
         <p>Ingredients:</p>
         <input type="text"/>
         <p>Description:</p>
         <input type="text"/>
         <br/>
         <input type="submit"/>
       </form>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
  
  }
}

export default connect(mapStateToProps)(AddMeal)