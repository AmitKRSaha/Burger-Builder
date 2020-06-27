import React from 'react'

import classes from './Burger.module.css';
import Burgeringredients from './burgeringredients/Burgeringredients';

const burger = (props) => {
    let transingredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <Burgeringredients key={igkey + i} type={igkey} />;
            });
        }).reduce((arr, el) => { return arr.concat(el) },[]);
    if (transingredients.length === 0) { 
        transingredients = <p>Please start adding</p>
    }
    return (
        <div className={classes.Burger}>
            <Burgeringredients type='bread-top' />
                {transingredients}
            <Burgeringredients type='bread-bottom' />
        </div>
    )
}

export default burger;
