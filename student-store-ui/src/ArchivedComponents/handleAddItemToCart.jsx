import React from 'react'

const handleAddItemToCart = (setShoppingCart, ShoppingCart, product, quantity, setQuantity) => {
    

    let checkingproduct = ShoppingCart.filter((Cartproduct, index) => Cartproduct.name == product.name )
    let ProductIndex 
    let ShoppingCartCopy
    const productName = product.name
    const price = product.price
   const productquantity = quantity +1
   const productCost = productquantity * price
   const productObj = {
    'name' : productName,
    'price' : price,
    'quantity' : productquantity,
    'cost' : productCost
   }
   console.log('shoppingcart', ShoppingCart)
   console.log('checking prduct', checkingproduct)
   if (checkingproduct.length !== 0  ){
    ShoppingCart.filter((product, index) => product.name == productName? ProductIndex = index: null )
    ShoppingCartCopy = ShoppingCart.slice()
    console.log('ShoppingCartCopy is', ShoppingCartCopy)
    let CopyOfProduct = ShoppingCartCopy[ProductIndex]
    console.log(CopyOfProduct)
    CopyOfProduct.cost += price
    CopyOfProduct.quantity += 1
    console.log(ShoppingCartCopy)
    setShoppingCart(ShoppingCartCopy)
   
   
   }else{
    console.log(productObj)
   ShoppingCartCopy  = ShoppingCart.slice()
   console.log('shopping cart cartCopy', ShoppingCartCopy)
   ShoppingCartCopy.push(productObj)
   setShoppingCart(ShoppingCartCopy) 

   }
   setQuantity(quantity +1 )



   


  return (
    <div>
      
    </div>
  )
}

export default handleAddItemToCart
