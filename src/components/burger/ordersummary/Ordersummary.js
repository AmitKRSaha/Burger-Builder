import React, { Component } from 'react';
import Aux from '../../../hoc/aux/Aux';
import Button from '../../ui/button/Button';


class Ordersummary extends Component {

    componentWillUpdate() {
        // console.log('Updated');
    }

    render() { 
        const ingredients = Object.keys(this.props.ingredients).map(igkey => {
            return <li key={igkey}><span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {this.props.ingredients[igkey]}</li>
        });
        return (
            <Aux>
                <h3>Your Order Summary</h3>
                <p>A delicious burger with below ingredients:</p>
                <ul>
                    {ingredients}
                </ul>
                <p>Total Price: <strong>${this.props.Price}</strong></p>
                <p>Please Go Ahead and Checkout</p>
                <Button btnType='Danger' clicked={this.props.cancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>

            </Aux>
        );
    }
}

// const Ordersummary = (props) => {
//     const ingredients = Object.keys(props.ingredients).map(igkey => {
//         return <li key={igkey}><span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}</li>
//     });
//     return (
//         <Aux>
//             <h3>Your Order Summary</h3>
//             <p>A delicious burger with below ingredients:</p>
//             <ul>
//                 {ingredients}
//             </ul>
//             <p>Total Price: <strong>${props.Price}</strong></p>
//             <p>Please Go Ahead and Checkout</p>
//             <Button btnType='Danger' clicked={props.cancelled}>CANCEL</Button>
//             <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>

//         </Aux>
//     );
// };
    

export default Ordersummary;