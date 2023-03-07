import { createContext, useState } from "react";
import { getProductData } from "./ProductStore";

export const CartContext = createContext({
    item: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});


const CartProvider = ({children}) => {  
    const [cartProducts, setCartProducts] = useState([]);

    // Properties of the object in the cartProducts array will be [{ id: 1, quantity: 3 }]
    
    // Function to get the total quantity of the products of an object in the array of products
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    };

    // Function to add 1 to the quantity value of the product in the array 
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
        }else{
           setCartProducts(
                cartProducts.map((product) => product.id === id ?
                {...product, quantity: product.quantity + 1} :
                product
                )
           )
        }
    }


    // Function to delete the whole item from the product array
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts.filter(product => product.id !== id)
        )
    };

    // Function to remove 1 from the quantity property of an item in the product array
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        
        if (quantity === 1) {
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map((product) => product.id === id ?
                    {...product, quantity: product.quantity - 1} 
                    : product
                )
            )
        }
    }

    // Function to get the total cost of items in the cart
    function getTotalCost() {
        let totalCost = 0;
        // eslint-disable-next-line array-callback-return
        cartProducts.map(cartItem => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })

        return totalCost;
        
    }



    const contextValue = {
        item: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }



    return (
        <CartContext.Provider value={contextValue} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;