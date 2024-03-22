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

// Cria a variável
// idade <- pedir pro Usuario("Digite a sua idade:")

// se idade < 16
// então escrever("Você não pode votar.")
// senão se idade >= 16 E idade < 18
// então escrever("O seu voto é facultativo.")
// senão
//     escrever("O seu voto é obrigatório.")

// Questão 8

// classe formaGeometrica
//   Método construtor(cor)
//     - cor

//   Método calcularArea
//     retornar 0

// classe Retangulo estende formaGeometrica
//   Método construtor(cor, b, h)
//     chamar o construtor de formaGeometrica passando o atributo (cor)
//     - base
//     - altura

//   Método calcularArea
//     retornar base * altura

// classe Circulo estende formaGeometrica
//   Método construtor(cor, r)
//     chamar o construtor de formaGeometrica passando o atributo (cor)
//     - raio

//   Método calcularArea
//     retornar π * raio elevado ao quadrado

// retangulo = novo Retangulo("Azul", 5, 8)
// Imprimir "retangulo.cor, "|", retangulo.calcularArea"

// circulo = novo Circulo ("Rosa, 3")
// Imprimir "circulo.cor, "|", circulo.calcularArea, arredonda para 4 casas decimais"

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

// Pseudocódigo:

// Cria-se a função multiplicacaoDeMatrizes, com os parâmetros matrizA e matrizB
// função MultiplicacaoDeMatrizes(matrizA, matrizB)

// // Cria as variáveis, de acordo com o tamanho das matrizes
// var linhasA = matrizA.numero_de_linhas;
// var colunasA = matrizA.numero_de_colunas;
// var linhasB = matrizB.numero_de_linhas;
// var colunasB = matrizB.numero_de_colunas;

// // Verifica se as matrizes podem ser multiplicadas
// Se colunasA for diferente de linhasB, Então
//   retorne "As matrizes não podem ser multiplicadas. O número de colunas da matrizA não é igual ao número de linhas da matrizB.";
// Fim-Se

//   variável matrizResultado = vazio;
//         // Loop pelas linhas da matrizA
//         Para cada linhaA em matrizA Faça
//         linha = []

//         Para cada colunaB na transposta da matrizB Faça
//             soma = 0

//             //    Realiza a multiplicação e soma
//             Para i de 0 até o tamanho(linhaA) Faça
//                 soma = soma + linhaA[i] * colunaB[i]
//             Fim-Para

//             Adiciona na lista linha(soma)
//         Fim Para

//         Adiciona na lista matrizResultado(linha)
//     Fim Para

//     Retorne matrizResultado
// Fim Função

// // Cria exemplo de multiplicação de matriz:
// variável matrizA -> [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// var matrizB -> [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1],
// ]

// variável matrizProduto = multiplicacaoDeMatrizes entre matrizA e matrizB
// Imprime resultado da multiplicação das matrizes
// Para cada linha em matrizProduto Faça
//      variável linha = matrizProduto de i
//      Imprime (linha)
// Fim-Para