let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId)
{
    if(productViews.has(productId))
    {

        productViews.set(productId, productViews.get(productId)+1);

    }
    else{
        productViews.set(productId, 1);
    }
}
console.log(productViews);

function addTocart(productId)
{
    if(!cartItems.has(productId))
    {
        cartItems.add(productId)
        return "Product added to cart";
    }
    return "Product already added in cart";

}
console.log(cartItems);


incrementProductViews(123); // Viewed first time
incrementProductViews(123); // Viewed second time


console.log(addToCart(123)); // Product added to cart
console.log(addToCart(123)); // Product already in cat

