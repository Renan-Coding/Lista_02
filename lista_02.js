// Questão 1 | Letra B
// let x = 17
// let y = 5
// let z = 8

// resultadoBooleano =  (x < y) && (z > x) || (x - y > z)
// console.log(resultadoBooleano)

// const listaDeNumeros = [1, 2, 3, 4, 5];
// let soma = 0;

// for (let i = 0; i < listaDeNumeros.length; i++) {
//   soma += listaDeNumeros[i];
// }

// console.log("A soma dos números é:", soma);

// Questão 2 | Letra B

// function calculaOrcamento(){

//     var gastos = [3600, 950, 620, 38];
//     var totalGastos = gastos[0];
//     var salario = 3500;
//     var saldo = 0;
//     var statusSaldo =  'positivo';
//     var i = 1;

//     do{
//         totalGastos += gastos[i];
//         i++;
//     } while(salario >= totalGastos && i<gastos.length)

//     saldo = salario - totalGastos;

//     if (saldo < 0 ){
//         statusSaldo = 'negativo';
//     }
//     console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
// }

// function calculaOrcamento2(){

//     var gastos = [3600, 950, 620, 38];
//     var totalGastos = gastos[0];
//     var salario = 3500;
//     var statusSaldo =  'positivo';
//     var saldo = 0;
//     var i = 1;

//     while(salario >= totalGastos && i<gastos.length){
//         totalGastos += gastos[i];
//         i++;
//     }

//     saldo = salario - totalGastos;
//     if (saldo < 0 ){
//         statusSaldo = 'negativo';
//     }
//     console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
// }

// calculaOrcamento();
// calculaOrcamento2();

// Questão 3 | Letra D
// const numero = 10;

// if (numero % 2 === 0) {
//   console.log("O número é par!");
// } else if (numero % 3 === 0) {
//   console.log("O número é divisível por 3!");
// } else {
//   console.log("O número é ímpar e não é divisível por 3!");
// }

// Questão 4 | Letra D
// var saldo = 1000;
// var limiteCredito = 500;
// var valorCompras = [200, 800, 300, 400, 600];

// for (var i = 0; i < valorCompras.length; i++) {
//     var valorCompra = valorCompras[i];

//     if (valorCompra <= saldo) {
//         console.log("Compra " + (i+1) + " aprovada. Saldo restante: " + (saldo - valorCompra));
//         saldo -= valorCompra;
//     } else if (valorCompra <= saldo + limiteCredito) {
//         console.log("Compra " + (i+1) + " aprovada com limite de crédito. Saldo restante: " + ((saldo + limiteCredito) - valorCompra));
//         saldo = 0;
//         limiteCredito -= (valorCompra - saldo);
//     } else {
//         console.log("Compra " + (i+1) + " negada. Saldo insuficiente e limite de crédito excedido.");
//     }
// }

// Questão 5 | Letra B

// Questão 6 | Letra B

// Questão 7

// var idade = prompt("Digite a sua idade:");

// if (idade < 16) {
//   console.log("Você não pode votar.");
// } else if (idade >= 16 && idade < 18) {
//   console.log("O seu voto é facultativo.");
// } else {
//   console.log("O seu voto é obrigatório.");
// }

// Questão 8

// class formaGeometrica {
//   constructor(cor) {
//     this.cor = cor;
//   }

//   calcularArea() {
//     return 0;
//   }
// }

// class Retangulo extends formaGeometrica {
//   constructor(cor, b, h) {
//     super(cor);
//     this.b = b;
//     this.h = h;
//   }

//   calcularArea() {
//     return this.b * this.h;
//   }
// }

// class Circulo extends formaGeometrica {
//   constructor(cor, r) {
//     super(cor);
//     this.r = r;
//   }

//   calcularArea() {
//     return Math.PI * Math.pow(this.r, 2);
//   }
// }

// const retangulo = new Retangulo("Azul", 5, 8);
// console.log(retangulo.cor,"|", retangulo.calcularArea());

// const circulo = new Circulo("Rosa", 3);
// console.log(circulo.cor, "|", circulo.calcularArea().toFixed(4));

// Questão 9

// Pseudocódigo:

// Criar as variáveis:
//   velocidadeInicial,
//   aceleracao,
//   distanciaTotal,
//   velocidadeMaxima,
//   tempoMaximo,
//   tempo = 0,
//   distancia = 0;

// Enquanto
// distancia < distanciaTotal e tempo <= tempoMaximo:
// Calcule a velocidade atual usando a fórmula: velocidade = velocidadeInicial + aceleracao*tempo.

// Se velocidade > velocidadeMaxima,
// então velocidade = velocidadeMaxima.
// fecha-Se
// Atualize a distancia percorrida: distancia = distancia + velocidade.
// Incrementa o tempo em 1.
// fecha-Enquando

// Se distancia >= distanciaTotal,
// printe "O carro terminou a corrida em" + tempo + "minutos".
// fecha-Se

// Ainda Se tempo > tempoMaximo,
// printe "A corrida não foi completada no tempo máximo".
// fecha-Ainda Se

// Questão 10

// function MultiplicacaoDeMatrizes(matrizA, matrizB) {
//   var linhasA = matrizA.length;
//   var colunasA = matrizA[0].length;
//   var linhasB = matrizB.length;
//   var colunasB = matrizB[0].length;

//   if (colunasA !== linhasB) {
//     return "As matrizes não podem ser multiplicadas. O número de colunas da matrizA não é igual ao número de linhas da matrizB.";
//   }

//   var matrizResultado = [];
//   for (let x = 0; x < linhasA; x++) {
//     var linha = [];
//     for (let y = 0; y < colunasB; y++) {
//       var soma = 0;
//       for (let z = 0; z < colunasA; z++) {
//         soma += matrizA[x][z] * matrizB[z][y];
//       }
//       linha.push(soma);
//     }
//     matrizResultado.push(linha);
//   }

//   return matrizResultado;
// }
// var matrizA = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var matrizB = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1],
// ];

// var matrizProduto = MultiplicacaoDeMatrizes(matrizA, matrizB);
// console.log("Resultado da multiplicação das matrizes:");
// for (let i = 0; i < matrizProduto.length; i++) {
//     var linha = matrizProduto[i];
//     console.log(linha);
// }