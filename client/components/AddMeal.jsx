import React from 'react'
import { connect } from 'react-redux'
import { activePage } from '../actions'
import { postMeal } from '../apis/addMeal'


export class AddMeal extends React.Component {

  state = {
    mealName: '',
    author: '',
    imgURL: '',
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

    this.props.dispatch(activePage('home'))

    this.setState({
      mealName: '',
      author: '',
      imgURL: '',
      ingredients: '',
      description: '',
   })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Meal Name:</p>
          <input type="text" onChange={this.handleChange} value={this.state.mealName} name='mealName'/>
          <p>Author:</p>
          <input type="text" onChange={this.handleChange} value={this.state.Author} name='author'/>
          <p>Image URL:</p>
          <input type="text" onChange={this.handleChange} value={this.state.imgURL} name='imgURL'/>
          <p>Ingredients:</p>
          <input type="text" onChange={this.handleChange} value={this.state.ingredients} name='ingredients'/>
          <p>Description:</p>
          <input type="text" onChange={this.handleChange} value={this.state.description} name='description'/>
          <br/><br />
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