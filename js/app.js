const avatar = document.querySelector(".avatar");
const thumbnail = [...document.querySelectorAll(".thumbnail-img")];
const mainImg = document.querySelector(".main-img");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const counter = document.querySelector(".counter");
const basket = document.querySelector(".basket");
const basketCard = document.querySelector(".basket-card");
const basketBody = document.querySelector(".basket-card-body");
const btnAddToCard = document.querySelector(".btn-add-to-card");
const basketContainer = document.querySelector(".basket-container");
const carousel = document.querySelector(".wrapper");
const basketText = document.querySelector(".basket-text");
const item = document.querySelector(".item");
const iconClose = document.querySelector(".close");
const imgIndicators = [...document.querySelectorAll(".img-indicators")];
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");

let number = 0;

const Buy = () => {
  counter.textContent = `${number}`;
  basket.textContent = `${number}`;
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

imgIndicators.forEach((e) => {
  e.addEventListener("mouseover", function () {
    e.classList.add("opacity");
  });
  e.addEventListener("mouseout", function () {
    e.classList.remove("opacity");
  });
});

mainImg.addEventListener("click", function () {
  carousel.classList.toggle("gallery");
});

iconClose.addEventListener("click", function () {
  carousel.classList.toggle("gallery");
});

btnAddToCard.addEventListener("click", function () {
  basket.style.display = "block";
  basketText.classList.add("hide");
  item.classList.remove("hide");
  basketBody.innerHTML = `
  <div class="item">
          <div class="d-flex align-items-center">
            <img class="basket-img" src="/images/image-product-1-thumbnail.jpg">
            <div class="m-3">
            <p class="m-0">Fall Limited Edition Sneakers</p>
            <p class="m-0">$125.00 x ${number} $${125 * number}</p></div>
            <img class="icon-delete" src="/images/icon-delete.svg">
          </div>
          <button class="btn btn-checkout py-2">Checkout</button>
        </div>`;

  const iconDelete = document.querySelector(".icon-delete");

  iconDelete.addEventListener("click", function () {
    basket.textContent = "0";
    basketText.classList.remove("hide");
    basketBody.innerHTML = `<p class="card-text basket-text">Your cart is empty.</p>`;
  });
});

navbarToggler.addEventListener("click", function () {
  navbarNav.classList.toggle("gallery");
});
