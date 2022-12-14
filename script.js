window.addEventListener("DOMContentLoaded", () => {
    function toggleMenu() {
        const menuBtn = document.querySelector(".toggle_menu"),
            nav = document.querySelector("header nav"),
            navLinks = document.querySelectorAll("header nav ul li a");
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            nav.classList.toggle("active");
            navLinks.forEach((a) => {
                a.addEventListener("click", () => {
                    menuBtn.classList.remove("active");
                    nav.classList.remove("active");
                });
            });
        });
    }
    toggleMenu();

    function cartShopping() {
        const yourCart = document.querySelector(".your_cart "),
            shopContent = document.querySelector(".your_cart .content"),
            products = document.querySelectorAll(".new_products .product"),
            cartBtn = document.querySelector(".shopping_cart .shopping"),
            btns = document.querySelectorAll(
                ".new_products .product .overlay button"
            ),
            prev = document.querySelector(".your_cart .title a");

        btns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const cloneProduct = products[index].cloneNode(true),
                    button = cloneProduct.querySelector(".overlay button");
                button.textContent = "Shop now";
                shopContent.append(cloneProduct);
                products[index].style.display = "none";
                console.log(cartBtn);
            });
            cartBtn.addEventListener("click", () => {
                yourCart.style.display = "block";
            });
            prev.addEventListener("click", () => {
                yourCart.style.display = "none";
            });
        });
    }
    cartShopping();
});