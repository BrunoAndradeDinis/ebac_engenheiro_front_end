$(document).ready(function () {
  $("header button").click((e) => {
    $("form").slideDown();
  });

  $("#botao-cancelar").click((e) => {
    $("form").slideUp();
  });

  $("form").on("submit", (e) => {
    e.preventDefault();

    const enderecoDaNovaImagem = $("#endereco-de-imagem-nova").val();
    const novoItem = $('<li style="display: none;"></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
          <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>

        </div>`).appendTo(novoItem);
    
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(400)
    $('#endereco-de-imagem-nova').val('')
  });
});
