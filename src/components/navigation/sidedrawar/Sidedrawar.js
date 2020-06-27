import React from 'react';

import Logo from '../../logo/Logo';
import Navigationitems from '../navigationitems/Navigationitems';
import classes from './Sidedrawar.module.css'
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../hoc/aux/Aux';
    
const Sidedrwar = (props) => {
    let attachedClass = [classes.Sidedrawar, classes.Close];

    if (props.open) {
        attachedClass = [classes.Sidedrawar, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Aux>
        
    )
};
    
    
export default Sidedrwar;