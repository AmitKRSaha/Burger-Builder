import React from 'react';

import Navigationitem from './navigationitem/Navigationitem';
import classes from './Navigationitems.module.css';
    
const Navigationitems = (props) => (
    <ul className={classes.Navigationitems}>
        <Navigationitem link="/" active>Burger Builder</Navigationitem>
        <Navigationitem link="/">Checkout</Navigationitem>

    </ul>
    
);
    
    
export default Navigationitems;