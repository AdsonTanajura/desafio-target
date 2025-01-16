// Desafio 02

const isFibonacci = (number) => {
    if (number < 0) return false;

    let a = 0;
    let b = 1;

    if (number === a || number === b) return true;

    let next = a + b;

    while (next <= number) {
        if (next === number) return true;
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}

const numero = 21;
if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}