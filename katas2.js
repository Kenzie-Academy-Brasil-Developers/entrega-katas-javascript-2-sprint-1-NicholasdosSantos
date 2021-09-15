// comece a criar a sua função add na linha abaixo
function add(x, y){
    soma = x + y
    return soma
}
console.assert(add(3,5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(a , b){
    res = 0
    for(let i = 0; i < b; i++){
        res = add(res,a)
    }
    return res
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado')
    
// comece a criar a sua função power na linha abaixo

function power(x, n){
    let res = 1
    for(let i = 0; i < n; i++){
        res = multiply(res, x)
    }
    return res
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado')

// comece a criar a sua função factorial na linha abaixo
function factorial(num){
    let res = 1
    for(let i = num; i > 0; i--){
        res = multiply(res, i)
    }
    return res
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado')

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
