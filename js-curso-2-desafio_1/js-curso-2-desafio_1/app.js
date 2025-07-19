// Alterando o conteúdo da tag <h1>
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Função para exibir a mensagem no console
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}   
// Função para exibir um alerta com a mensagem quando o botão "Alerta" for pressionado
function exibirAlerta() {
    alert('Eu amo JS');
}
// Função para exibir um prompt e mostrar o valor digitado
function exibirPrompt() {
let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito');
alert(`Estive em ${nomeDaCidade} e lembrei de você!`);
}

// Função para somar dois números e exibir o resultado
function somandoDoisNumeros() {
let primeiroNumero = parseInt(prompt('Digite o primeiro número:'));
let segundoNumero = parseInt(prompt('Digite o segundo número:'));
let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} e ${segundoNumero} = ${resultado}`);
}
