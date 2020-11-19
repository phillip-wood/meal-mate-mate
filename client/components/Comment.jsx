import React from 'react'
import { connect } from 'react-redux'

export class Comment extends React.Component {
    

    render () {
      return (
        <>
         
          <p>description</p>
          
  
        </>
      )
    }
  }
  
  function mapStateToProps (globalState) {
    return {
    
    }
  }
  
  export default connect(mapStateToProps)(Comment)