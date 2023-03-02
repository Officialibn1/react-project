import { createContext, useState } from "react";
import { getProductData } from "./ProductAPI";

//Provider gives the entire React App access to the Data's and Function's in your Context       

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

function CartProvider({children}) {
    
    const [cartProducts, setCartProducts] = useState([]);


    // Get Quantity of all Product Function
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    };


    // Add one to the quantity property of an existing product with the corresponding id
    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
           setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id 
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                )
           )
        }
    }




    //Delete item from from cart
    function deleteFromCart(id) {

            setCartProducts(
                cartProducts.filter(
                    product => (
                        product.id !== id
                    )
                )
            )
    }

    // Remove one from the quantity of an existing item with the corresponding id
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity == 1) {
                deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id 
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    // Get total cost of products in cart
    function getTotalCost() {
        let totalCost = 0;
        
        // eslint-disable-next-line array-callback-return
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })

        return totalCost;
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }




    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

// Down Here Are All The Code's For The Functions In The Create Context above