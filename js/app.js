const avatar = document.querySelector(".avatar");
const thumbnail = [...document.querySelectorAll(".thumbnail-img")];
const mainImg = document.querySelector(".main-img");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const counter = document.querySelector(".counter");
const basket = document.querySelector(".basket");
const basketCard = document.querySelector(".basket-card");
const cardBody = document.querySelector(".card-body");
const btnAddToCard = document.querySelector(".btn-add-to-card");
const basketContainer = document.querySelector(".basket-container");
const carousel = document.querySelector(".carousel");
const basketText = document.querySelector(".basket-text");

let number = 0;

const Buy = () => {
  counter.textContent = `${number}`;
  basket.textContent = `${number}`;
  basket.style.display = "block";
};

basketContainer.addEventListener("click", function () {
  avatar.classList.toggle("border");
  basketCard.classList.toggle("visibility");
});

avatar.addEventListener("click", function () {
  avatar.classList.toggle("border");
  basketCard.classList.toggle("visibility");
});

plus.addEventListener("click", function () {
  number++;
  Buy();
});

minus.addEventListener("click", function () {
  if (number > 0) {
    number--;
  }
  Buy();
});

thumbnail.forEach((e) => {
  e.addEventListener("mouseover", function () {
    const index = e.id;
    e.classList.add("opacity");
    setTimeout(function () {
      mainImg.src = `images/image-product-${index}.jpg`;
    }, 300);
  });
  e.addEventListener("mouseout", function () {
    e.classList.remove("opacity");
  });
});

mainImg.addEventListener("click", function () {
  carousel.classList.toggle("gallery");
});

/*carousel.addEventListener("mouseout", function () {
  carousel.classList.remove("gallery");
});*/

btnAddToCard.addEventListener("click", function () {
  const item = document.createElement("div");
  cardBody.innerHTML = "";
  item.innerHTML = `<div>
  <div class="d-flex align-items-center">
    <img class="basket-img" src="/images/image-product-1-thumbnail.jpg">
    <div class="m-3">
      <p class="m-0">Fall Limited Edition Sneakers</p>
      <p class="m-0">$125.00 x ${number} $${125 * number}</p>
    </div>
    <img src="/images/icon-delete.svg">
  </div>
  <button class="btn btn-add-to-card py-2">Checkout</button>
</div>`;
  cardBody.appendChild(item);
});
