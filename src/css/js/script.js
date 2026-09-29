// ===============================================
// Vinheria Agnello - Sistema Básico de Gerenciamento de Vinhos
// ===============================================

// ---------- Coleta de dados com prompt() ----------
var nomeVinho = prompt("Digite o nome do vinho:");
var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
var safra = Number(prompt("Digite a safra (ano) do vinho:"));
var quantidade = Number(prompt("Digite a quantidade em estoque:"));

// ---------- Confirmação do cadastro ----------
alert("Cadastro realizado! Veja os detalhes no console.");

// ---------- Exibição dos detalhes no console ----------
alert("A seguir, veja os detalhes do vinho no console.");

console.log("===== VINHERIA AGNELLO =====");
console.log("Nome: " + nomeVinho);
console.log("Tipo: " + tipoVinho);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidade + " garrafas");
console.log("============================");
