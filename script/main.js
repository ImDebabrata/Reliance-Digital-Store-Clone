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
setInterval(rightArrowAutoSlide, 3000);
let slidingBTN = document.querySelectorAll(".arrowbtn")[0].children;
//Left arrow
slidingBTN[0].addEventListener("click", function () {
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
});
//Right arrow
slidingBTN[1].addEventListener("click", function () {
  rightArrowAutoSlide();
});
function rightArrowAutoSlide() {
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
let laptopSlider = 0;
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
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[1].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  laptopSlider--;
  if (laptopSlider === -1) {
    laptopSlider = 1;
  }
  let pos = laptopSlider * -36 + "vw";
  let slideDiv = document.querySelector(".slide-product");
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  laptopSlider++;
  if (laptopSlider === 2) {
    laptopSlider = 0;
  }
  let pos = laptopSlider * -36 + "vw";
  let slideDiv = document.querySelector(".slide-product");
  slideDiv.style.transform = "translateX(" + pos + ")";
});

// ------------------------------------------------------------
// Third arrow function
let thirdProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NzU3MXxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaGVkLzk4NDkyMzgzMjMyMzAuanBnfDA0NWNmNjdiOWE2ZjAyMDBhZjNjNWVhNThjNmJlYmE3MDc1NTc4MWU1MGJjZjgzYTNlYzBjYWVlOGI5NTZmY2Y",
    nameTitle:
      "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    price: 29990,
    maxprice: 53790,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/PIGEON-Mini-Eco-Speciality-Appliances-492664295-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTgwMnxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDY1Lzk3NTQyMjcyNzc4NTQuanBnfDU4NzljN2IzOWI4YWM2NWVjOTc4ZjNlM2NmYjVhNjc5NGM2NTRmZWY2NmJjMmFjNmY2OTVkYWUwZmRjNzgwN2E",
    nameTitle: "Pigeon Mini Eco Handy Chopper with 3 Blades",
    price: 169,
    maxprice: 445,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/EVM-EVM-C-014-DATANETWORKINGCABL-492575371-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjE3NnxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaDY2Lzk4MDY4MjQ2MzY0NDYuanBnfDAwZTgxNDBkYzEwMTNiMjJiN2EyNzlhMTU5ZmNlMDEzZjc3ZDdlMzNmMThkMTU2ZTcwOTYxYmE3YWZlZTE0YjI",
    nameTitle: "EVM C014 Micro USB Data and Sync Cable, Black",
    price: 69,
    maxprice: 269,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY",
    nameTitle: "ONEPLUS 108 cm (43 inch) Full HD Smart LED TV, 43Y1",
    price: 22999,
    maxprice: 29999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Asus-FX506LHB-HN356W-Laptops-492850463-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTY5NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGVjL2gwZS85ODQ3NjgwNzI5MTE4LmpwZ3xhNmVjODQ5ZWVlNDM4OTMxNzZiMjkwZjg4OTc1ZGM1MTMyOTUxMjIzOGJiMTM1ZGIwOTIwZGJkYjU3OWMxZWJl",
    nameTitle:
      "Asus HN356W TUF F15 Gaming Laptop (10th Gen Intel Core i5-10300H/16 GB/512 GB SSD/4GB Nvidia GeForce GTX&nbsp;1650 Graphics/Windows 11/Full HD), 39.62 cm (15.6 inch)",
    price: 58999,
    maxprice: 67990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/boAt-Stone-Grenade-Speaker-491893336-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTYxM3xpbWFnZS9wbmd8aW1hZ2VzL2hhOC9oMjkvOTc3NTI3NjI2MTQwNi5wbmd8OGU2ZDEwNGRkNjBmNWJiYWNlMGFjNDkxYjQ4Y2Q2YmQ5ODkxOWZjNmE2NjhlMzAyNzA0YWU1MDJmZDBiOWFmOA",
    nameTitle:
      "boAt Stone Grenade 5W Portable Wireless Speaker With Multiple Connectivity Modes, Up to 7H Playback, IPX6 Water and Splash Resistance and Rugged Shock Resistant Design, Black",
    price: 699,
    maxprice: 3990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lifelong-LLSWM70D-Washing-Machines-492910935-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTk1MXxpbWFnZS9qcGVnfGltYWdlcy9oNTMvaGQ2Lzk4NTM3MTY1OTQ3MTguanBnfGI2YWU4MWEzZjk4YjJhMTVhODU0MzU2ZTQ1NWQ1MzIwZDc1YWRhYzBlNjZmM2IyNjE2OWNjOWE2ZmIyOTg2MzU",
    nameTitle: "Lifelong 7Kg Top Load Semi-Automatic Washing Machine, LLSWM70D",
    price: 6990,
    maxprice: 10499,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/JBL-LIVE-200-Headphones-and-Headsets-491430945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzQ4OHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGE0LzkzMzAxNjQwMDY5NDIuanBnfGQ5OGFmMWVlNTIwOGJmN2YzZTQyMThlNWM0MjlkMzljNmQxOTk1ODM2NGVkZGNmMjJjODBkMDNlMmQ2MDYyNDU",
    nameTitle:
      "JBL LIVE200BT in-Ear Wireless Neckband Headphones with 10 Hours Playtime, Multi Point Connectivity &amp; Premium Aluminum Housing (Blue)",
    price: 1999,
    maxprice: 5299,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Acer-15-Aspire3-11Gi3-Laptops-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjI5OHxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDMxLzk4NDI5MzU4NTcxODIuanBnfGI3ZDU2M2JmOTliYmFiZjQzMzRiYjAzYWI1NDk2YzU1MmM3MDZmYjYwNGNlMDUxYTNjYjUzYmI4MzQ4ZDhhNjg",
    nameTitle:
      "Acer A315-58 Aspire 3 Laptop (11th Gen-Intel Core i3-1115G4/8GB/512GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    price: 38490,
    maxprice: 55999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjQ3OXxpbWFnZS9wbmd8aW1hZ2VzL2gzOS9oY2MvOTgwODU0Njc5MTQ1NC5wbmd8N2UzMTIyZjI0MTI1YzQxMGNmNTRmZGZmOTM4Y2ZjZWNkMmU1YWVlN2MyZDdkYmNmOTU0ZjhiYjNhYzQzZDJhZQ",
    nameTitle: "Realme 80 cm (32 inch) HD LED Smart TV, Neo",
    price: 13499,
    maxprice: 21999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lifelong-Infinia-Juicer-Mixer-Grinder-492391909-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDNjLzk2NDk2NDg1MDA3NjYuanBnfDViM2QyYTQ0NGJkMDYyNTZiZWEyM2MxNTJkNWM2Mjc2OTZhZmI5ZmRkNGViNzY5MGM4ZDRjMDE3NGNhMjEwZGU",
    nameTitle: "Lifelong Infinia 500 Watts Mixer Grinder, Grey",
    price: 1299,
    maxprice: 2899,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-M52-Smart-Phone-491998466-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODU3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaDQ5Lzk3NDk1NzgyNTIzMTguanBnfDU5YjAwZmE3ZmI4MDI3N2FhMWQ4NDlkNGFiOTFkNmMzOWFmODQxYWQyMzYyODgwMWNkZDgyOWU0MDU4ZTQ4NjA",
    nameTitle: "Samsung Galaxy M52 128 GB, 6 GB RAM Icy Blue, Mobile Phone",
    price: 20999,
    maxprice: 29999,
  },
];
let thirdProSli = 0;
thirdProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[1].append(div);
});
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[2].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  thirdProSli--;
  if (thirdProSli === -1) {
    thirdProSli = 3;
  }
  console.log(thirdProSli);
  let pos = thirdProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[1];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  thirdProSli++;
  if (thirdProSli === 4) {
    thirdProSli = 0;
  }
  let pos = thirdProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[1];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// ________________________________________________________________
