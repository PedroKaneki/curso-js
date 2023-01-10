const prompt = require('prompt-sync')();//serve para capturar dados do usuário como o input do python.

nome = prompt('Digite seu nome: ');
idade = parseInt(prompt('Digite sua idade: '));
altura = parseFloat(prompt('Digite sua altura:'));

console.log(`Nome:${nome}|Idade:${idade}|Altura:${altura}`);