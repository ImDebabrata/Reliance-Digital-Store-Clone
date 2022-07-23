let quantity = 1;
cartFunction();
function cartFunction() {
  let getCartData = JSON.parse(localStorage.getItem("cart_data"));
  if (getCartData === null) {
    let body = document.querySelector(".cont");
    body.innerHTML = "";
    let heading = document.createElement("h2");
    heading.setAttribute("id", "empty_cart");
    heading.innerText = "The Cart is empty";
    body.append(heading);
  } else {
    document.getElementById("quantity").innerText = quantity;
    document.querySelector(".img_cart").src = getCartData.img_link;
    document.getElementById("price_item").innerText = quantity;
    document.getElementById("product_name").innerText = getCartData.name;
    document.getElementById("price_product").innerText = getCartData.price;
    document.getElementById("price_span").innerText =
      getCartData.price * quantity;
    document.getElementById("pay_amount").innerText =
      getCartData.price * quantity;
  }
}
//function for quantity
document.getElementById("plus").addEventListener("click", function () {
  quantity++;
  cartFunction();
});
document.getElementById("minus").addEventListener("click", function () {
  quantity--;
  cartFunction();
});
//remove funtion
document
  .getElementById("remove_product")
  .addEventListener("click", function () {
    localStorage.clear();
    cartFunction();
  });
