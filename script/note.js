// _______________________________________________
// eleven arrow function
let elevenProduct = [
  {
    imgUrl: "",
    nameTitle: "",
    price: 0,
    maxprice: 0,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 0,
    maxprice: 5,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 0,
    maxprice: 0,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 9,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 0,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 0,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 0,
    maxprice: 9,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 9,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 0,
    maxprice: 9,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 9,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 9,
  },
  {
    imgUrl: "",
    nameTitle: "",
    price: 9,
    maxprice: 9,
  },
];
let elevenProSli = 0;
elevenProduct.forEach(function (el) {
  let image = document.createElement("img");
  image.src = el.imgUrl;
  let name = document.createElement("p");
  name.setAttribute("class", "name_product");
  name.innerText = el.nameTitle;
  let price = document.createElement("p");
  price.innerText = "Offer Price: ";
  let priceInr = document.createElement("span");
  priceInr.setAttribute("class", "price_tag");
  priceInr.innerText = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(el.price);
  price.append(priceInr);
  let maxPrice = document.createElement("p");
  maxPrice.innerText =
    "MRP: ₹" +
    new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(el.maxprice);
  let saving = document.createElement("p");
  let saveInr = el.maxprice - el.price;
  let savePrcnt = (saveInr / el.maxprice) * 100;
  saving.innerText =
    "You Save: " +
    Math.floor(savePrcnt) +
    "%" +
    "(₹" +
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
      saveInr
    ) +
    ")";
  let offer = document.createElement("p");
  offer.innerText = "offers available";
  let div = document.createElement("div");
  div.append(image, name, price, maxPrice, saving, offer);
  document.querySelectorAll(".slide-product")[9].append(div);
});
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[11].children;
//Left Arrow
slidingBTN[0].addEventLiselevener("click", function () {
  elevenProSli--;
  if (elevenProSli === -1) {
    elevenProSli = 3;
  }
  let pos = elevenProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[9];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventLiselevener("click", function () {
  elevenProSli++;
  if (elevenProSli === 4) {
    elevenProSli = 0;
  }
  let pos = elevenProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[9];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
