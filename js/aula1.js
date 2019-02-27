$(document).ready(function () {
  document.getElementById("sidebar").style = "display:none";

});

function closeNav() {
  document.getElementById("sidebar").style = "display:none";
  document.getElementById("container").style.marginLeft = "100px";
  document.getElementById("main3").style.marginLeft = "0";
}

function openNav() {
  document.getElementById("sidebar").style = "258px";
  document.getElementById("container").style.marginLeft = "220px";
  document.getElementById("main3").style.marginLeft = "225px";
};
function calculadora() {
  let Result
  let number1 = parseFloat($('#number1').val());
  let number2 = parseFloat($('#number2').val());
  let op = $('#operation').val();

      if(op != "+" && op != "-" && op != "*" && op != "/" ){
        alert('Operação errada !')
      }else if(number1 == NaN || number2 == NaN){
        alert('Infome um número !')
      }else{
        switch(op){
          case '+':
            Result = (+number1 + number2);
          break
          case '-':
            if(number1 < number2){
              Result = (number2 - number1);
            }else{
              Result = (number1 - number2);
            };
          break
          case '*':
            Result = (number1 * number2);
          break
          case '/':
            if(number2 === 0){
              alert('Número invalido tente novamente')
            }else{
            Result = (number1 / number2);
            };
          break
        };
        $("#Result").text(Result);
      };
};

function batata() {
  setTimeout(function(){ 
    $("#body").show().html("<div class='cont'>" +
    "<div class='item item-1'></div>"+
    "<div class='item item-2'></div>"+
    "<div class='item item-3'></div>"+
    "<div class='item item-4'></div>"+
     "</div>");
     setTimeout(function(){ 
      $("#body").show();
     }, 300);
   },0 );
};

function somenteNumeros(num) {
  var er = /[^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
};

function impar_par(){
          /*
            Peça para o usuário informar um número inteiro
            e responda na sequência, com alert(), se esse número
            é par ou ímpar.
         */

  let integer1 = parseFloat($('#integer1').val());
  let test = integer1 % 2;
  if(test === 0){
    $("#ResultEx1").text('Par');
  }else{
    $("#ResultEx1").text("Impar");
  }
};

function ano_bissexto() {
    /* Peça para o usuário informar um ano e diga se esse ano
            é ou não bissexto.

            Regra:

            SE ano É MÚLTIPLO DE 400
               ENTÃO ano é bissexto
            SENÃO, SE ano é MÚLTIPLO DE 100
               ENTÃO ano _não_ é bissexto
            SENÃO, SE ano É MÚLTIPLO DE 4
               ENTÃO ano é bissexto
            SENÃO
               ano _não_ é bissexto

            Para testar:
            1973: N
            2000: S
            1800: N
            2002: N
            2016: S
               
         */
  let ano = parseFloat($('#ano').val());
  let nou = 'Ano não é bissexto'
  let yes = 'Ano é bissexto'
   Math.trunc()
  if (ano % 400 == 0 ) {
    $("#ResultEx2").text(yes);
  }else if (ano % 100 == 0) {
    $("#ResultEx2").text(nou);
  } else if (ano % 4 == 0) {
    $("#ResultEx2").text(yes);
  } else {
    $("#ResultEx2").text(nou);
  };
 
};

function BuscaMes(){
  /* 
            Escreva um programa que receba um número correspondente
            a um mês (1 a 12) e informe ao usuário com alert() quantos
            dias tem o mês informado (28, 30 ou 31 - ignore o caso dos
            anos bissextos).

            Utilize a estrutura switch...case.

         */
  let now = new Date
  let e = document.getElementById("mes");
  let itemSelecionado = e.options[e.selectedIndex].value;
  let lastDay = new Date(now.getFullYear(), +itemSelecionado + 1, 0);
  $("#ResultEx3").text(lastDay.getDate());
};

function hide_show(){
  let number1 = parseFloat($('#number1').val());
  let number2 = parseFloat($('#number2').val());
  let numero_maior = number1 > number2 ? 'Maior Número: ' + number1 : 'Maior Número: ' + number2 ;
  $("#ResultEx4").text(numero_maior);
  $("#divnumber1").hide();
  $("#divnumber2").hide();
  $("#botao1").hide();
  $("#divnota").show();
  $("#botao2").show();
}
function numeros_diferentes(){
               // Peça ao usuário para informar dois números, os quais devem
            // ser diferentes entre si. Emita uma mensagem de erro caso
            // os dois números sejam iguais.
            // Utilize o operador ternário para determinar qual dos
            // dois números é maior e informe ao usuário.
  let number1 = parseFloat($('#number1').val());
  let number2 = parseFloat($('#number2').val());
    $("#ResultEx4").text(number1 === number2 ? 'Informe números diferentes' : hide_show());
};

function rep_nota(){
            // Em seguida, peça ao usuário para informar sua nota na prova
            // (0 a 10). Utilizando o operador ternário, determine se ele foi
            // aprovado (nota igual ou superior a 6) ou reprovado. Informe o
            // resultado ao usuário.
  let nota = parseFloat($('#nota').val());
  $("#ResultEx4").text(nota > 6 ? 'Aprovado' : 'Reprovado');
};
