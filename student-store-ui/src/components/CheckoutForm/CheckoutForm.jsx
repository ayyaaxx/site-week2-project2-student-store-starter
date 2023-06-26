import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  products,
  receipt,
}) => {
  const [checkoutFormError, setCheckoutFormError] = useState(null);
  const [checkoutFormSuccess, setCheckoutFormSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleOnSubmitCheckoutForm();
      // Clear shopping cart and reset form state on successful submission
      shoppingCart.length = 0;
      handleOnCheckoutFormChange({ email: "", name: "" });
      setCheckoutFormError(null);
      setCheckoutFormSuccess(true);
    } catch (error) {
      console.error("Error submitting checkout form:", error);
      setCheckoutFormError(
        "An error occurred while submitting the form. Please try again."
      );
      setCheckoutFormSuccess(false);
    }
  };

  return (
    <div className={`checkout-form ${isOpen ? "open" : "closed"}`}>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <input
          type="email"
          name="email"
          placeholder="student@codepath.org"
          className="checkout-form-input"
          value={checkoutForm?.email}
          onChange={handleOnCheckoutFormChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="checkout-form-input"
          value={checkoutForm?.name}
          onChange={handleOnCheckoutFormChange}
        />

        {/* Checkout button */}
        <button type="submit" className="checkout-button">
          Checkout
        </button>

        

        {receipt && <div className="checkout-form-receipt">{receipt}</div>}

        {/* Error message */}
        {checkoutFormError && <p className="error">{checkoutFormError}</p>}

        {/* Success message */}
        {checkoutFormSuccess && <p className="success">Success!</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
