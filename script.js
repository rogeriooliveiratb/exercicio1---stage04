
/* O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let number1 = prompt("Digite o primeiro número")
let number2 = prompt("Digite o segundo número")
let result = ((Number(number1) + Number(number2)))
alert("Resultado da soma é: " + result)

let result2 = ((Number(number1) - Number(number2)))
alert("Resultado da subtração é: " + result2)

let result3 = ((Number(number1) * Number(number2)))
alert("Resultado da multiplicação é: " + result3)

let result4 = ((Number(number1) / Number(number2)))
alert("Resultado da divisão é: " + result4)

let result5 = ((Number(number1) % Number(number2)))
alert("O Resultado do resto da divisão é: " + result5)

let evenNumber = "0, 2, 4" 
let oddNumber = "1, 3, 5" 

if (evenNumber) {
    alert ('Esse número é par')
} else {
    alert ('Esse número é impar')
}