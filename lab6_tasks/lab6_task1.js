const products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
];

function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find(item => item.id === productId);

    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Product with ID ${productId} not found.`);
    }
}

const productId = parseInt(process.argv[2], 10);
if (isNaN(productId)) {
    console.error('Error: Invalid ID');
    process.exit(1);
}

getProductDetails(parseInt(productId, 10), 
    (product) => {
        console.log('Product found:', product);
    },
    (errorMessage) => {
        console.error('Error:', errorMessage);
    }
);
