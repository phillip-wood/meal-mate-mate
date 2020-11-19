import React from 'react'
import { connect } from 'react-redux'


export class AddMeal extends React.Component {

  state = {
    name: '',
    author: '',
    image: '',
    ingredients: '',
    description: '',

  }

  handleChange = event => {
  
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //take what is in local state, dispatch an action which is in api, to hit the post route
    this.props.dispatch(postMeal(this.state))
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Name:</p>
          <input type="text" onChange={this.handleChange} name='name'/>
          <p>Author:</p>
          <input type="text" onChange={this.handleChange} name='author'/>
          <p>Image:</p>
          <input type="text" onChange={this.handleChange} name='image'/>
          <p>Ingredients:</p>
          <input type="text" onChange={this.handleChange} name='ingredients'/>
          <p>Description:</p>
          <input type="text" onChange={this.handleChange} name='description'/>
          <br />
          <input type="submit" value='Send' />
        </form>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    addMeal: globalState.addMeal,
  }
}

export default connect(mapStateToProps)(AddMeal)