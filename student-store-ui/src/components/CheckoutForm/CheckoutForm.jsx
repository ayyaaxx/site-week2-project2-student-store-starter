import React from 'react';
import "./CheckoutForm.css"


const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleOnSubmitCheckoutForm();
      // Clear shopping cart and reset form state on successful submission
      shoppingCart.length = 0;
      handleOnCheckoutFormChange({ email: '', name: '' });
    } catch (error) {
      console.error('Error submitting checkout form:', error);
    }
  };
  
  return (
    <div className={`checkout-form ${isOpen ? 'open' : 'closed'}`}>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="checkout-button">
          Checkout
        </button>
      </form>
      {checkoutForm?.error && <p className="error">{checkoutForm.error}</p>}
      {checkoutForm?.success && <p className="success">Success!</p>}
    </div>
  );
};

export default CheckoutForm;
