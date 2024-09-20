function seatAdd(seatNo) {
  return `
     <p class="px-9 py-2">${seatNo[0]}</p>
            <button
              class="duration-200 ease-in-out hover:bg-slate-600 hover:text-white px-9 py-2 text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[1]}
            </button>
            <button
              class="px-9 py-2 duration-200 ease-in-out hover:bg-slate-600 hover:text-white text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[2]}
            </button>
            <p></p>
            <button
              class="px-9 py-2 duration-200 ease-in-out hover:bg-slate-600 hover:text-white text-lg flex justify-center rounded-lg bg-[#0307121A]"
            >
            ${seatNo[3]}
            </button>
            <button
              class="px-9 py-2 duration-200 ease-in-out hover:bg-slate-600 hover:text-white text-lg flex justify-center rounded-lg bg-[#0307121A]"
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
