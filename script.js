// .................promise chaining start...............
// function getdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//     }, 3000);
//   });
// }

// getdata(1)
//   .then((res) => {
//     return getdata(2);
//   })
//   .then((res) => {
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });
// ...................promsie chaining end.................

// ......................async await start...................
// function getdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//     }, 3000);
//   });
// }

// async function getwather() {
//   console.log("waiting for data 1 ");
//   await getdata(1);
//   console.log("waiting for data 2 ");
//   await getdata(2);
//   console.log("waiting for data 3 ");
//   await getdata(3);
//   console.log("waiting for data 4 ");
//   await getdata(4);
// }
// .......................async await end.......................

// ......................get fetch api start ......................
// let url = "https://dogapi.dog/api/v2/breeds";

// const getfacts = async () => {
//   let response = await fetch(url);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// };
// .......................get fetch api ends.........................

// ........................currency conerter start......................
// const BASE_URL = "https://api.frankfurter.app/latest";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }

//     select.append(newOption);
//   }
//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }
// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", async (evt) => {
//   evt.preventDefault();
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 0) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   //   console.log(fromCurr.value, toCurr.value);
//   const URL = `${BASE_URL}?amount=${amtVal}&from=${fromCurr.value.toUpperCase()}&to=${toCurr.value.toUpperCase()}`;

//   let response = await fetch(URL);
//   let data = await response.json();
//   console.log(data);

//   let rate = data.rates[toCurr.value.toUpperCase()];
//   console.log("Converted Amount:", rate);
//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// });
// .........................currency converter end.......................
