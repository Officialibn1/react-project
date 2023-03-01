const ProductArray = [
    {
        id: 1,
        title: 'Coffee',
        price: 4.99
    },
    {
        id: 2,
        title: 'T-Shirt',
        price: 9.89
    },
    {
        id: 3,
        title: 'Sunglasses',
        price: 7.99
    },
    {
        id: 4,
        title: 'Predator',
        price: 5.89
    },
    {
        id: 5,
        title: 'Garlic',
        price: 2.99
    },
    {
        id: 6,
        title: 'Fearless',
        price: 5.69
    },
]

function getProductData(id) {
    let ProductData = ProductArray.find(product => product.id === id);

    if (ProductData === undefined) {
        console.log('Cannot find the product you are looking for!');
        return undefined;
    }

    return ProductData;
}

export {ProductArray, getProductData};