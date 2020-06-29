import React, { Component } from 'react';
import axios from '../../../axios-order';

import Button from '../../../components/ui/button/Button';
import classes from './ContactData.module.css';
import Spinner from '../../../components/ui/spinner/Spinner';
    
    
class ContactData extends Component{
    
    state = {
        name: '',
        email: '',
        address: {},
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'AMIT',
                address: {
                    street: 'Vic road',
                    zip: '1234',
                    country: 'UK'
                },
                email: 'a@gmail.com'
            },
            deliverymethod: 'FAST'
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false})
            });

    }
    
    render(){
        let form = (<form>
            <input className={classes.Input} type='text' name='name' placeholder='your name' />
            <input className={classes.Input} type='text' name='email' placeholder='your email' />
            <input className={classes.Input} type='text' name='address' placeholder='your address' />
            <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your data</h4>
                {form}
            </div>
            
        );
        
    }
    
};
    
    
export default ContactData;