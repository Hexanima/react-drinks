import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: [],
};

export function cartReducer(state, { payload, type }) {
    const { idDrink } = payload;

    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink);

    switch (type) {
        case actionTypes.ADD_TO_CART:
            // Saber si producto ya está
            if (drinkInCart) {
                let updatedCartItems = state.cartItems.map((drink) => {
                    if (drink.idDrink === idDrink) {
                        return { ...drink, quantity: drink.quantity + 1 };
                    }
                    return drink;
                });

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                // Negativo agregar el item con cantidad 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
                };
            }
            
        case actionTypes.REMOVE_ONE_FROM_CART:
            if (drinkInCart.quantity > 1) {
                let updatedCartItems = state.cartItems.map((drink) => {
                    if (drink.idDrink === idDrink) {
                        return { ...drink, quantity: drink.quantity - 1 };
                    }
                    return drink;
                });
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                let updatedCartItems = state.cartItems.filter(
                    (drink) => drink.idDrink !== idDrink
                );
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }

        case actionTypes.REMOVE_ALL_FROM_CART:
            if (drinkInCart) {
                let updatedCartItems = state.cartItems.filter(
                    (drink) => drink.idDrink !== idDrink
                );

                return { ...state, cartItems: updatedCartItems };
            }
            return state;
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
    }
}