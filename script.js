
const container = document.querySelector(".js-product-container");
let html = "";

products.forEach(product => {

      html += `
            <div class="product-card">

                <span class="discount">
                    -${product.discount}%
                </span>

                <span class="wishlist">
                    ❤
                </span>

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <div class="rating">
                    ${product.rating}
                </div>

                <div class="price">

                    <span class="new-price">
                        ₹${product.price}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice}
                    </span>

                </div>

                <button class="add-to-cart" data-product-id="${product.id}">Add To Cart</button>

            </div>
        `;

});

container.innerHTML = html;

document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function () {

            const productId = button.dataset.productId;
            const product = products.find(p => p.id == productId);
            cart.push(product);
           
      })
});