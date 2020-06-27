import React from 'react'

import Buildcontrol from './buildcontrol/Buildcontrol';
import classes from './Buildcontrols.module.css';

const Controls = [
    { Label: 'Meat', type: 'meat' },
    { Label: 'Salad', type: 'salad' },
    { Label: 'Cheese', type: 'cheese' },
    { Label: 'Bacon', type: 'bacon' }

];

const buildcontrols = (props) => (
    <div className={classes.Buildcontrols}>
        <p>Current Price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {Controls.map(ctrl => (
            <Buildcontrol
                key={ctrl.type}
                label={ctrl.Label}
                addIngredient={() => props.addIngredient(ctrl.type)}
                removeIngredient={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchase}
            onClick={props.order}
        >ORDER NOW</button>
    </div>
)

export default buildcontrols;
