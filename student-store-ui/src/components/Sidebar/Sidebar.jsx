// the sidebar component that has an open and close toggle button, and renders the shopping cart and checkout form
import "./Sidebar.css";
import React, { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  setIsOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  receipt,
}) {
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={handleOnToggle}>
        Close
      </button>
      <ShoppingCart
        isOpen={isOpen}
        products={products}
        className="shopping-cart"
        shoppingCart={shoppingCart}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
      />
      {isOpen && (
        <>
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            products={products}
            receipt={receipt}
            className="checkout-form"
          />

          {/* <p>
            Checkout Info fact_check A confirmation email will be sent to you so
            that you can confirm this order. Once you have confirmed the order,
            it will be delivered to your dorm room.
          </p> */}
        </>
      )}
      {!isOpen && (
        <button className="toggle-button" onClick={handleOnToggle}>
          Open
        </button>
      )}
    </section>
  );
}
