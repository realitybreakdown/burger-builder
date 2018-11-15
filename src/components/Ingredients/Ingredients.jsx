import React from 'react';

class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }  

    handleAdd(e) {
        this.props.handleAdd(this.props.ingredient);
    }

    render() {
        return (
            <div className='component' style={{backgroundColor: this.props.ingredient.color}}>
                <p>{this.props.ingredient.name}</p>
                <button onClick={this.handleAdd}>+</button>
            </div>
        )
    }
} 


export default Ingredients;