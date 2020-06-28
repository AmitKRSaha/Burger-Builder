import React, {Component} from 'react';

import classes from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';
import Aux from '../../../hoc/aux/Aux';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // componentWillUpdate() {
    //     // console.log('Updated Modal');
    // }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.ModalClose} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
                        opacity: this.props.show ? '1' : '0'

                    }}
                >
                    {this.props.children}
                </div>

            </Aux>
        )

    }
}

// const Modal = (props) => (
//     <Aux>
//         <Backdrop show={props.show} clicked={props.ModalClose}/>
//         <div
//             className={classes.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
//                 opacity: props.show ? '1' : '0'

//             }}
//         >
//             {props.children}
//         </div>

//     </Aux>
    
// )

export default Modal;