document.addEventListener("DOMContentLoaded", function () {
  let likeCount = 0;
  let cartCount = 0;
  let likedItems = [];
  let cartItems = [];

  const likeCountElement = document.querySelector(
    ".right-navigation .like span"
  );
  const cartCountElement = document.querySelector(
    ".right-navigation .cart span"
  );

  // Function to update like count
  function updateLikeCount() {
    likeCount++;
    likeCountElement.textContent = likeCount;
  }

  // Function to update cart count
  function updateCartCount() {
    cartCount++;
    cartCountElement.textContent = cartCount;
  }

  // Add event listeners to all like buttons
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      updateLikeCount();
      this.style.color = "#ff6c57"; // Change color to indicate liked state
      const productName =
        this.closest(".product-box").querySelector("strong").textContent;
      if (!likedItems.includes(productName)) {
        likedItems.push(productName);
      }
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
    });
  });

  // Add event listeners to all add to cart buttons
  const cartButtons = document.querySelectorAll(".cart-btn");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      updateCartCount();
      const productName =
        this.closest(".product-box").querySelector("strong").textContent;
      if (!cartItems.includes(productName)) {
        cartItems.push(productName);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
  });

  // Navigation to liked items page
  const likeIcon = document.querySelector(".right-navigation .like");
  likeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "liked-items.html";
  });

  // Navigation to cart items page
  const cartIcon = document.querySelector(".right-navigation .cart");
  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "cart-items.html";
  });

  // Load saved items from localStorage
  const savedLikedItems = localStorage.getItem("likedItems");
  const savedCartItems = localStorage.getItem("cartItems");
  if (savedLikedItems) {
    likedItems = JSON.parse(savedLikedItems);
    likeCount = likedItems.length;
    likeCountElement.textContent = likeCount;
  }
  if (savedCartItems) {
    cartItems = JSON.parse(savedCartItems);
    cartCount = cartItems.length;
    cartCountElement.textContent = cartCount;
  }
});
