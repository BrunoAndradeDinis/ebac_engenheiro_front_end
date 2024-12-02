$(document).ready(() => {
  const $form = $("#form-atividade");
  const imgAprovado =
    '<img src="./src/images/aprovado.png" alt="Emoji festejando Aprovado">';
  const imgReprovado =
    '<img src="./src/images/reprovado.png" alt="Emoji Decepcionado Reprovado">';
  const atividades = [];
  const notas = [];
  const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
  const spanReprovado = 'span class="resultado reprovado">Reprovado</span>'
  const notaMinima = parseInt(prompt("Digite a nota mínima: "), 10);

  $form.on("submit", (e) => {
    e.preventDefault();

    console.log($("#nome-atividade").val());
    console.log($("#nota-atividade").val());
  });
});
