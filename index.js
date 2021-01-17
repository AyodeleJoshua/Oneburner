const product = document.querySelector(".product");
const headerGrid = document.querySelector(".header-grid");
console.log(headerGrid.style.height);
product.addEventListener('click', (e) => {
    if(headerGrid.style.height == "20vh") {
        product.innerHTML = `Product <i class="fas fa-chevron-down"></i>`;
        headerGrid.style.height = '0vh';
    } else {
        product.innerHTML = `Product <i class="fas fa-chevron-up"></i>`;
        headerGrid.style.height = "20vh";
    }
});