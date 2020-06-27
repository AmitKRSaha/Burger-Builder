import React from 'react';

import classes from './Drawartoggle.module.css';
    
    
const drawartoggle = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
);
    
    
export default drawartoggle;