$(document).ready(() => {
  const $form = $("#form-atividade");
  const imgAprovado =
    '<img src="./src/images/aprovado.png" alt="Emoji festejando Aprovado">';
  const imgReprovado =
    '<img src="./src/images/reprovado.png" alt="Emoji Decepcionado Reprovado">';
  const atividades = new Array();
  const notas = new Array();
  const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
  const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
  const corpoTabela = $("tbody");
  const notaMinima = parseInt(prompt("Digite a nota mínima: "), 10);

  let linhas = "";
  $form.on("submit", (e) => {
    e.preventDefault();

    adicionaLinha();
    atualizaMediaFinal()
  });

  function adicionaLinha() {
    const inputNomeAtividade = $("#nome-atividade");
    const inputNotaAtividade = $("#nota-atividade");

    if (atividades.includes(inputNomeAtividade.val())) {
      alert(`a atividade: ${inputNomeAtividade.val()} ja foi inserida! `);
      inputNomeAtividade.focus();
    } else {
      atividades.push(inputNomeAtividade.val());
      notas.push(parseFloat(inputNotaAtividade.val()));

      let linha = $("<tr></tr>");
      linha.append(`<td>${inputNomeAtividade.val()}</td>`);
      linha.append(`<td>${inputNotaAtividade.val()}</td>`);
      linha.append(`<td>${inputNotaAtividade.val() >= notaMinima ? imgAprovado : imgReprovado}</td>`);

      linhas += linha.innerHtml;

      inputNomeAtividade.val("");
      inputNotaAtividade.val("");

      corpoTabela.append(linha);
    }
  }

  function atualizaMediaFinal() {
    const mediaFinal = parseFloat(calculaMediaFinal().toFixed(2));

    $("#media-final-valor").html(mediaFinal);
    $("#media-final-resultado").html(mediaFinal >= notaMinima ? spanAprovado : spanReprovado)
  }
  function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
      somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
  }
});
