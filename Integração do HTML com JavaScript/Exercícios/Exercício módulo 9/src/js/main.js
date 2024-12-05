$(document).ready(function () {
  const tabela = $("tbody").get(0); // obtendo o DOM da tbody, para o uso od
  const formulario = $("form");
  const botaoEditar = '<button id="editar">✍ </button>';

  // evento de envio do formulário
  formulario.on("submit", (e) => {
    e.preventDefault();
    const inputTarefa = $("#tarefa");
    const listaTarefas = $('#lista-tarefas')
    const novaLinha = $('<li>');
    const celulaTarefa = $('<div>');
    const celulaDeInteracao = $('<div>');

    listaTarefas.append(novaLinha)
    $(celulaTarefa).append(`<span>${inputTarefa.val()}</span>`);
    $(celulaDeInteracao).append(botaoEditar);

    novaLinha.append(celulaTarefa)
    novaLinha.append(celulaDeInteracao)
    inputTarefa.val('')
    inputTarefa.focus()

    atualizarDados();
  });

  // evento de "riscar" a tarefa
  $("ul").on("click", "div span", function () {
    let li = $(this).closest("li");

    $(this).toggleClass("line-through");

    $(this).hasClass("line-through")
      ? li.find("button").attr("id", "excluir").text("🗑️")
      : li.find("button").attr("id", "editar").text("✍");

    atualizarDados();
  });

  // evento de editar a tarefa
  $("ul").on("click", "#editar", function () {
    let button = $(this);
    let div = button.closest("div");
    let span = div.siblings("div").find("span"); // .siblings para pegar a td que tem o span
    let input = $("<input>").val(span.text()); // criação de um input com o texto do span

    button.attr("id") === "editar"
      ? button.text("✅").attr("id", "salvar")
      : button.text("🟥");

    button.attr("id") === "salvar"
      ? $(span).replaceWith(input)
      : button.text("🟥");
  });

  //evento de salvar a edição de tarefa
  $("ul").on("click", "#salvar", function () {
    let button = $(this);
    let td = button.closest("div");
    let input = td.siblings("div").find("input");
    let texto = input.val();
    let span = $("<span>").text(texto);

    input.replaceWith(span);

    button.attr("id", "editar").text("✍");
  });

  // evento de excluir a tarefa
  $("ul").on("click", "#excluir", function () {
    let button = $(this);
    let div = button.closest("div");
    let li = button.closest("li");
    let span = div.siblings("div").find("span");

    li.remove();
    atualizarDados();
  });
  atualizarDados();

  // atualização de contagem
  function atualizarDados() {
    let tarefasTotal = $("span").length;
    let tarefasFeitas = $('span').filter(function() {
      return $(this).css('text-decoration-line') === 'line-through';
    }).length;
    let tarefasAfazer = tarefasTotal - tarefasFeitas

    $('#tarefas-total').text(tarefasTotal)
    $('#tarefas-a-fazer').text(tarefasAfazer)
    $('#tarefas-feitas').text(tarefasFeitas)
  }
});
