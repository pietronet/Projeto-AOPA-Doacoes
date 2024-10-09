const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const cpf = document.getElementById('cpf');
const valor_doado = document.getElementById('valor_doado');

document.addEventListener('DOMContentLoaded', function(){
console.log(nome);


form.addEventListener('submit', function(event) {
event.preventDefault(); // Impede a atualização da página

// Captura os valores dos campos de entrada
const dadosFormulario = {
nome: nome.value,
};

// Exibe os dados capturados no console
console.log('Dados do Formulário:', dadosFormulario);
});
});