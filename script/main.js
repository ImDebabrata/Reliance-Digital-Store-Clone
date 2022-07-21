//Array for image slider image link;
let sliderLink1 = [
  "https://www.reliancedigital.in/medias/Samsung-Galaxy-M52-Desktop-20.06.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gwYy85ODYxOTc2NDkwMDE0LmpwZ3w5N2EzMDE4MWQ4ZTI5MmE1NDRkNjRlODJkYWNhNjJkYzQ5YzBiMDdjMThhYjhkOWU2MTAyM2YzZGQxNWIyYzk0",
  "https://www.reliancedigital.in/medias/Lenovo-Laptops-Desktop-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hiMC85ODYyMjA3MDQ1NjYyLmpwZ3w1MmIyMzI0MmY3NzJkYjI2YTI5NTdkZDMwYmUyMmQxZDIyMGY0MWI5OWM2ZTJhNzIxMDgyZjUxY2YyZTdmNzA5",
  "https://www.reliancedigital.in/medias/Samsung-Days-Carousel-Banner-08-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NTYyNXxpbWFnZS9qcGVnfGltYWdlcy9oMTMvaGJmLzk4NjAwNjUwOTk4MDYuanBnfGQ2ODBmYWQ3NjdiYTRjM2I3ZWMwY2RjYjEzYmY1ZGY2YzljYmYxMGRmMzA4ZTRmYzE0YmI1Nzk1ZGI0ZWVkOGQ",
  "https://www.reliancedigital.in/medias/OnePlus-TV-CLP-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDY4NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2g0OC85ODYyNDU3MjYyMTEwLmpwZ3xiNjUwZjZiNzQ0MWU0MjUzYmNmNmUyMzEzMDM2MzMxNDAzZWI5ZTNlOTQzMzdmYWU5MmRmN2Q2OTBiZTBjYjhi",
  "https://www.reliancedigital.in/medias/iPhone-12-CLP-Banner-D-13.05.jpg?context=bWFzdGVyfGltYWdlc3w5MjE0MXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGM0Lzk4NjE5NzY3NTIxNTguanBnfDdiYmIxOTc2ZmY5NjUzZmRmNGFkNjg4YTExYjViNmU5ZTcyMTRjMjVmOTNiYTBiN2Y4OTljZWE3OTgwZjFlZTM",
  "https://www.reliancedigital.in/medias/Audio-Accessories-Carousel-Banner-08-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w2NjIyMXxpbWFnZS9qcGVnfGltYWdlcy9oNDAvaGRkLzk4NjE0OTk4MTM5MTguanBnfDFjY2I2NTI0NGJhYWM3Yjk0MDgxNWJjZjg1NGVlZjJjYzQ3N2E5M2ZmY2Y4MjdjMGEwNjgyZDU1YjgzYzkwNjI",
  "https://www.reliancedigital.in/medias/Electronics-Fest-CLP-D-18.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjE2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hmOS85ODYyNDMxNDA4MTU4LmpwZ3w1Mzk1MzMzMmI3MDg0OTc1ZWFiODkwNTk2ZTEwNDhhZGZhZTBmYWU3MDNhNjNmOGVkNWJkODk2OWFkZTFjNjhm",
];
let slider1 = 0;
sliderLink1.forEach(function (el, indx) {
  let slideImage = document.querySelector(".slide-img");
  let image = document.createElement("img");
  image.src = el;
  let span = document.createElement("span");
  span.addEventListener("click", function () {
    imageChangeFun(indx, span, slideImage);
  });
  document.querySelector(".slide-indicator").append(span);
  slideImage.append(image);
});
//Function for change image on click;
function imageChangeFun(indx, span, slideImage) {
  let pos = indx * -100 + "%";
  slider1 = indx;
  let slideInd = document.querySelector(".slide-indicator").childNodes;
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  span.setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}
//Image slider arrow button function;
setInterval(rightImgArrow, 3000);
let slidingBTN = document.querySelectorAll(".arrowbtn")[0].children;
//Left arrow
slidingBTN[0].addEventListener("click", function () {
  leftImgArrow();
});
function leftImgArrow() {
  slider1--;
  if (slider1 === -1) {
    slider1 = sliderLink1.length - 1;
  }
  let pos = slider1 * -100 + "%";
  let slideInd = document.querySelector(".slide-indicator").childNodes;
  let slideImage = document.querySelector(".slide-img");
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider1].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}
//Right arrow
slidingBTN[1].addEventListener("click", function () {
  rightImgArrow();
});
function rightImgArrow() {
  slider1++;
  if (slider1 === sliderLink1.length) {
    slider1 = 0;
  }
  let pos = slider1 * -100 + "%";
  let slideInd = document.querySelector(".slide-indicator").childNodes;
  let slideImage = document.querySelector(".slide-img");
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider1].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}
//Script for laptop sliding boxs;
let laptopLink = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDMyLzk4NDEyMjc0OTc1MDIuanBnfDEwNjk4MWE3MTQ5MmY1YjJkMjE1NWYwMTFkNDlhMTViNmNkMmFjOGFjODE5NTEwYzdkZTA2MDJhYWM1MTVjYzI",
    nameTitle:
      "Acer A315-23 Aspire 3 Laptop (AMD Ryzen 3-3250U/4 GB/256 GB SSD/AMD Radeon Graphics/Windows 11/ Full HD), 39.62 cm (15.6 inch)",
    price: 29990.0,
    maxprice: 39999.0,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGQ5Lzk4MTkzMTc0MDM2NzguanBnfDdiZDg3ZTA1NjE0MTE1NzFjNGU3NDE3OTMyYzc0NzljMzRiM2RjNjE5OGFhN2U1YWVhNjQ3YmI5YTMwM2JhNjI",
    nameTitle:
      "Acer A314-35 Aspire 3 Laptop (Intel Celeron N4500/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 26999.0,
    maxprice: 42999.0,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk3N3xpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDY4Lzk4MDcxMDAwNTE0ODYuanBnfDk1ZTliOGMwYjUzMDExODFkZDRkZDQyYmZmZWM4M2I1OGExN2E2MGIyMDkwM2NlZTdmYzA3NWM0NzAwY2YzMmE",
    nameTitle:
      "HP 14s-dq3032tu Thin &amp; Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 31990.0,
    maxprice: 37006.0,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzM2MnxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNkLzk4MjQ0MzU0NzAzNjYuanBnfDc0YTRhMTY0NzNlMjQ5YzY2MDg3ZmU2YjQyNmNhNzU0ODQ5ZjkyOGE1N2RjMDBhZTM4YTM5ZjQ4ZTlhMmM0NTE",
    nameTitle:
      "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    price: 55990.0,
    maxprice: 65444.0,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGE0Lzk4NDk0MDkwMTE3NDIuanBnfDE4ZGNiN2ZkMzM4YWU3Yjc2YTJmZjRmNjk4OWY1N2YzY2I1NDAxOGM1ZDU5YTIxNDAzNjVhZGEzNGEyOGZmZDc",
    nameTitle:
      "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    price: 39490.0,
    maxprice: 53790.0,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NzU3MXxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaGVkLzk4NDkyMzgzMjMyMzAuanBnfDA0NWNmNjdiOWE2ZjAyMDBhZjNjNWVhNThjNmJlYmE3MDc1NTc4MWU1MGJjZjgzYTNlYzBjYWVlOGI5NTZmY2Y",
    nameTitle:
      "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    price: 31490.0,
    maxprice: 53790.0,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",
    nameTitle:
      "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 27999.0,
    maxprice: 40490.0,
  },
];
laptopLink.forEach(function (el, indx) {
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
  document.querySelector(".slide-product").append(div);
});
