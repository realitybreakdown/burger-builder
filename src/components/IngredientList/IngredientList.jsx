import React, {Component} from 'react';
import Ingredients from '../Ingredients/Ingredients';

class IngredientList extends Component {
    render() {
        var mapped = this.props.ingredients.map(i => <Ingredients handleAdd={this.props.handleAdd} ingredient={i} />)
        return (
        <div className='component'>
            Ingredient List
            {mapped}
        </div>
        )
    }
}


export default IngredientList;