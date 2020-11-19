import React from 'react'
import { connect } from 'react-redux'

function Home (){
    return (
        <h1>home</h1>
    )
}


function mapStateToProps (globalState) {
    return {
      activePage: globalState.activePage
    }
  }
  
  export default connect(mapStateToProps)(Home)