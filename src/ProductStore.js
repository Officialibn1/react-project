
const productsArray = [
    {id: 1, title: 'Coffee', price: 4.99},
    {id: 2, title: 'Lipton', price: 5.99},
    {id: 3, title: 'Cocoa', price: 4.89},
    {id: 4, title: 'Honey', price: 6.79},
    {id: 5, title: 'Sugar', price: 5.99},
    {id: 6, title: 'Predator', price: 7.59},
]

function getProductData(id) {
    // Main job of this function is to loop throught the Products Array and find the object with the id that matched the id passed.
    let product = productsArray.find(item => item.id === id);

    if (product === undefined) {
        console.log('Cant find the Product with the ID of: ' + id)
        return undefined;
    }

    return product;
}

export {productsArray, getProductData};