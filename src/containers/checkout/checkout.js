import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/orders/checkoutsummary/CheckoutSummary';
import ContactData from './contactdata/ContactData';
    
    
class Checkout extends Component{
    
    state = {
        ingredients: null,
        totalPrice : ''
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let params of query.entries()) {
            if (params[0] === 'price') {
                price = params[1];
            } else {
                ingredients[params[0]] = +params[1];
            }
        }

        this.setState({ ingredients: ingredients, totalPrice : price });
    }

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/> } />
            </div>
        );
    }
};
    
    
export default Checkout;