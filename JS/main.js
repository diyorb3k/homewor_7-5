const btnOpen = document.getElementById("btn-open");
const btnClose = document.querySelector(".VIXOD ");
const btnClose1 = document.querySelector(".mali");
const btnClose2 = document.querySelector(".mali2");
const btnClose3 = document.querySelector(".mali3");
const Data = document.querySelector(".car1");

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

btnClose1.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

btnClose2.addEventListener("click", function (e) {
  modal.classList.remove("open");
});
btnClose3.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

modalContent.addEventListener("click", function (e) {
  e.stopPropagation();
});

modal.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

// aCARDION

// const product = [
//   {
//     title: "599,89₽",
//     brand: "Комбайн КЗС-1218 ",
//     price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
//     ishlab: "В корзину",

//     image: "./img/G'ILVINDI.png",
//     image1: "./rating.png",
//   },
//   {
//     title: "44,50₽",
//     brand: "Колбаса сырокопченая МЯСНАЯ ",
//     price: "ИСТОРИЯ Колбаса Тоскан...",
//     ishlab: "В корзину",

//     image: "./img/MALOKAA.png",
//     image1: "./4ta yulduz.svg",
//   },
//   {
//     title: "159,99₽",

//     brand: "Комбайн КЗС-1218 ",
//     price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
//     ishlab: "В корзину",

//     image: "./img/KOLBASA.png",
//     image1: "./rating.png",
//   },
//   {
//     title: "49,39₽P",
//     brand: "Комбайн КЗС-1218 ",
//     price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
//     ishlab: "В корзину",

//     image: "./img/CACICKA.png",
//     image1: "./rating.png",
//   },
// ];

// function displayProducts(data) {
//   const Frag = document.createDocumentFragment();
//   data.forEach((product) => {
//     const Car = document.createElement("div");
//     Car.innerHTML = `
//     <div class"car2">
//     <img src="${product.image}" />
//     <h3>${product.title}</h3>
//     <h4>${product.brand}</h4>
//     <p>${product.price}</p>
//     <img src="${product.image1}" />
//     <h1>${product.ishlab}</h1>

//     </div>
//  `;
//     Frag.appendChild(Car);
//   });
//   Data.appendChild(Frag);
// }
// displayProducts(product);
//////////////////////////

const product = [
  {
    title: "599,89₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./img/G'ILVINDI.png",
    image1: "./img/yulduz 2kta.svg",
  },
  {
    title: "44,50₽",
    brand: "Колбаса сырокопченая МЯСНАЯ ",
    price: "ИСТОРИЯ Колбаса Тоскан...",
    ishlab: "В корзину",

    image: "./img/MALOKAA.png",
    image1: "./img/yulduz 2kta.svg",
  },
  {
    title: "159,99₽",

    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./img/KOLBASA.png",
    image1: "./img/4ta yulduz.svg",
  },
  {
    title: "49,39₽P",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./img/CACICKA.png",
    image1: "./img/4ta yulduz.svg",
  },
];

// function displayProducts(data) {
//   let str = "";
//   data.forEach((product) => {
//     str += `
//     <div class="car1">
//     <img src="${product.image}" />
//     <h3>${product.title}</h3>
//     <h4>${product.brand}</h4>
//     <p>${product.price}</p>
//     <img src="${product.image1}" />
//     <h1>${product.ishlab}</h1>
//     </div>

//     `;
//   });
//   card.innerHTML = str;
// }
// displayProducts(product);

function displayProducts(data) {
  const Frag = document.createDocumentFragment();
  data.forEach((product) => {
    const Car = document.createElement("div");
    Car.className = "card_dom";
    Car.innerHTML = `
    <div class"car2">
    <img src="${product.image}" />
    <h3>${product.title}</h3>
    <h4>${product.brand}</h4>
    <p>${product.price}</p>
    <img src="${product.image1}" />
    <h1>${product.ishlab}</h1>

    </div>
 `;
    Frag.appendChild(Car);
  });
  Data.appendChild(Frag);
}
displayProducts(product);
