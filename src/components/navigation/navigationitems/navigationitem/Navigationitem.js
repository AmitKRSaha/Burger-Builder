import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigationitem.module.css';

const Navigationitem = ( props ) => (
    <li className={classes.Navigationitem}>
        <NavLink
            to={props.link}
            exact ={props.exact}
            className={classes.active}
        >
            {props.children}
        </NavLink>
    </li>

);


export default Navigationitem;