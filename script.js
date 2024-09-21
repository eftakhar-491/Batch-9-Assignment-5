function seatAdd(seatNo) {
  return `
     <p class="px-9 py-2">${seatNo[0]}</p>
            <button
              class="seat-number duration-200 ease-in-out hover:bg-slate-600 hover:text-white px-9 py-2 text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[1]}
            </button>
            <button
              class="seat-number px-9 py-2 duration-200 ease-in-out hover:bg-slate-600 hover:text-white text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[2]}
            </button>
            <p></p>
            <button
              class="seat-number px-9 py-2 duration-200 ease-in-out hover:bg-slate-600 hover:text-white text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[3]}
            </button>
            <button
              class="seat-number px-9 py-2 duration-200 ease-in-out hover:bg-slate-600 hover:text-white text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[4]}
            </button>
    `;
}
const seatSection = document.querySelector(".seat-section");
for (let i = 0; i < 10; i++) {
  let ch = String.fromCharCode(65 + i);
  console.log(ch);

  seatSection.innerHTML += seatAdd([ch, ch + 1, ch + 2, ch + 3, ch + 4]);
}
const seatNumbers = document.querySelectorAll(".seat-number");
const totalSeatAdd = document.querySelector(".total-seat-add");
const totalSeatAvalable = document.querySelector(".total-seat-avalable");
const seatData = document.querySelector(".seat-data");
const cuppon = document.querySelector(".cuppon");
const totalPrice = document.querySelector(".total-price");
const cupponApply = document.querySelector(".cuppon-apply");
const discount = document.querySelector(".discount");
const grandTotal = document.querySelector(".grand-total");
let x = [];
let dd = 0;
function seat(data) {
  return `
<div class="flex justify-between">
          <p>${data}</p>
          <p>Economoy</p>
          <p>550</p>
</div>
`;
}

cupponApply.addEventListener("click", (e) => {
  let g = e.target.previousElementSibling.value;
  if ("e99" == g) {
    discount.parentElement.parentElement.classList.remove("invisible");
    cupponApply.parentElement.classList.add("hidden");
    cupponApply.parentElement.classList.remove("flex");
    dd = 500;
    discount.innerText = dd;
    grandTotal.innerText = Number(totalPrice.innerText) - dd;
  }
});

for (const seatNumber of seatNumbers) {
  seatNumber.addEventListener("click", (e) => {
    if (x.includes(e.target.innerText)) {
      e.target.classList.toggle("bg-green-800");
      totalSeatAvalable.innerText = Number(totalSeatAvalable.innerText) + 1;
      x.splice(x.indexOf(e.target.innerText), 1);
      totalSeatAdd.innerText = x.length;
      seatData.innerHTML = "";
      x.forEach((item) => {
        seatData.innerHTML += seat(item);
      });
      totalPrice.innerText = x.length * 550;
      grandTotal.innerText = x.length * 550;

      discount.parentElement.parentElement.classList.add("invisible");
      cupponApply.previousElementSibling.value = "";
      cupponApply.parentElement.classList.add("flex");
      cupponApply.parentElement.classList.remove("hidden");
      dd = 0;
      discount.innerText = dd;
      grandTotal.innerText = Number(totalPrice.innerText) - dd;
    } else if (x.length < 4) {
      x.push(e.target.innerText);
      totalSeatAdd.innerText = x.length;
      totalSeatAvalable.innerText = Number(totalSeatAvalable.innerText) - 1;
      e.target.classList.toggle("bg-green-800");
      seatData.innerHTML = "";
      x.forEach((item) => {
        seatData.innerHTML += seat(item);
      });
      totalPrice.innerText = x.length * 550;
      grandTotal.innerText = x.length * 550;
    } else {
      return alert("max seat booked");
    }
    if (x.length === 4) {
      //  console.log(cuppon.firstElementChild.removeAttribute("disabled"));
      cuppon.classList.add("border-2", "border-[#1DD100]");
      cuppon.firstElementChild.removeAttribute("disabled");
      cuppon.firstElementChild.nextElementSibling.removeAttribute("disabled");
    } else {
      cuppon.classList.remove("border-2", "border-[#1DD100]");
      cuppon.firstElementChild.setAttribute("disabled", true);
      cuppon.firstElementChild.nextElementSibling.setAttribute(
        "disabled",
        true
      );
    }
  });
}
