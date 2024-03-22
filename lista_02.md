# Questões objetivas

**1)** Considere o seguinte código JavaScript:

Resposta: Letra B

B) O código avalia a expressão booleana, imprime o resultado true, calcula a soma dos números de 1 a 5 e imprime o resultado no console.

---

**2)**  Analise as funções calcularOrcamento() e calcularOrcamento2(). Num cenário em que a lista gastos fosse incializada como var gastos = [3600, 950, 620, 38] em ambas funções.

Resposta: Letra B

B) A saída de calcularOrcamento() seria: 'Seu saldo é negativo de -1050.' e a de calcularOrcamento2() seria: 'Seu saldo é negativo de -100.'

---

**3)** Considere o seguinte trecho de código em JavaScript:

Resposta: Letra D

D) O código verifica se o número é par, se é divisível por 3 ou se é ímpar. Se for par, exibe a mensagem "O número é par!". Se for divisível por 3 (e não for par), exibe a mensagem "O número é divisível por 3!". Se for ímpar (e não for divisível por 3), exibe a mensagem "O número é ímpar e não é divisível por 3!".

---

**4)** Qual será o resultado impresso no console após a execução desse código?

Resposta: Letra D

D)
Compra 1 aprovada. Saldo restante: 800

Compra 2 aprovada. Saldo restante: 0

Compra 3 aprovada com limite de crédito. Saldo restante: 200

Compra 4 negada. Saldo insuficiente e limite de crédito excedido.

Compra 5 negada. Saldo insuficiente e limite de crédito excedido.

---

**5)** Qual é o principal ciclo de vida de um jogo em Phaser.js?

Resposta: Letra B

B) Preload -> Create -> Update

---

**6)** Qual é o objetivo principal do módulo Arcade Physics em Phaser.js?

Resposta: Letra B

B) Simular interações físicas realistas, como colisões e movimentos, em jogos 2D.

---

# Questões dissertativas

**7)**

Pseudocódigo:

```
Cria a variável
idade <- pedir pro Usuario("Digite a sua idade:")

se idade < 16
então escrever("Você não pode votar.")
senão se idade >= 16 E idade < 18
então escrever("O seu voto é facultativo.")
senão
    escrever("O seu voto é obrigatório.")
```

---

**8)**

Pseudocódigo:

```
classe formaGeometrica
  Método construtor(cor)
    - cor


  Método calcularArea
    retornar 0


classe Retangulo estende formaGeometrica
  Método construtor(cor, b, h)
    chamar o construtor de formaGeometrica passando o atributo (cor)
    - base
    - altura


  Método calcularArea
    retornar base * altura


classe Circulo estende formaGeometrica
  Método construtor(cor, r)
    chamar o construtor de formaGeometrica passando o atributo (cor)
    - raio


  Método calcularArea
    retornar π * raio elevado ao quadrado



retangulo = novo Retangulo("Azul", 5, 8)
Imprimir "retangulo.cor, "|", retangulo.calcularArea"

circulo = novo Circulo ("Rosa", 3)
Imprimir "circulo.cor, "|", circulo.calcularArea, arredonda para 4 casas decimais"
```

---

**9)**

Pseudocódigo:

```
Criar as variáveis:
  velocidadeInicial,
  aceleracao,
  distanciaTotal,
  velocidadeMaxima,
  tempoMaximo,
  tempo = 0,
  distancia = 0;

Enquanto
    distancia < distanciaTotal e tempo <= tempoMaximo:
    Calcule a velocidade atual usando a fórmula: velocidade = velocidadeInicial + aceleracao*tempo.

    Se velocidade > velocidadeMaxima,
        então velocidade = velocidadeMaxima.
    fecha-Se
        Atualize a distancia percorrida: distancia = distancia + velocidade.
        Incrementa o tempo em 1.
fecha-Enquando

Se distancia >= distanciaTotal,
    printe "O carro terminou a corrida em" + tempo + "minutos".
fecha-Se
    Ainda Se tempo > tempoMaximo,
        printe "A corrida não foi completada no tempo máximo".
    fecha-Ainda Se
```

---

**10)**

Pseudocódigo:

```
função MultiplicacaoDeMatrizes(matrizA, matrizB)

// Cria as variáveis, de acordo com o tamanho das matrizes
var linhasA = matrizA.numero_de_linhas;
var colunasA = matrizA.numero_de_colunas;
var linhasB = matrizB.numero_de_linhas;
var colunasB = matrizB.numero_de_colunas;

// Verifica se as matrizes podem ser multiplicadas
Se colunasA for diferente de linhasB, Então
  retorne "As matrizes não podem ser multiplicadas. O número de colunas da matrizA não é igual ao número de linhas da matrizB.";
Fim-Se

  variável matrizResultado = vazio;
        // Loop pelas linhas da matrizA
        Para cada linhaA em matrizA Faça
        linha = []

        Para cada colunaB na transposta da matrizB Faça
            soma = 0

            //    Realiza a multiplicação e soma
            Para i de 0 até o tamanho(linhaA) Faça
                soma = soma + linhaA[i] * colunaB[i]
            Fim-Para

            Adiciona na lista linha(soma)
        Fim Para

        Adiciona na lista matrizResultado(linha)
    Fim Para

    Retorne matrizResultado
Fim Função

// Cria exemplo de multiplicação de matriz:
variável matrizA -> [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

var matrizB -> [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
]

variável matrizProduto = multiplicacaoDeMatrizes entre matrizA e matrizB
Imprime resultado da multiplicação das matrizes
Para cada linha em matrizProduto Faça
     variável linha = matrizProduto de i
     Imprime (linha)
Fim-Para
```
