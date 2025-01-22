$(document).ready(function () {

    // evento de click no botão
    $('.lista-veiculos button').click(function(){
      const destino = $('#contato');
      const nomeVeiculo = $(this).parent().find('h3').text()
  
      $('html').animate({
        scrollTop: destino.offset().top
      }, 1000)
  
      $('#veiculo-interesse').val(nomeVeiculo)
    })
    // evento de click no botão

  $("#carousel-images").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function (e) {
    e.preventDefault();
    $("nav").slideToggle();
  });
  /* MASCARA DE INPUTS */
  // let mascara = celular ? '(00) 0 0000-0000' : '(00) 0000-0000' - usabilidade de mascara em caso de validações, celular ou telefone

  $("#telefone").mask("(00) 0 0000-0000", { placeholder: "(16) 9 4002-8922" });
  // $("#nome").mask('SSS-0000') - no caso de placa
  /* MASCARA DE INPUTS */

  /* VALIDATION JQUERY */
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      "veiculo-interesse": {
        required: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: 'Insira o seu Nome!',
      email: 'Insira o seu Email',
      telefone: 'Insira o seu Telefone',
      "veiculo-interesse": 'Informe o seu veículo de interesse!',
      mensagem: 'Precisamos que mande ao menos uma mensagem!',
    },
    submitHandler: function(form){
      alert.log('Cadastro realizado com sucesso!')
      $('form').reset()
    },
    invalidHandler: function(evento, validador){
      let camposIncorretos = validador.numberOfInvalids()
      alert(`Existem ${camposIncorretos} campos incorretos!`)
    }
  });

  /* VALIDATION JQUERY */

});
