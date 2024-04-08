function solve(currentStock, orderedProducts) {

    let listOfStoredProducts = getProductsWithQuantity(currentStock);
    getDelivery(orderedProducts, listOfStoredProducts);

    Object.keys(listOfStoredProducts).forEach(productKey => console.log(`${productKey} -> ${listOfStoredProducts[productKey]}`));

    function getProductsWithQuantity(input){
        let products = {};

        for(let i = 0; i < input.length; i+=2){
            products[input[i]] = parseInt(input[i+1]);
        }

        return products;
    }

    function getDelivery(deliveredProducts, storedProducts){
        for(let i = 0; i < deliveredProducts.length; i+=2){
            if(storedProducts[deliveredProducts[i]]){
                storedProducts[deliveredProducts[i]] += parseInt(deliveredProducts[i+1]);
            }else{
                storedProducts[deliveredProducts[i]] = parseInt(deliveredProducts[i+1]);
            }
        }
    }    
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], 
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]);



// You will receive two arrays. 
// The first array represents the current stock of the local store. 
// The second array will contain products that the store has ordered for delivery.

// The following information applies to both arrays:

// Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
// The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. 
// You should store them into an object, and print them in the following format: (product -> quantity)

// All of the arrays’ values will be strings