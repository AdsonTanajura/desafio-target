// Desavio 01

// let INDICE = 13;
// let SOMA = 0;
// let K = 0;

// while (K < INDICE) {
//     K++
//     SOMA = SOMA + K
// }

// console.log(SOMA)


// Desafio 02

// const isFibonacci = (number) => {
//     if (number < 0) return false;

//     let a = 0;
//     let b = 1;

//     if (number === a || number === b) return true;

//     let next = a + b;

//     while (next <= number) {
//         if (next === number) return true;
//         a = b;
//         b = next;
//         next = a + b;
//     }

//     return false;
// }

// const numero = 21;
// if (isFibonacci(numero)) {
//     console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
// } else {
//     console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
// }

// Desafio 03

// const faturamentoMensal = [
// 	{
// 		"dia": 1,
// 		"valor": 22174.1664
// 	},
// 	{
// 		"dia": 2,
// 		"valor": 24537.6698
// 	},
// 	{
// 		"dia": 3,
// 		"valor": 26139.6134
// 	},
// 	{
// 		"dia": 4,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 5,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 6,
// 		"valor": 26742.6612
// 	},
// 	{
// 		"dia": 7,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 8,
// 		"valor": 42889.2258
// 	},
// 	{
// 		"dia": 9,
// 		"valor": 46251.174
// 	},
// 	{
// 		"dia": 10,
// 		"valor": 11191.4722
// 	},
// 	{
// 		"dia": 11,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 12,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 13,
// 		"valor": 3847.4823
// 	},
// 	{
// 		"dia": 14,
// 		"valor": 373.7838
// 	},
// 	{
// 		"dia": 15,
// 		"valor": 2659.7563
// 	},
// 	{
// 		"dia": 16,
// 		"valor": 48924.2448
// 	},
// 	{
// 		"dia": 17,
// 		"valor": 18419.2614
// 	},
// 	{
// 		"dia": 18,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 19,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 20,
// 		"valor": 35240.1826
// 	},
// 	{
// 		"dia": 21,
// 		"valor": 43829.1667
// 	},
// 	{
// 		"dia": 22,
// 		"valor": 18235.6852
// 	},
// 	{
// 		"dia": 23,
// 		"valor": 4355.0662
// 	},
// 	{
// 		"dia": 24,
// 		"valor": 13327.1025
// 	},
// 	{
// 		"dia": 25,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 26,
// 		"valor": 0.0
// 	},
// 	{
// 		"dia": 27,
// 		"valor": 25681.8318
// 	},
// 	{
// 		"dia": 28,
// 		"valor": 1718.1221
// 	},
// 	{
// 		"dia": 29,
// 		"valor": 13220.495
// 	},
// 	{
// 		"dia": 30,
// 		"valor": 8414.61
// 	}
// ];

// const calcularFaturamento = (faturamento) => {
//     const diasComFaturamento = faturamento.filter(entry => entry.valor > 0);
//     const valores = diasComFaturamento.map(entry => entry.valor);

//     const menorValor = Math.min(...valores);
//     const maiorValor = Math.max(...valores);

//     const somaTotal = valores.reduce((acc, val) => acc + val, 0);
//     const mediaMensal = somaTotal / valores.length;

//     const diasAcimaDaMedia = diasComFaturamento.filter(entry => entry.valor > mediaMensal).length;

//     return {
//         menorValor,
//         maiorValor,
//         diasAcimaDaMedia,
//     };
// }

// const resultado = calcularFaturamento(faturamentoMensal);

// console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`);
// console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`);
// console.log(`Número de dias acima da média mensal: ${resultado.diasAcimaDaMedia}`);

// Desafio 04

// const faturamentoPorEstado = {
//     SP: 67836.43,
//     RJ: 36678.66,
//     MG: 29229.88,
//     ES: 27165.48,
//     Outros: 19849.53,
// };

// const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// const percentuais = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
//     const percentual = (valor / faturamentoTotal) * 100;
//     return { estado, percentual: percentual.toFixed(2) };
// });

// console.log("Percentual de representação por estado:");
// percentuais.forEach(({ estado, percentual }) => {
//     console.log(`${estado}: ${percentual}%`);
// });

// Desafio 05

const inverterString = (str) => {
    let stringInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

const entrada = "Exemplo de string";
const resultado = inverterString(entrada);

console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);