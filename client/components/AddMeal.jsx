import React from 'react'
import { connect } from 'react-redux'


export class App extends React.Component {






  render () {
    return (
      <>
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
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)