import React, {Component} from 'react';

import Toolbar from '../../components/navigation/toolbar/Toolbar';
import Aux from '../aux/Aux';
import Sidedrawar from '../../components/navigation/sidedrawar/Sidedrawar';
import classes from './Layout.module.css';


class Layout extends Component{

    state = {
        showSidedrawar: false
    }

    sideDrawarClosedHandler = () => {
        this.setState({ showSidedrawar: false });
    }

    sideDrawarToggle = () => {
        this.setState((prevState) => {
            return { showSidedrawar: !prevState.showSidedrawar };
        });
    }
    
    render() {
        return (<Aux>
                    <Toolbar drawarToggleClicked={this.sideDrawarToggle}/>
                    <Sidedrawar open={this.state.showSidedrawar} closed={this.sideDrawarClosedHandler}/>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
        )
    }
}


export default Layout;