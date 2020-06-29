import React from 'react';

import Burger from '../../burger/Burger';
import Button from '../../ui/button/Button';

import classes from './CheckoutSummary.module.css';
    
    
const CheckoutSummary = (props) => {
    
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it is tasty...</h1>
            <div style={{width:'100%', margin:'auto' }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>

      </div>  
    );
}; 
    
export default CheckoutSummary;