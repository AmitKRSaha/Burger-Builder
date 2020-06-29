import React from 'react';
import classes from './Order.module.css';
    
    
const Order = (props) => { 

    let transingredients = [];

    for (let ingredient in props.ingredients) {
        transingredients.push({ name: ingredient, amount : props.ingredients[ingredient]})
    }

    const ingredientOutput = transingredients.map(i => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding:'5px'
            
            }}
            key={i.name}>{i.name}:  {i.amount}</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>

    );
}

    
    
export default Order;