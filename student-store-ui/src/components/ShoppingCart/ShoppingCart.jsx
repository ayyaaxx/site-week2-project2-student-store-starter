// import React from 'react';
// import "./ShoppingCart.css"

// const ShoppingCart = ({ isOpen, products, shoppingCart, }) => {


//   // console.log("shoppingcart are: ", shoppingCart)
//   let subtotal = 0;
//   const calculateSubtotal = () => {
//     {shoppingCart.map((product) => {
//       subtotal += product.price * product.quantity;
//       console.log(product.quantity)
//       console.log(product.price)
//     })}
//     return subtotal.toFixed(2);
//     }
 


//   const calculateTotalPrice = () => {
//     const subtotal = parseFloat(calculateSubtotal());
//     console.log(`SUBTOTAL: ${subtotal}`)
//     console.log(subtotal)
//     const taxRate = 0.0875; 
//     const taxes = subtotal * taxRate;
//     const totalPrice = (subtotal + taxes);
//     return totalPrice.toFixed(2);
//   };
//   console.log('HELLO HELLO HELOO', shoppingCart)

//   return (
//     <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
 
//       {shoppingCart.length > 0 ? (
        
//         <div>
 

//           {shoppingCart.map((product) => {
//             if (product) {
//               return (
//                 <div key={product.name} className="cart-item">
//                   <p className="cart-product-name">{product.name}</p>
//                   <p className="cart-product-quantity">{`Quantity: ${product.quantity}`}</p>
//                 </div>
//               );
//             }
//             return null;
//           })}
//           <p className="subtotal">{`Subtotal: $${calculateSubtotal()}`}</p>
//           <p className="total-price">{`Total Price: $${calculateTotalPrice()}`}</p>
//         </div>
//       ) : (
//         <p className="notification">No items added to cart yet. Start shopping now!</p>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;


import React from 'react';
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of shoppingCart) {
      subtotal += item.price * item.count;
    }
    return subtotal.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxes = subtotal * taxRate;
    const totalPrice = subtotal + taxes;
    return totalPrice.toFixed(2);
  };

  const calculateTaxes = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxes = subtotal * taxRate;
    return taxes.toFixed(2);
  };

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
      {shoppingCart?.length > 0 ? (
        <div>
          {shoppingCart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="cart-product-name">{item.name}</p>
              <p className="cart-product-quantity">{`Quantity: ${item.count}`}</p>
            </div>
          ))}
          <p className="subtotal">{`Subtotal: $${calculateSubtotal()}`}</p>
          <p className="taxes">{`Taxes: $${calculateTaxes()}`}</p>
          <p className="total-price">{`Total Price: $${calculateTotalPrice()}`}</p>
        </div>
      ) : (
        <p className="notification">No items added to cart yet. Start shopping now!</p>
      )}
    </div>
  );
}