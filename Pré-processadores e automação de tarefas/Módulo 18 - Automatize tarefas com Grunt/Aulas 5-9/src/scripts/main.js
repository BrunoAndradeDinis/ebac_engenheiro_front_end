document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let numeroMaximo = document.getElementById("numero-maximo").value;
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.round(Math.random() * numeroMaximo);
      numeroAleatorio =
        numeroAleatorio <= 0 ? numeroAleatorio + 1 : numeroAleatorio;

      document.getElementById("resultado-valor").innerText = numeroAleatorio;
      document.querySelector(".resultado").style.display = "block";
    });
});
