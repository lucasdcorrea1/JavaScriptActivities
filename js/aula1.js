$(document).ready(function () {

  $("#divnota").hide();
  console.log('test')
  $("#botao2").hide();

});
function loopfor() {
  let number = 5;
  let result;
  let calc = ""
  for (let i = 1; i < 11; i++) {
    result = (number + "X" + i + "="+ i * number + "<hr>")
    calc = `${calc}'  ${result}`
    document.getElementById("loop").innerHTML  = calc;
 }

};
function ex1Array() {
  let linha1 = [];
  linha1.push('Santa Teresinha', 
    'Estação', 
    'Centro', 
    'Jardim Limas', 
    'Aeroporto');
};

function vetor() {
  let vet1 = Array();
  let vet2 = [];
  let vet3 = Array(44, 'banana', true, "Fruta")
  let vet4 = [44, 'banana', true, "Fruta"]
  let vet4t = [44, 'banana', true, "Fruta"]
  console.log(vet4);
  vet4.push("test");
  console.log("Push" + "   " +vet4t);

  let retiraUltimo = vet4.pop();
  console.log(retiraUltimo);

  let retiraPrimeiro = vet4.shift();

  let colocaNoMeio = vet4.splice(2, 0, "Banana", "Prata")

  console.log("Vetro final"  + "   " + vet4);
  console.log("splice" + "   " + colocaNoMeio);
  console.log("shift"  + "   " + retiraPrimeiro);
  console.log("pop" + "   " + retiraUltimo);
}

function calculadora() {
  let result
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
            result = (+number1 + number2);
          break
          case '-':
            if(number1 < number2){
              result = (number2 - number1);
            }else{
              result = (number1 - number2);
            };
          break
          case '*':
            result = (number1 * number2);
          break
          case '/':
            if(number2 === 0){
              alert('Número invalido tente novamente')
            }else{
            result = (number1 / number2);
            };
          break
        };
        $("#Result").text(result);
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
  let er = /[^0-9.]/;
  er.lastIndex = 0;
  let campo = num;
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
  let number10 = parseFloat($('#number10').val());
  let number20 = parseFloat($('#number2').val());
  let numero_maior = number10 > number20 ? 'Maior Número: ' + number10 : 'Maior Número: ' + number20 ;
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
  let number10 = parseFloat($('#number10').val());
  let number20 = parseFloat($('#number20').val());
    $("#ResultEx4").text(number10 === number20 ? 'Informe números diferentes' : hide_show());
};

function rep_nota(){
            // Em seguida, peça ao usuário para informar sua nota na prova
            // (0 a 10). Utilizando o operador ternário, determine se ele foi
            // aprovado (nota igual ou superior a 6) ou reprovado. Informe o
            // resultado ao usuário.
  let nota = parseFloat($('#nota').val());
  if (nota >  10){
    $("#ResultEx4").text('Informe uma nota válida')
  }else{
  $("#ResultEx4").text(nota > 6 ? 'Aprovado' : 'Reprovado');
  }
};

function ajax(x) {
			$("body").show().html("<div class='loader'>"+
			"<div class='inner one'></div>"+
			"<div class='inner two'></div>"+
			"<div class='inner three'></div>"+
		  "</div>");
			setTimeout(function(){
				window.location = x;
			}, 700);
};




function ex_split(){
   
      /*

         1) Solicite ao usuário que informe uma string. Essa string
            deve conter palavras e números, separados entre si por espaços.

         2) Converta a string em um vetor, utilizando split().

         3) Declare dois vetores vazios, um para conter só as palavras
            e outro para conter só os números.

         4) Percorra o vetor resultante do split() e faça a separação entre
            palavras e números, inserindo-os nos vetores apropriados. A
            INSERÇÃO DEVE GARANTIR QUE CADA VETOR ESTEJA SEMPRE EM ORDEM
            ASCENDENTE. Declare e implemente funções sempre que possível.

         5) Converta os vetores de palavras e de números de volta em string,
            separados por vírgula (,). Exiba as duas strings resultantes com
            document.write().

         6) Boa diversão!         

      */
let imputNtxt = $("#txtNumero_texto").val()
let vet_txt = [];
let vet_num = [];

vet_txt.push(returnArrayTxt(imputNtxt));
vet_num.push(returnArrayNum(imputNtxt));

$("#resultEx19_1").text('Palavras: ' + vet_txt);
$("#resultEx19_2").text('números: ' + vet_num );
};

function returnArrayTxt(test){
  let txt;
  txt = test.split(/\d+/);
  return txt
};

function returnArrayNum(test){
let Num;
  Num = test.split('').filter(function(numbers){
    if($.isNumeric(numbers)){
      return(numbers);
    }  
  });
  return Num 
};

