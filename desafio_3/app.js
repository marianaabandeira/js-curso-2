// 1-
function calculaIMC(altura, peso) { 
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC com 2 casas decimais
}

// 2-
function calcularFatorial(numero) {
    // 1️⃣ Se o número for 0 ou 1, o fatorial é 1
    if (numero === 0 || numero === 1) {
        return 1; // Fatorial de 0 e 1 é 1
    }
    
    // 2️⃣ Vamos criar uma variável para armazenar o resultado, começando em 1
    let fatorial = 1;

    // 3️⃣ Vamos multiplicando de 2 até o número escolhido
    for (let i = 2; i <= numero; i++) {
    
        fatorial *= i; // Multiplica o valor atual pelo próximo número
  }

 // 4️⃣ Retorna o valor final do fatorial
    return fatorial;
}

//3- 
function converterDolarParaReal (valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    // Retorna o valor em reais com 2 casas decimais
    return valorEmReais.toFixed(2);

}

// 4-
function calcularAreaPerimetroSalaRetangular (altura, largura) {
    let area = (altura * largura)
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

// 5-
function calcularAreaPerimetroSalaCirgular (area) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// 6-
function mostrarTabuada (numero) {
    for (let i = 1; i <= 10; i++) {
    // let i = 1; → Começa criando uma variável 'i' e dando valor 1 (contador)
    // i <= 10; → Enquanto 'i' for menor ou igual a 10, o código dentro do for vai rodar
    // i++ → A cada repetição, aumenta 'i' em 1 (equivale a i = i + 1)
    let resultado = numero * i;
    // Calcula o resultado da multiplicação do número pelo contador i
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

