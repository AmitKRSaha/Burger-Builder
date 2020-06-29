import React from 'react';

import Navigationitem from './navigationitem/Navigationitem';
import classes from './Navigationitems.module.css';

const Navigationitems = (props) => (
    <ul className={classes.Navigationitems}>
        <Navigationitem link="/" exact >Burger Builder</Navigationitem>
        <Navigationitem link="/orders">Orders</Navigationitem>
    </ul>

);


export default Navigationitems;