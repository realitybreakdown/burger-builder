import React, { Component } from 'react';
import './App.css';
import BurgerPane from './components/BurgerPane/BurgerPane';
import IngredientList from './components/IngredientList/IngredientList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beyond Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chickn Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    }
    this.addIngredient = this.addIngredient.bind(this)
    this.removeIngredient = this.removeIngredient.bind(this)
  }

  addIngredient() {
    this.setState((state) => {
       var ingindex = state.ingredients.indexOf(state.ingredients)
      return {stack: state.stack.push(state.ingredients[{ingindex}])}
    })
  }

  removeIngredient() {
    this.setState((state) => {
      return {stack: state.stack.pop()}
    })
  }

  render() {
    return (
      <div className="App burger">
        <IngredientList addIngredient={this.addIngredient} ingredients={this.state.ingredients} />
        <BurgerPane stack={this.state.stack} ingredients={this.state.ingredients}/>
      </div>
    );
  }
}

export default App;
