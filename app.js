
function insert( num){
    //resultado é nosso input
   let numero = document.getElementById('resultado').innerHTML;
   //insere um numero do lado do outro
   document.getElementById('resultado').innerHTML = numero + num;
} 

function clean(){
   document.getElementById('resultado').innerHTML = ""
}

function back(){
   var resultado = document.getElementById('resultado').innerHTML; 
   document.getElementById('resultado').innerHTML = resultado.substring(0, [resultado.length] -1);
} //Substring: str.substring(indexStart[, indexEnd])
//Se indexEnd for omitido, substring() extrai caracteres até o fim da string.
function calcular(){
   var resultado =document.getElementById('resultado').innerHTML;
   if(resultado){
      document.getElementById('resultado').innerHTML = eval(resultado);
   }
   else{
      document.getElementById("resultado").innerHTML = "Nada para calcular"
   }
}


//var num1 = parseInt(prompt("Digite o primeiro número desejado"))
//document.querySelector('.num1').innerText += ' ' + num1

//do {
   /// var operacao = prompt("Digite uma das quatro operações básicas desejada: Soma(+), Subtração(-), Multiplicação(*), Divisão(/)");

//} while (operacao != "+" && operacao != "-" && operacao != "*" && operacao != "/")
//document.querySelector('.operacao').innerText += '  ' + "(" + operacao + ")"

//var num2 = parseInt(prompt("Digite o segundo número desejado"))
//document.querySelector('.num2').innerText += ' ' + num2

//switch (operacao) {
    //case "+":
      //  var resultado = num1 + num2;
       // alert(resultado)
       // document.querySelector('.Resultado').innerText += ' ' + resultado
       // break;
    //case "-":
       // var resultado = num1 - num2;
       // alert(resultado)
       // document.querySelector('.Resultado').innerText += ' ' + resultado
       // break;
    //case "*":
        //var resultado = num1 * num2;
        //alert(resultado)
        //document.querySelector('.Resultado').innerText += ' ' + resultado
       // break;
   // case "/":
       // var resultado = num1 / num2;
       // if (num2 == 0) {
       //     alert("Não é possível dividir por zero")
       // } else {
        //    alert(resultado)
         //   document.querySelector('.Resultado').innerText += ' ' + resultado
         //   break;
        //}
//}