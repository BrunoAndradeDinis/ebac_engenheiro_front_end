// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("btn-buscar-cep").addEventListener("click", () => {
//     // AJAX - Asynchronous JavaScript an XML
//     const xhttp = new XMLHttpRequest();
//     const cep = document.getElementById("cep").value;
//     const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

//     xhttp.open("GET", endpoint);
//     xhttp.send();
//     // https://viacep.com.br/ws/01001000/json/
//   });
// });

$(document).ready(function () {
  $("#cep").mask("00000-000");

  $("#btn-buscar-cep").click(function (e) {
    e.preventDefault();
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
    const botao = $(this);
    $(botao).find("i").addClass("d-none");
    $(botao).find("span").removeClass("d-none");

    $.ajax(endpoint).done(function (resposta) {
      const logradouro = resposta.logradouro;
      const bairro = resposta.bairro;
      const cidade = resposta.localidade;
      const estado = resposta.uf;
      const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

      setTimeout(function () {
        $("#endereco").val(endereco);
        $(botao).find("span").addClass("d-none");
        $(botao).find("i").removeClass("d-none");
      }, 500);
    });

    // $.ajax({
    //   type: "GET",
    //   url: endpoint,
    //   data: "data",
    //   dataType: "dataType",
    //   success: function (response) {

    //   }
    // });
  });
});
