import React, { Component } from "react";
import Aux from '../../hoc/aux/Aux';

import Modal from '../../components/ui/modal/Modal';
import Burger from '../../components/burger/Burger';
import Buildcontrols from '../../components/burger/buildcontrols/Buildcontrols';
import Ordersummary from '../../components/burger/ordersummary/Ordersummary';

const PRICES = {
    salad: 0.3,
    bacon: 0.8,
    cheese: 0.5,
    meat: 1.3
}

class BurgerBuilder extends Component { 

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
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
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        alert('You have made it!!!')
    }

    render() { 
        let disabledInfo = {};
        for (let ing in this.state.ingredients) { 
            disabledInfo[ing] = this.state.ingredients[ing] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} ModalClose={this.purchaseCancelHandler}>
                    <Ordersummary
                        ingredients={this.state.ingredients}
                        cancelled={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        Price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchase={this.state.purchaseable}
                    order= {this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;