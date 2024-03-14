const form = document.getElementById("form");
const amount = document.getElementById("value");
const installments = document.getElementById("installments");
const view = document.getElementById("view");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!amount.value || !installments.value) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const value = Number(amount.value);
  const installmentsValue = Number(installments.value);

  let totalValue = null;

  if (installmentsValue === 1) {
    totalValue = value - value * 0.1;
  } else if (installmentsValue <= 3) {
    totalValue = value + value * 0.5;
  } else {
    totalValue = value + value * 0.1;
  }

  const parcela = totalValue / installmentsValue;

  const parcelasArray = Array.from(
    { length: installmentsValue },
    (_, index) => index + 1
  );

  view.innerHTML = parcelasArray
    .map((index) => {
      return `<p>${index}x de ${parcela.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}</p>`;
    })
    .join("");
});
