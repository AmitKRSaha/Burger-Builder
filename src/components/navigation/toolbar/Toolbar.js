import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import Navigationitems from '../navigationitems/Navigationitems';
import Drawartoggle from '../sidedrawar/drawartoggle/Drawartoggle';

const Toolbar = (props) => (

    <header className={classes.Toolbar}>
        <Drawartoggle clicked={props.drawarToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>

        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
)

export default Toolbar;