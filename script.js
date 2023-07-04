let cartCount = 0;
let totalPrice = 0;

const addToCart = (productId) => {
  const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
  if (quantity > 0) {
    cartCount += quantity;
    totalPrice += quantity * (productId === 1 ? 500 : productId === 2 ? 130 : productId === 3 ? 300 : 0);
    updateCartCount();
    updateTotalPrice();
  }
};

const removeFromCart = (productId) => {
  const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
  if (quantity > 0 && quantity <= cartCount) {
    cartCount -= quantity;
    totalPrice -= quantity * (productId === 1 ? 500 : productId === 2 ? 130 : productId === 3 ? 300 : 0);
    updateCartCount();
    updateTotalPrice();
  }
};

const updateCartCount = () => {
  document.getElementById('cart-count').innerText = cartCount.toString();
};

const updateTotalPrice = () => {
  document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
};
