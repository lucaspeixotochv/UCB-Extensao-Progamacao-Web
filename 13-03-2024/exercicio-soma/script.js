const form = document.getElementById("form");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!num1.value || !num2.value) {
    alert("Preencha todos os campos");
    return;
  }

  const total = sum(Number(num1.value), Number(num2.value));

  alert(`O valor da soma é ${total}`);
});

const sum = (a, b) => {
  return a + b;
};
