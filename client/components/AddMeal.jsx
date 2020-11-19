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
    this.setState({
      name: '',
      author: '',
      image: '',
      ingredients: '',
      description: '',
    })
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Name:</p>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <p>Author:</p>
          <input type="text" value={this.state.author} onChange={this.handleChange} />
          <p>Image:</p>
          <input type="text" value={this.state.image} onChange={this.handleChange} />
          <p>Ingredients:</p>
          <input type="text" value={this.state.ingredients} onChange={this.handleChange} />
          <p>Description:</p>
          <input type="text" value={this.state.description} onChange={this.handleChange} />
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