const btnE1 = document.getElementById("bills");
const tipinput = document.getElementById("tip");
const calinput = document.getElementById("calculate");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = btnE1.value;
    const tipValue = tipinput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);

}
btnE1.addEventListener("click", calculateTotal);