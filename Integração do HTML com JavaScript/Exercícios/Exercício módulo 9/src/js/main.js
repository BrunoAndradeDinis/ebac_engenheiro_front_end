$(document).ready(function () {
  const tabela = $("tbody").get(0); // obtendo o DOM da tbody, para o uso od
  const formulario = $("form");
  const botaoEditar = '<button id="editar">✍ </button>';

  // evento de envio do formulário
  formulario.on("submit", (e) => {
    e.preventDefault();
    const inputTarefa = $("#tarefa");

    const novaLinha = tabela.insertRow(0);
    const celulaTarefa = novaLinha.insertCell(0);
    const celulaDeInteracao = novaLinha.insertCell(1);

    $(celulaTarefa).append(`<span>${inputTarefa.val()}</span>`);
    $(celulaDeInteracao).append(botaoEditar);

    atualizarDados();
  });

  // evento de "riscar" a tarefa
  $("table").on("click", "td span", function () {
    let tr = $(this).closest("tr");

    $(this).toggleClass("line-through");

    $(this).hasClass("line-through")
      ? tr.find("button").attr("id", "excluir").text("🗑️")
      : tr.find("button").attr("id", "editar").text("✍");

    atualizarDados();
  });

  // evento de editar a tarefa
  $("table").on("click", "#editar", function () {
    let button = $(this);
    let td = button.closest("td");
    let span = td.siblings("td").find("span"); // .siblings para pegar a td que tem o span
    let input = $("<input>").val(span.text()); // criação de um input com o texto do span

    button.attr("id") === "editar"
      ? button.text("✅").attr("id", "salvar")
      : button.text("🟥");

    button.attr("id") === "salvar"
      ? $(span).replaceWith(input)
      : button.text("🟥");
  });

  //evento de salvar a edição de tarefa
  $("table").on("click", "#salvar", function () {
    let button = $(this);
    let td = button.closest("td");
    let input = td.siblings("td").find("input");
    let texto = input.val();
    let span = $("<span>").text(texto);

    input.replaceWith(span);

    button.attr("id", "editar").text("✍");
  });

  // evento de excluir a tarefa
  $("table").on("click", "#excluir", function () {
    let button = $(this);
    let td = button.closest("td");
    let tr = button.closest("tr");
    let span = td.siblings("td").find("span");

    tr.remove();
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