// function for second image Slider
//Array for image slider image link;
let sliderLink2 = [
  "https://www.reliancedigital.in/medias/OnePlus-Series-9-NPI-Banner-21-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MDA5OXxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaDA4Lzk4NjM5Mzk2ODY0MzAuanBnfDQ2M2FjOGZmMjAxN2FhNmYwMjQ2OGMyYTAyZDQ1ZjhmNTJlZTMxOTkzNTVjNzU4MWE0YjEyNTcyYWVmZDI2NmY",
  "https://www.reliancedigital.in/medias/Washotsav-NPI-Banner-21-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxODM5OTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2hlZC85ODYzOTM5ODE3NTAyLmpwZ3xmMGUyZTJkM2RlMjYzNjE2MjU5YTFiOTdkYjRiOGM5NmZhNDAxOGM4NjM3NGEzNDIyMDBlZGIyYmViYjI5MDFm",
  "https://www.reliancedigital.in/medias/Top-sellers-from-TCL-IFFALCON-NPI-Banner-21-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDM4NTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2hjOC85ODYzOTM5OTQ4NTc0LmpwZ3w3NzdmOWVkNmYyMjM0NWU0ZGU1YTY1YjU0OTZjZWU2ZWQyZjQ1ODFjZGZiMWExMGExZGM1MTdmMDE0MjZlNjE5",
  "https://www.reliancedigital.in/medias/Top-Selling-Tablets-NPI-Banner-21-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w2OTUzNnxpbWFnZS9qcGVnfGltYWdlcy9oOWMvaDRhLzk4NjM5NDAwNzk2NDYuanBnfGUwOGJlNDhjNGY1OWFmYzA2MDJhZmVlNThmYTc5MmFlNWZkMjQwNDdhY2ZkMGJkMzRiZTUzYWMyZWM2ZDMzOTY",
  "https://www.reliancedigital.in/medias/Best-Seller-Printers-NPI-Banner-21-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjgyMXxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaDNhLzk4NjM5NDAyMTA3MTguanBnfDZhNWZiODgzNTExMGJmYjhiMGY3MmY1OGEzM2FkODZlNWY3YzdjMGY1ZGM1ODM4MTgwM2I5MDEyZDI4YTM3NjM",
  "https://www.reliancedigital.in/medias/website-banner-dig-resq.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxNTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGRiL2g4Ni85ODYzOTQwMzQxNzkwLmpwZ3xkNTIwMmUxMjk0ODRlYzkwYzU2ZDljMDU3M2M0ZDk4YWY5YTk0ZjMwZTJiMmZiMWJjMWExZWU1MGM2NDMzZWJm",
];
let slider2 = 0;
sliderLink2.forEach(function (el, indx) {
  let slideImage = document.querySelectorAll(".slide-img")[1];
  let image = document.createElement("img");
  image.src = el;
  let span = document.createElement("span");
  span.addEventListener("click", function () {
    let pos = indx * -100 + "%";
    slider2 = indx;
    let slideInd = document.querySelectorAll(".slide-indicator")[1].childNodes;
    slideInd.forEach(function (elm) {
      elm.removeAttribute("class");
    });
    span.setAttribute("class", "activeBtn");
    slideImage.style.transform = "translateX(" + pos + ")";
  });
  document.querySelectorAll(".slide-indicator")[1].append(span);
  slideImage.append(image);
});

//Image slider arrow button function;
setInterval(rightArrowAutoSlide_2, 3000);
slidingBTN = document.querySelectorAll(".arrowbtn")[3].children;
//Left arrow
slidingBTN[0].addEventListener("click", function () {
  slider2--;
  if (slider2 === -1) {
    slider2 = sliderLink2.length - 1;
  }
  let pos = slider2 * -100 + "%";
  let slideInd = document.querySelectorAll(".slide-indicator")[1].childNodes;
  let slideImage = document.querySelectorAll(".slide-img")[1];
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider2].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
});
//Right arrow
slidingBTN[1].addEventListener("click", function () {
  rightArrowAutoSlide_2();
});
function rightArrowAutoSlide_2() {
  slider2++;
  if (slider2 === sliderLink2.length) {
    slider2 = 0;
  }
  let pos = slider2 * -100 + "%";
  let slideInd = document.querySelectorAll(".slide-indicator")[1].childNodes;
  let slideImage = document.querySelectorAll(".slide-img")[1];
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider2].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}
// _______________________________________________________
// Product Catagory section
let fourProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
    name: "Smartphones",
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
    name: "Laptops",
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
    name: "Televisions",
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
    name: "Smart Wearables",
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
    name: "Washing Machines",
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
    name: "Speakers & Headsets",
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
    name: "Cameras",
  },
];
let fourProSli = 0;
fourProduct.forEach(function (el) {
  let image = document.createElement("img");
  image.src = el.imgUrl;
  let name = document.createElement("p");
  name.setAttribute("class", "name_catagory");
  name.innerText = el.name;
  let div = document.createElement("div");
  div.append(image, name);
  document.querySelectorAll(".slide-product")[2].append(div);
});
//Function for sliding buttons of product catagory
slidingBTN = document.querySelectorAll(".arrowbtn")[4].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  fourProSli--;
  if (fourProSli === -1) {
    fourProSli = 2;
  }
  let pos = fourProSli * -18 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[2];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  fourProSli++;
  if (fourProSli === 3) {
    fourProSli = 0;
  }
  let pos = fourProSli * -18 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[2];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// five arrow function
let fiveProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-WA65A4002VS-FATL-492911099-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjM2MXxpbWFnZS9qcGVnfGltYWdlcy9oZDYvaDY0Lzk4NDc4MDM4Mzg0OTQuanBnfDBmZWYxZjQwZDFhNzliY2E5ZWQ2ZGViMjQ3Y2ZlYzMxY2ZkY2ZmOGI4ZDNjNmFmZjMzNzg5YmIwNDc2MzFhZGQ",
    nameTitle:
      "Samsung 6.5 Kg Top Load Fully Automatic Washing Machine, WA65A4002VS/TL, Imperial Silver",
    price: 14490,
    maxprice: 16800,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-RR19A241BGS-NL-Refrigerator-492911074-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDQwOXxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaGM5Lzk4MzcyNDA3Nzg3ODIuanBnfDkwNmYyYWM2NjQ4OGY1MWI3YjE1MmRkZmQxNTk1MTc1MTQ3YjZmY2U2MDY4Y2I1ZmZmNDljZTFhYWU4YTdkM2M",
    nameTitle:
      "Samsung 192 Litre 2 Star Single Door Refrigerator, Gray Silver, RR19A241BGS/NL, Direct Cool",
    price: 13190,
    maxprice: 15990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-WW60R20GLMA-TL-Washing-Machine-491959430-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjA4NXxpbWFnZS9qcGVnfGltYWdlcy9oZmUvaDhlLzk1MDgxOTM2OTc4MjIuanBnfDYyNTY4NmY3ZDZkMTAyYmFmNTE5Y2M4MDZhODYzMDViYjJjNzQxODY0ODRmMjYxNTYxYTg1NDViNmUzNjExZDA",
    nameTitle:
      "Samsung 6 Kg Front Loading Fully Automatic Washing Machine, WW60R20GLMA/TL, White",
    price: 22990,
    maxprice: 26900,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-RT28A3032GS-HL-Double-Door-Refrigerator-491959449-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NzYwfGltYWdlL2pwZWd8aW1hZ2VzL2g0NC9oMzMvOTgzODM1MTkwODg5NC5qcGd8MDU0MTAyMDExNzE4NmYyYWI5MTdmYzhmMjE1MjFiZTNmNzJmZTU5ODRlNTVmZmQzZWM0MjllYWIzNjA4ODFhNQ",
    nameTitle:
      "Samsung 253 Litres 2 Star Double Door Refrigerator, Gray Silver RT28A3032GS/HL",
    price: 22600,
    maxprice: 24900,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-RR21A2C2XDX-HL-Refrigerator-491959446-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDIwOXxpbWFnZS9qcGVnfGltYWdlcy9oOWQvaDMzLzk4MTIzNDA4NjcxMDIuanBnfDY1YzRmODk2MTI0YmY1YzIzYmNhYWRmZTdjOTAxMTRhODU1MmZkYTZmODhkMzkyOWE2ODQxNDUzOWFmMTc1MDM",
    nameTitle:
      "Samsung 198L 4 Star Inverter Direct Cool Single Door Refrigerator (RR21A2C2XDX/HL Luxe Brown,Digi-Touch Cool 5 in 1,Stabilizer Free Operation)",
    price: 16790,
    maxprice: 17990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-WW60R20GLSS-TL-FAFL-492864817-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMDIvaGNkLzk4MTMxNDMwOTMyNzguanBnfDI0ZTQ2NTZhNDU2ZDk5ZDc0ZmNjNzE3NDdiODg1MDU0NTM4YTFkMTkxMDgwNzgzZmFjYzdkNDcyNjI4NmJiNTE",
    nameTitle:
      "Samsung 6 Kg Front Load Fully Automatic Washing Machine, WW60R20GLSS/TL",
    price: 23490,
    maxprice: 32190,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-AR18BYLZAUR-Split-Air-Conditioner-581026992-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzAxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaDMyLzk4MTMxMzI5Njc5NjYuanBnfGI2YzhkOTg3MzY2N2Q0YTdlZTE1YzU0MjQyNTEwYjE1ZjBkMzE0ZDhjMjMxNjNmODU5NjVjN2NjYzllNDRlZWM",
    nameTitle:
      "Samsung 1.5 Ton 3 Star 5 in 1 Convertible Inverter Split AC, AR18BYLZAUR (100 percent Copper, Anti-Bacteria Filter, Auto Clean Function, Filter clean indicator, 2022 Launch)",
    price: 34990,
    maxprice: 57990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-RR19A2Z2B6R-NL-Refrigerator-492864846-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjc0N3xpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDBhLzk4MTI3NzE1MDQxNTguanBnfGNiZDdiYjdkM2MzMjMwM2UwMjQ5OTc2OTM2ODE3OGYyOGYwYTJhMGJkM2MxZTg1ODQ5MWJkNjJkMmFmOGJlZGI",
    nameTitle:
      "Samsung 192L 2 Star Direct Cool Single Door Refrigerator (RR19A2Z2B6R/NL Mystic Overlay Red,Base Stand with Drawer,Stabilizer Free Operation)",
    price: 15190,
    maxprice: 16990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-AR18BYLZAUR-Split-Air-Conditioner-581026959-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzEzM3xpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDJmLzk4MTMxMjgzODA0NDYuanBnfDZiNDIwMGUzODlmMDAyNjkyNTYyNzA2MTIxN2FiM2M4M2ViZTk3ZTJlOThhNTFlMzJjNDQ0ZmYwMmQwMDkwNGE",
    nameTitle:
      "Samsung 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC, AR18BYNZAUR (100 percent Copper, Anti-Bacteria Filter, Auto Clean Function, Filter clean indicator, 2022 Launch)",
    price: 41990,
    maxprice: 65990,
  },
];
let fiveProSli = 0;
fiveProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[3].append(div);
});
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[5].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  fiveProSli--;
  if (fiveProSli === -1) {
    fiveProSli = 2;
  }
  let pos = fiveProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[3];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  fiveProSli++;
  if (fiveProSli === 3) {
    fiveProSli = 0;
  }
  let pos = fiveProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[3];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// six arrow function

let sixProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Moto-G31-Smartphone-492849083-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTk1MnxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDQ0Lzk4MTM2Mzg5NzE0MjIuanBnfDdmYjAxMGRhMjk5NWVlZDJjOWJlY2E4NDY5YzFmOThiNTFjODllNjMxYzRlNmJhYzBlZGU3NmZkYjkwZmI0ZDg",
    nameTitle: "Motorola G31 64 GB, 4 GB RAM, Baby Blue, Mobile Phone",
    price: 10499,
    maxprice: 14999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Moto-G31-Smartphone-492849085-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzA5NHxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDFjLzk4MTM2NDc1NTY2MzguanBnfDc1ZDRlMzhkNGU5YTk5Nzc1MDY3NTQyOTY5MTA0ZDI1N2E1MjY1YjcyNDUyODA0M2RkNzc1NWUyZTlkNDhlOGM",
    nameTitle: "Motorola G31 128 GB, 6 GB RAM, Meteorite Gray, Mobile Phone",
    price: 12499,
    maxprice: 16999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Motorola-G51-PAS80007IN-SMART-PHONE-492849093-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjMzNHxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGFmLzk3ODYyMzk2MTUwMDYuanBnfGUwYWQ4MjI2MDc0OTI1ZDYyMmYxNjk0ZjllZGYyYTUyNjQ3MmZjNmMzNGY1ZjM4NDUxMGFjYzNhMWYwZDZjOWM",
    nameTitle: "Motorola G51 5G 64 GB, 4 GB RAM, Indigo Blue, Mobile Phone",
    price: 12999,
    maxprice: 17999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Motorola-G60-PANB0023IN-SMART-PHONE-492849079-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjAzM3xpbWFnZS9qcGVnfGltYWdlcy9oZmUvaGI5Lzk4MTY5MTYyMzAxNzQuanBnfGYwMDUyNjU4MzUwMmNlNmMzMWM0Y2U0NDMyODE5NjhhZDA1OWYwN2I2MWVkMTFlNDdlMDQ4ODU1MzI0NjJmMmI",
    nameTitle: "Motorola G60 128 GB, 6 GB RAM, Moonless, Mobile Phone",
    price: 14999,
    maxprice: 21999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Motorola-G22-Mobile-Phone-492849923-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjkwOXxpbWFnZS9qcGVnfGltYWdlcy9oYzkvaDM2Lzk4MTk3MjI0ODE2OTQuanBnfGQzNTdlMDY1ODE2MjJhNDQ0ZGI0MDU0NjEzN2M0OTQ5ZGE1ZDljYzk2YTUzNjg3MDZkYjFiMDBlNGYxOThjNzY",
    nameTitle: "Moto g22 64 GB, 4 GB RAM, Iceberg Blue, Mobile Phone",
    price: 9999,
    maxprice: 11999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Motorola-G71-Mobile-Phone-492849087-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTk3OXxpbWFnZS9qcGVnfGltYWdlcy9oOWQvaGJjLzk4Mjg4NTEzODQzNTAuanBnfDVhZjEyZDljOTUwNjc5NDg5OTBhZGMyZTM4NDM2NTM1NDY5N2Y2M2M2NTczZWFiMTNkMjQ0M2QxZTlhNTk5NGQ",
    nameTitle: "Motorola G71, 128 GB, 6 GB RAM, Neptune Green, Mobile Phone",
    price: 15999,
    maxprice: 22999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849905-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDYxM3xpbWFnZS9qcGVnfGltYWdlcy9oNDAvaDAzLzk4MzQxMDY1MTk1ODIuanBnfDg0MDRiOWQxNGE5Zjk1OThkNTQ1NTJmYTU2ZTJmMzgyYTQ1OTQwYmZlZWYyNjliYTllMjEzNzBkZmZkNjVlYzE",
    nameTitle: "Motorola E32s 32 GB, 3 GB RAM, Misty Silver, Mobile Phone",
    price: 7999,
    maxprice: 12299,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Moto-G31-Smartphone-492849084-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzA5NHxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaGFiLzk4MTM2NDA2MDk4MjIuanBnfGMzM2MwYmFhYTY4MGVkZWUzZjgwZGIxNzVkY2ZhMmEyZDE0MTQyNjcxMjVmZDMyYWYwMGNjYTk3NzVmYWQzN2Y",
    nameTitle: "Motorola G31 64 GB, 4 GB RAM, Meteorite Gray, Mobile Phone",
    price: 10499,
    maxprice: 14999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Motorola-G22-Mobile-Phone-492849906-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjkwMXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaGNmLzk4MTk3MjgwNTIyNTQuanBnfGFjYTczZTA5ZGVlZThmNjhmNTNlOGYyYjQyYjY1OWFhOWE1NjA0OTk0NjJlMGU1MWJhNDM2MDk1M2MwODJmMzU",
    nameTitle: "Moto g22 64 GB, 4 GB RAM, Cosmic Black, Mobile Phone",
    price: 9999,
    maxprice: 11999,
  },
];
let sixProSli = 0;
sixProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[4].append(div);
});
//Function for sliding buttons
slidingBTN = document.querySelectorAll(".arrowbtn")[6].children;
console.log(slidingBTN);
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  sixProSli--;
  if (sixProSli === -1) {
    sixProSli = 4;
  }
  let pos = sixProSli * -18 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[4];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  sixProSli++;
  if (sixProSli === 5) {
    sixProSli = 0;
  }
  let pos = sixProSli * -18 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[4];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// seven arrow function
let sevenProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/JBL-Bar-2.1-Deep-Bass-TV-Speakers-and-Soundbars-491630562-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTc3MHxpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGE0Lzk1MDE2MTM4NTA2NTQuanBnfDNiMzY5Y2Q3NDNlZDE3Yzc1NTM4ZTU5MjA5ZjNlNmNlMDljYjMwNTVhOGFkZmMxMDhjNDFiNGVkOGRhOThiNTc",
    nameTitle:
      "JBL Bar 2.1 Deep Bass Soundbar with Wireless Subwoofer, Dolby Digital & JBL Surround Sound Modes (300 watts, Black)",
    price: 29999,
    maxprice: 32999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/JBL-Bar-9.1-TWS-TV-Speakers-and-Soundbars-491895021-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjExM3xpbWFnZS9qcGVnfGltYWdlcy9oNzMvaGFjLzk1MDY0NTI1NzAxNDIuanBnfGUyMzA1YThjMmU2YTNmNzUyMTllYmQ0NmNhNzBiZWUxYmQzYzMyNzBjNTc4NjBkNTQ0MzhjMGViNzY3YjUwYzM",
    nameTitle:
      "JBL BAR 9.1 True Wireless Surround Soundbar with Dolby Atmos, Detachable Wireless Speakers, Ultra HD4K Pass Through &amp; Built-in WiFi (820 Watts, Black)",
    price: 99900,
    maxprice: 107000,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/JBL-JBLPARTYBOX310IN-Party-speakers-492166104-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MzYxfGltYWdlL2pwZWd8aW1hZ2VzL2g3OS9oY2YvOTYwODkzNTExMjczNC5qcGd8ZmZkOWFmNWE5YzE1ZDQ5NGZkMTAyNTBkYmE1NTQ1ZTIxMzZlY2I1ZTUzNzk2NmU4MTBkZmFkNWI5ODMxYmM3Mg",
    nameTitle:
      "JBL Partybox 310 Portable Bluetooth Party Speaker with Dynamic Light Show, DJ Control Panel, Built-in Karaoke Mode & IPX4 Splashproof Protection (240 Watt, Upto 18 Hrs Playtime, Black)",
    price: 42999,
    maxprice: 45999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/JBL-JBLPARTYBOX110IN-SPEAKERS-492796822-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjUxMHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDA0Lzk4MjI5MDUxNzE5OTguanBnfDA0MGY2YzQ0YWIwY2JkZTI5MDEwYmQ4MDZjMzI2M2NmZDIzMGY5MGI3MmRlZDYyNjZhYWUzZWFmN2NkYzA4NzI",
    nameTitle: "JBL Partybox 110 Party Speaker, Black",
    price: 31999,
    maxprice: 35999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/JBL-JBLBAR51BLKEP-Computer-Speakers-491362521-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODEwNXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDI4Lzg5NjQwNDI2ODY0OTQuanBnfGFmMWY3ODA5ZmMwNTk1ZjA1NDhmMzRiMjNiMWY4MWIyMGRkYTkyMjZiY2M4NjUwODU2MzQ0NTAzODc1NzEyNWM",
    nameTitle:
      "JBL BAR51 Dolby Digital DTS with (Wireless Speakers and subwoofer &amp; 4k Surround Sound) 510 W Bluetooth Soundbar  (Black, 5.1 Channel)",
    price: 67999,
    maxprice: 69999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODAxN3xpbWFnZS9qcGVnfGltYWdlcy9oMTgvaDE5Lzk4MTY2NTIwNTQ1NTguanBnfGNmNDk4MjhhYTFmYmQ5ODY1ZTQ0MzBhOWYxMjQyNTNjYmM2OWQyMWVlZGNmZWFlZjYzMGNmMjAwMDE5MzZjNjI",
    nameTitle: "LG SN4 300 Watts 2.1 Channel Sound Bar",
    price: 17999,
    maxprice: 29999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/LG-OL45-491431665-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzY2MnxpbWFnZS9qcGVnfGltYWdlcy9oYTYvaDIxLzkxNzc5Nzg1MzU5NjYuanBnfGI3MGMyODkzMmI5OTkyZjkwYWJhNDdiNWU1ZTc1Y2I1ZTcxN2VjZjU0M2EzYzBiNjkyOGE3ZTgxMTRiMDU5ZGY",
    nameTitle:
      "LG XBOOM OL45 220 watts Party Speakers with Bluetooth Connectivity",
    price: 17490,
    maxprice: 17990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/LG-SN6Y-TV-Speakers-and-Sound-bars-491898094-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjg0MHxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaDczLzk0MDkzMzY4Njg4OTQuanBnfDE4NjZlMTY3MDY1YTI1MGQ3MzY2MGE4OGU2OWNhZmI3MzlkMDQ1YmUzM2Q2MTZkODM2ZjBmNmIxYWRlNTUzYzY",
    nameTitle: "LG SN6Y 3.1 Channel Sound bar",
    price: 30990,
    maxprice: 39990,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/LG-OK55-Specialty-Speakers-491431040-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTc3fGltYWdlL2pwZWd8aW1hZ2VzL2g4Yi9oZWYvOTA2OTUxMzQwODU0Mi5qcGd8NTBmYzE2MTU4MzNmMDY4MmNlNTQ5YzVkNzA1M2VjOWYxZmZmZmEwNDA4ZTlkMTVmNzI0Mjg0YzUxMjczZTdmOA",
    nameTitle: "LG XBOOM OK55 500 watts Party Speaker with Karaoke",
    price: 24490,
    maxprice: 29990,
  },
];
let sevenProSli = 0;
sevenProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[5].append(div);
});
//Function for sliding buttons
slidingBTN = document.querySelectorAll(".arrowbtn")[7].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  sevenProSli--;
  if (sevenProSli === -1) {
    sevenProSli = 2;
  }
  let pos = sevenProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[5];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  sevenProSli++;
  if (sevenProSli === 3) {
    sevenProSli = 0;
  }
  let pos = sevenProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[5];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// eight arrow function
let eightProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg",
    nameTitle: "ONEPLUS 81.28 cm (32 inch) HD Smart  LED TV, 32Y1",
    price: 13999,
    maxprice: 19999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/ONEPLUS-32Y1S-EDGE-SMART-LED-TV-492796556-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaGRmLzk3Nzg1NjI5OTAxMTAuanBnfGViZTM4YWU1NzgyNDZmZTg1NmZhY2U5MWU1MTMxMjVhZmFmMzJmYjg1YzhkNzY2MTg3Y2E5MDMzZmM3M2U0NmE",
    nameTitle:
      "OnePlus 81.28 cm (32 inch) HD Ready Android Smart LED TV with Dolby Audio Surround Sound Technology, 32Y1S Edge",
    price: 15999,
    maxprice: 23999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-40Y1-Television-492338486-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjEzOHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaGE1Lzk1NTc0NDMwODQzMTguanBnfDRhYTQ4MWM4MjNkODNiYmY4YThlZGQ2YjBkMTc3NGY1OTE4MTAzODE5MGZhMzI4NzM2Mzc2MTkzYzQwMzY4OGI",
    nameTitle: "OnePlus 100 cm (40 inch) Full HD LED Smart TV, Y Series 40Y1",
    price: 21499,
    maxprice: 27999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY",
    nameTitle: "ONEPLUS 108 cm (43 inch) Full HD Smart LED TV, 43Y1",
    price: 22999,
    maxprice: 29999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/ONEPLUS-43Y1S-EDGE-SMART-LED-TV-492796557-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDI4Lzk3Nzg1NjMzMTc3OTAuanBnfGYwZTJhZWZhNTdjMzc2MTIwZGFmNzEwYmI1YzEwOWY1NGMzMGE0ZWZkNGJlNTUyMWMwODY3MzkwNGI3OTk1ZWM",
    nameTitle:
      "OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge",
    price: 25999,
    maxprice: 33999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-43Y1S-PRO-Television-492796793-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MTYzfGltYWdlL2pwZWd8aW1hZ2VzL2hkOC9oZDEvOTgxMDExNjMxMzExOC5qcGd8NDBhNzlkZWI5ZWU0YzJjOTZjOTc0Zjc3ZTU1NGE1NDljYjU4M2M0ZGM2MmMzYjFlNTExNmRhNTYzYWQ3YzExMg",
    nameTitle:
      "OnePlus Y Series 43Y1S Pro 108 cm (43 inch) Ultra HD 4K Smart LED TV, 43UD2A00",
    price: 29999,
    maxprice: 39999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-50U1S-Television-492338513-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NTk0MHxpbWFnZS9qcGVnfGltYWdlcy9oMjcvaDhiLzk1Njg0MDI2Njk1OTguanBnfDI0ZGI1NzU2NzhmMzJhYmUzZTFlODM5Yjg1NjNjOTlmMDlmYTAyNjU2NDI1OGY0MDZhOGIyYzdjYzRkMTVmMDY",
    nameTitle:
      "OnePlus 125.7 cm (50 inch) Ultra HD (4K) LED Smart TV, U Series 50U1S",
    price: 37999,
    maxprice: 49999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-55U1S-Television-492338514-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NjY1OXxpbWFnZS9qcGVnfGltYWdlcy9oNzkvaDM5Lzk1Njg0MDQzMDc5OTguanBnfGEzZWNhOGVkMmIxNmI5ZTAwNjdiYWZjMjBjNmE4MDhjOTZjM2IwYzMwMTE0MWMwMTZjMDM1ZDhkOWIzMGRkYmM",
    nameTitle:
      "OnePlus 138.7 cm (55 inch) Ultra HD (4K) LED Smart TV, U Series 55U1S",
    price: 42999,
    maxprice: 59999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-65U1S-Television-492338515-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MjE4MHxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDJjLzk1Njg0MDc5MTI0NzguanBnfDFiYzgxZGJjMWU5NWZjNjJlODQ3NmI4MTkwYWUxODUwOGZlYzdjMmQ2MTdlNTM3NDFmMmU2OGE4M2NiZjJiODE",
    nameTitle:
      "OnePlus 163.8 cm (65 inch) Ultra HD (4K) LED Smart TV, U Series 65U1S",
    price: 61999,
    maxprice: 69999,
  },
];
let eightProSli = 0;
eightProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[6].append(div);
});
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[8].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  eightProSli--;
  if (eightProSli === -1) {
    eightProSli = 2;
  }
  let pos = eightProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[6];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  eightProSli++;
  if (eightProSli === 3) {
    eightProSli = 0;
  }
  let pos = eightProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[6];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// nine arrow function
let nineProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Oppo-CPH2357-Smart-Phone-492850896-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oMDUvaDU5Lzk4NjE1MTYzOTQ1MjYuanBnfDkzZjlmMGFhZGQ0NmNkNjJlNTMyY2M0MDIwYjkxZDY5NmQ1ZmI0MjMxNmViYWQwMmVhMjg5ODdhZDQxOTFmY2E",
    nameTitle: "OPPO Reno8 Pro 5G 256 GB, 12 GB RAM, Green, Mobile Phone",
    price: 45999,
    maxprice: 52999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Oppo-CPH2357-Smart-Phone-492850897-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODM4NnxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaGEzLzk4NjE1MjA5ODIwNDYuanBnfDJlZmVjZWZlZDA2YzhmYWQzMDc3ZGI2ZWViYjkyYmVmYjUzMDU2Zjc4Nzk2MGQ1NDgxMTdmNGE3MmYwMWU1NWQ",
    nameTitle: "OPPO Reno8 Pro 5G 256 GB, 12 GB RAM, Black, Mobile Phone",
    price: 45999,
    maxprice: 52999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-2-Lite-5G-Mobile-Phone-492850035-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NjkwMXxpbWFnZS9wbmd8aW1hZ2VzL2gyYi9oNzQvOTgyMDk5NTU4NDAzMC5wbmd8MGI5MTdhZGJhYzRmY2I3Y2I0YTVhNjkxYzUzNDhmMWQ3NjY5MjU3OGMyMGU3Nzc0YmQwMDM0ZDg0NjQ2YjJjZg",
    nameTitle:
      "OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Blue Tide,Mobile Phone",
    price: 19999,
    maxprice: 21999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-2-Lite-5G-Mobile-Phone-492850038-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDk5OXxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oNjkvOTgyMDk5NTkxMTcxMC5wbmd8OTM3ZTgwZGZlNDU5MGRjMDBkNmExZWU3OGNlZmZlZDAwMjkwMjBhNTgwN2Q0ZDQyYjQ5MzIzNDczMjE2YmExYw",
    nameTitle:
      "OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Black Dusk,Mobile Phone",
    price: 19999,
    maxprice: 21999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/One-Plus-Nord2T-Mobile-Phone-492850715-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTk4NnxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDg4Lzk4NTMzNTc0NTc0MzguanBnfGE1YWZmZjkzMGI2ZmQxYTViYWFmNmQzNTUyYzhjN2E2MDhhZDgxNGJlNzlkMDM2ODhmODhiNjY0NTMzNDIwYmI",
    nameTitle: "OnePlus Nord 2T 5G 128GB, 8GB RAM, Jade Fog, Mobile Phone",
    price: 28999,
    maxprice: 31999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/One-Plus-Nord2T-Mobile-Phone-492850716-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTUxMHxpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDc3Lzk4NTMzNTgxMTI3OTguanBnfGIyMzI1OGExYWY3ZDNkNTYxYWZhNmMwMGI3MmMwMDIwZDlhMjFhMzZjNWZhOTE3YjA2MzBmYjFmNTY5ODgzY2I",
    nameTitle: "OnePlus Nord 2T 5G 256GB, 12GB RAM, Gray Shadow, Mobile Phone",
    price: 33999,
    maxprice: 35999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/One-Plus-Nord2T-Mobile-Phone-492850717-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTk4NnxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGQyLzk4NTMzNTkwOTU4MzguanBnfGY2YTg2ZTY3NmFjOTkyNzg1MTBhOGJjNDQyZjE4ODJmZjJkOTAwZjMxNzgwZTY2NGFkYjI0OTlkMWU2YzZiOWQ",
    nameTitle: "OnePlus Nord 2T 5G 256GB, 12GB RAM, Jade Fog, Mobile Phone",
    price: 33999,
    maxprice: 35999,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/One-Plus-Nord2T-Mobile-Phone-492850714-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTUxOHxpbWFnZS9qcGVnfGltYWdlcy9oODcvaDhhLzk4NTMzNTk0MjM1MTguanBnfDZmYjI2MmI2ZWE4YmE2ZGU3YTg0MjgxNjFkYTMzY2I2MjQxNTgwNGE1OWY3ZWM5NTZmODhjNzU2ZWY2ZWU5Njc",
    nameTitle: "OnePlus Nord 2T 5G 128GB, 8GB RAM, Gray Shadow, Mobile Phone",
    price: 28999,
    maxprice: 31999,
  },
];
let nineProSli = 0;
nineProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[7].append(div);
});
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[9].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  nineProSli--;
  if (nineProSli === -1) {
    nineProSli = 3;
  }
  let pos = nineProSli * -18 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[7];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  nineProSli++;
  if (nineProSli === 4) {
    nineProSli = 0;
  }
  let pos = nineProSli * -18 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[7];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// ten arrow function
let tenProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/HP-24-dp1821in-Desktop-492575028-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODQ5fGltYWdlL2pwZWd8aW1hZ2VzL2hmOC9oMTgvOTgzMjk1OTA0OTc1OC5qcGd8OGY1ZGE1MDc1ZjNjMTI5YzEwNWVkNWQzMjIyZmM4Y2M1ZWE2NTE3YzdlOTlhMjVlMzFkYjNhNzlkOWZiNDUxYw",
    nameTitle:
      "HP 60.45 cm (23.8 inch) All-In-One Desktop (11th Gen Intel Core i3/Up to 4.1 GHz/8 GB/512 GB) 515S6PA-ACJ",
    price: 50499,
    maxprice: 59200,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Lenovo-F0E800YBIN-DESKTOP-HIGH-END-492849785-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODEyNHxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDE3Lzk4MjExNDI3NDUxMTguanBnfDE5MjU0MzNjMjk0YjM2ZThiOGMyODU2MGQ0ZjJhY2ViZjQzNGJjOTAwMjU2MjA3MTEwZGJjYzZjYTUwZjU3Zjc",
    nameTitle:
      "Lenovo Ideacentre 60.45cm (23.8 inch) All-in-one Desktop (10th gen core i5/8 GB/512 GB SSD/MSO), F0E800YBIN",
    price: 58999,
    maxprice: 78690,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/iMac-MGPC3-8GB-256GB-Silver-MGPC3HN-A-Desktop-and-All-in-one-491996574-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5MDYwfGltYWdlL2pwZWd8aW1hZ2VzL2g3Yi9oNjAvOTU0MjEwNDc0Mzk2Ni5qcGd8YjFkOTAzMTIxYTA0YWQ5ZDg1YzNlYjU2NzU4NTlmY2NkNjc2MWYxOGQxOTkwOTVlZTg0NDRkNDgxZDUwN2NiMA",
    nameTitle:
      "Apple iMac 60.96 cm (24-inch) All-In-One Desktop (8-core Apple M1 chip/8 GB/256 GB), MGPC3HN/A Silver",
    price: 134900,
    maxprice: 139900,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Samsung-F24T35-Computer-Monitor-491997460-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MjA2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaGVkLzk2MTQ0NjA4NDYxMTAuanBnfGE5ZDE4ODVkYjJmMjE1NzJmOGFjNDVkZDRkY2VhZTAyZGE5YjM3ODBhOWU3MjhjY2U2NTNhNGFjOTZjZjUwMTI",
    nameTitle:
      "Samsung LF24T352FHWXXL 60.4 cm (24 inch) with IPS Panel Technology, 1920 X 1080 Resolution, Borderless, Refresh Rate 75Hz, Dark Blue Gray Monitor",
    price: 12149,
    maxprice: 19110,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Viewsonic-VX2418-P-MHD-Computer-Monitor-492573394-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MjQzNnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaGRmLzk2NzY4ODkyOTI4MzAuanBnfGMzNDFkZTRjMmVlMzRlNTY2NTFjMmE5NzJmMWI2ZGIyZWYyNDMyZjY2MzVlYjFhNGIxOGVkNGY1YjA3ZWFlMjk",
    nameTitle:
      "Viewsonic VX2418-P-MHD 60.96 cm (24 inch) 1920 X 1080 Resolution, Built-in speaker, Refresh Rate Above 144Hz, Response Time 1 ms, Display Port, Black Monitor",
    price: 14999,
    maxprice: 28300,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Viewsonic-XG2405-Computer-Monitor-492573400-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDA5OHxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaDMwLzk2NzY5MDc5NzA1OTAuanBnfGFmZmE2YTczMmJjNDk5YzljODE4NzNkODgyOGUzOWY3ZTk3NjgwYmE1ZDM5MjFmZDU2MWYzMzBhYmE2MGRjOTE",
    nameTitle:
      "Viewsonic XG2405 60.96 cm (24 inch) with IPS Panel Technology, 1920 X 1080 Resolution, Refresh Rate 144 Hz, Response Time 1 ms, Black Monitor",
    price: 19999,
    maxprice: 47600,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Viewsonic-VX2458-C-MHD-Computer-Monitor-492573390-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTgyM3xpbWFnZS9qcGVnfGltYWdlcy9oODIvaDllLzk2NzY5MjI3ODE3MjYuanBnfGE2OTJlYzQ2ZDI5Y2FlNGI0NmM1MWJhZjJkZjA3YjVmZDAzMjhhOWQ4NjJkOTFlNDRiZjY5ZGRkMGYwZWFkNTE",
    nameTitle:
      "Viewsonic VX2458-C-MHD 60.96 cm (24 inch) with 1920 X 1080 Resolution, Built-in speaker, Refresh Rate 144 Hz, Response Time 1 ms, Display Port, Black Monitor",
    price: 14999,
    maxprice: 21400,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Viewsonic-VA2256-H-Computer-Monitor-492573399-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NTY5MHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDg4Lzk2NzY5MDUzNDkxNTAuanBnfDFmMDc3NjZkMmNiNzU3NmJkZWVhNmMzNTFjZjZlZjlmMjMwNDZiYjYwMDMxMjllMGE1YmE3NjY0ZjhlZjM3NzY",
    nameTitle:
      "Viewsonic VA2256-H 55.88 cm (22 inch) with IPS Panel Technology, 1920 X 1080 Resolution, Borderless, Refresh Rate 75Hz, Black Monitor",
    price: 10699,
    maxprice: 19500,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Viewsonic-VX2718-P-MHD-Computer-Monitor-492573395-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzkyMXxpbWFnZS9qcGVnfGltYWdlcy9oM2EvaDJjLzk2NzY4ODc5ODIxMTAuanBnfDYxOGYzNDk1MDUwYmMwMmJhMTM0NDRiZGU3YzU2ODVhNTIxYmNlYjM2MjNiOWM5OTExMWQ0ZGI1ZmYxNThhZGU",
    nameTitle:
      "Viewsonic VX2718-P-MHD 68.58 cm (27 inch) with VA Panel Technology, 1920 X 1080 Resolution, Built-in speaker, Refresh Rate Above 144Hz, Response Time 1 ms, Display Port, Black Monitor",
    price: 16499,
    maxprice: 33200,
  },
];
let tenProSli = 0;
tenProduct.forEach(function (el) {
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
  document.querySelectorAll(".slide-product")[8].append(div);
});
//Function for sliding buttons of laptop
slidingBTN = document.querySelectorAll(".arrowbtn")[10].children;
//Left Arrow
slidingBTN[0].addEventListener("click", function () {
  tenProSli--;
  if (tenProSli === -1) {
    tenProSli = 2;
  }
  let pos = tenProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[8];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  tenProSli++;
  if (tenProSli === 3) {
    tenProSli = 0;
  }
  let pos = tenProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[8];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// _______________________________________________
// eleven arrow function
let elevenProduct = [
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/EVM-EVM-C-014-DATANETWORKINGCABL-492575371-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjE3NnxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaDY2Lzk4MDY4MjQ2MzY0NDYuanBnfDAwZTgxNDBkYzEwMTNiMjJiN2EyNzlhMTU5ZmNlMDEzZjc3ZDdlMzNmMThkMTU2ZTcwOTYxYmE3YWZlZTE0YjI",
    nameTitle: "EVM C014 Micro USB Data and Sync Cable, Black",
    price: 69,
    maxprice: 269,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/EVM-EVM-CH-01-MOBILE-TABADAPTOR-492849037-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTc4MnxpbWFnZS9qcGVnfGltYWdlcy9oNTUvaDc1Lzk4MDAyMDUwNzQ0NjIuanBnfDYyMDkzNmM0NmE2YmY0ZTBkNTY0YmYzNzdmYTJjNDBiZWQ0YzZlNjFkNDljMWNjMGI5YjQ1NjNmNjRlYjRmYzE",
    nameTitle: "EVM Charger with Micro USB Cable CH01 White",
    price: 149,
    maxprice: 299,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Reconnect-RAVSG1001-Utility-Stand-491570764-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTIxM3xpbWFnZS9qcGVnfGltYWdlcy9oNzAvaGJlLzk4MzY2MTA1NTE4MzguanBnfGZkNDkzY2VhZWQxNmNmYzEzNzgzMDA0MjI2NWZlYTI1MWY4MGY3ODA4ZGVmY2RjYmEzZTFmZDE0YjEyZTgxZWE",
    nameTitle: "Reconnect RAVSG1001 V-Shaped Mobile Stand (Black)",
    price: 69,
    maxprice: 199,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/EVM-EVM-CH-02-MOBILE-TABADAPTOR-492849039-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTYyM3xpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDViLzk4MDAxNjY3MzU5MDIuanBnfGQzMWJkNDYyYzAwZDIxMjZmOTVjMGM0Mzk4YTU0NGY2YzgxZDNhYzdmZDY4M2NlYjYwMDI0N2NiMWU2NjNmOWE",
    nameTitle: "EVM Charger with Type C Cable CH02 White",
    price: 169,
    maxprice: 349,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Reconnect-RAMCG1005-Networking-Cable-491997338-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDA5OXxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDRiLzk4MzY2MzI4MzQwNzguanBnfDQ0YjMyNDg5YmIwYjY4YTJiODU1NWM2Y2JkOGQxYzJiYzZhNjNjMzM5ZGRkODQzNGM1OTlmZDY1OWMwY2RjNGY",
    nameTitle: "Reconnect RAMCG1005 Micro USB Cable (Black)",
    price: 69,
    maxprice: 199,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Ambrane-AWC38-Chargers-and-Adapters-491997509-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTk4OHxpbWFnZS9qcGVnfGltYWdlcy9oOTkvaGEyLzk2ODg1NDE1NjA4NjIuanBnfDgyMGVlMDc0NjE0MWYwNjU5Nzc1OTQyMTIyZWFmZTlhNTRjYjNjNDJiYWEzMDc4ZGZkOTRmNWM0NzU4NDg3MmE",
    nameTitle:
      "Ambrane AWC-38 Wall Charger with 10.5 Watt / 2.1A Fast Charging via USB Port with LED Indicator (White)",
    price: 199,
    maxprice: 499,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Reconnect-RAVSG1001-Utility-Stand-491570765-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzMzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDFkLzk4MzY2MTU0NjcwMzguanBnfDU4MWQ2ODU3MWI2N2U1ODIyODQ0ODRlODdjNzQ3MmRiYThkMzg2MWY1MDlhOGFiMTNlYzk4ZDEzODdiNmJmYTE",
    nameTitle: "Reconnect RAVSG1001 V-Shaped Mobile Stand (White)",
    price: 69,
    maxprice: 199,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Reconnect-DCC301-Chargers-and-Adapters-491615148-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3ODQxNnxpbWFnZS9qcGVnfGltYWdlcy9oZDYvaDUwLzk0MjMyNDI3ODg4OTQuanBnfDc3MDUyNjNmNmQwNjQ4OWZiZThmNWIxOTcwNDc3MWZjNzFlMWI2ZjRkYjA1ODA1ZGUxNWNhMDVmOTcxZjIxMWM",
    nameTitle:
      "Reconnect Marvel Black Panther QC 3.0 Mobile Car Charger, Scratch resistant, Qualcomm quick charge 3.0, 2 USB outputs, 20 Watts Car Accessories- DCC301 BP",
    price: 299,
    maxprice: 199,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Reconnect-RAVSG1001-Utility-Stand-491570763-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzg3OHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDg2Lzk4MzY2MTA4Nzk1MTguanBnfGRkMDg5MzI3OWI0ZWI1NDk5NGM4YWRjNTFkZmEyZDA2ODZhOTJjOTE4ZmIyZWY4MDQxMzI0Y2U1MGU2ZmIyNmM",
    nameTitle: "Reconnect RAVSG1001 V-Shaped Mobile Stand (Yellow)",
    price: 69,
    maxprice: 199,
  },
  {
    imgUrl:
      "https://www.reliancedigital.in/medias/Reconnect-DCC301-Chargers-and-Adapters-491615151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NzQ1N3xpbWFnZS9qcGVnfGltYWdlcy9oOTUvaGIxLzk0MjMyNDE4MDU4NTQuanBnfDA2YWUxNzU1MzU4ZjJmNzhlZjg5ZWYwNzNjMTM3ODU0OWYzYzU1NWQzZmY3MDU0MjI5YTA4Nzk5ZTZkN2EzZGE",
    nameTitle:
      "Reconnect Marvel Iron Man QC 3.0 18 Watts Mobile Car Charger, Scratch resistant, Qualcomm quick charge 3.0, 2 USB outputs, Car Accessories- DCC301 IM",
    price: 299,
    maxprice: 999,
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
slidingBTN[0].addEventListener("click", function () {
  elevenProSli--;
  if (elevenProSli === -1) {
    elevenProSli = 1;
  }
  let pos = elevenProSli * -90 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[9];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
// Right Arrow
slidingBTN[1].addEventListener("click", function () {
  elevenProSli++;
  if (elevenProSli === 2) {
    elevenProSli = 0;
  }
  let pos = elevenProSli * -90 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[9];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
