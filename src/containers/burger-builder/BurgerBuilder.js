import React, { Component } from "react";
import Aux from '../../hoc/aux/Aux';

import Modal from '../../components/ui/modal/Modal';
import Burger from '../../components/burger/Burger';
import Buildcontrols from '../../components/burger/buildcontrols/Buildcontrols';
import Ordersummary from '../../components/burger/ordersummary/Ordersummary';
import Spinner from '../../components/ui/spinner/Spinner';
import witherrorhandled from '../../hoc/withErrorHandler/witherrorhandler';

import axios from '../../axios-order';

const PRICES = {
    salad: 0.3,
    bacon: 0.8,
    cheese: 0.5,
    meat: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://burger-builder-36b68.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ ingredients: res.data })
            })
            .catch(err => {
                this.setState({ error: true })
            });
    }

    updatePurchaseStatus(ingredients) {

        if (ingredients.bacon + ingredients.cheese + ingredients.meat + ingredients.salad > 0
            && this.state.purchaseable === false) {
            this.setState({ purchaseable: true });
        }
        if (ingredients.bacon + ingredients.cheese + ingredients.meat + ingredients.salad === 0
            && this.state.purchaseable === true) {
            this.setState({ purchaseable: false });
        }
    }

    addIngredient = (type) => {
        const updateIngredient = this.state.ingredients[type];
        const ingredientCount = updateIngredient + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = ingredientCount;
        const updatedPrice = this.state.totalPrice + PRICES[type];
        this.setState({ totalPrice: updatedPrice, ingredients: newIngredients });
        this.updatePurchaseStatus(newIngredients);
    }

    removeIngredient = (type) => {
        const updateIngredient = this.state.ingredients[type];
        if (updateIngredient <= 0) {
            return;
        }
        const ingredientCount = updateIngredient - 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = ingredientCount;
        const updatedPrice = this.state.totalPrice - PRICES[type];
        this.setState({ totalPrice: updatedPrice, ingredients: newIngredients });
        this.updatePurchaseStatus(newIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert('You have made it!!!')
        
        let queryParams = [];

        for (let index in this.state.ingredients) {
            queryParams.push(encodeURIComponent(index) + "=" + encodeURIComponent(this.state.ingredients[index]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        this.props.history.push({
            pathname: '/checkout',
            search:'?' + queryParams.join('&')
        });
    }

    render() {
        let disabledInfo = {};
        for (let ing in this.state.ingredients) {
            disabledInfo[ing] = this.state.ingredients[ing] <= 0
        }

        let ordersummary = null;
        let burger = this.state.error? <p>Server is down</p> : <Spinner />;

        if (this.state.ingredients) {
            
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <Buildcontrols
                        addIngredient={this.addIngredient}
                        removeIngredient={this.removeIngredient}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        purchase={this.state.purchaseable}
                        order={this.purchaseHandler}
                    />
                </Aux>
            );
            ordersummary = <Ordersummary
                ingredients={this.state.ingredients}
                cancelled={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                Price={this.state.totalPrice}
            />;
        }

        if (this.state.loading) {
            ordersummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} ModalClose={this.purchaseCancelHandler}>
                    {ordersummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default witherrorhandled(BurgerBuilder, axios);