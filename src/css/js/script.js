// Sistema de Estoque de Vinhos

alert("Bem-vindo ao sistema de gerenciamento de vinhos da Vinheria Agnello!")


var nomeVinho = prompt("Digite o nome do vinho:");
var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):")
var safra = Number(prompt("Digite a safra (ano) do vinho:"))
var quantidade = Number(prompt("Digite a quantidade em estoque:"))

var anoAtual = 2026;
var idadeVinho = anoAtual - safra;
alert("Cadastro realizado! Veja os detalhes no console.")


alert("A seguir, veja os detalhes do vinho no console.")

console.log("VINHERIA AGNELLO");
console.log("Detalhes do vinho cadastrado:");
console.log("Nome: " + nomeVinho);
console.log("Tipo: " + tipoVinho);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidade + " garrafas");
console.log("============================");



