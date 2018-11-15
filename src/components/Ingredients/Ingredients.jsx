import React from 'react';

class Ingredients extends React.Component {
    render() {
        return (
            <div className='component' style={{backgroundColor: this.props.ingredient.color}}>
                <p>{this.props.ingredient.name}</p>
                <button onClick={this.props.addIngredient}>+</button>
            </div>
        )
    }
} 


export default Ingredients;