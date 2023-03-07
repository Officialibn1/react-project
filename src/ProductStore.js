// Coffee: price_1Mj6DDBF5mBg7x1O67Hxrq6G
// Lipton: price_1Mj6E7BF5mBg7x1OEYhVIUGs
// Cocoa: price_1Mj6EoBF5mBg7x1Oy1sEJqmZ
// Honey: price_1Mj6FNBF5mBg7x1OC3ZAdY65
// Sugar: price_1Mj6FrBF5mBg7x1O97vHsyZ9
// Predator: price_1Mj6GPBF5mBg7x1OzyUzNgAL


const productsArray = [
    {id: 'price_1Mj6DDBF5mBg7x1O67Hxrq6G', title: 'Coffee', price: 4.99},
    {id: 'price_1Mj6E7BF5mBg7x1OEYhVIUGs', title: 'Lipton', price: 5.99},
    {id: 'price_1Mj6EoBF5mBg7x1Oy1sEJqmZ', title: 'Cocoa', price: 4.89},
    {id: 'price_1Mj6FNBF5mBg7x1OC3ZAdY65', title: 'Honey', price: 6.79},
    {id: 'price_1Mj6FrBF5mBg7x1O97vHsyZ9', title: 'Sugar', price: 5.99},
    {id: 'price_1Mj6GPBF5mBg7x1OzyUzNgAL', title: 'Predator', price: 7.59},
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