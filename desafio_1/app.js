// Altera o conteúdo da tag h1
let titulo = document.querySelector('h1');
titulo.innerHTML = ' Hora do Desafio';

// Exibe no console uma mensagem ao clicar no botão Console
function exibirNoConsole() {
    console.log('O botão foi clicado');
}

// Exibe um alerta com a mensagem Eu amo JS
function exibirAlerta() {
    alert('Eu amo JS');
}

// Pergunta o nome de uma cidade e mostra um alerta com a resposta personalizada
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}

// Soma dois números digitados e mostra o resultado
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número:'));
    let segundoNumero = parseInt(prompt('Digite o segundo número:'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}