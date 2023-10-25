//Descrição: Sequência de Fibonacci
let valorA = 1
let valorB = 1
alert(valorA)
alert(valorB)
for(let contadora = 1; contadora < 16; contadora++){
    let proximoNumero = valorA + valorB
    alert(proximoNumero)
    valorA = valorB
    valorB = proximoNumero
}


// valorA<-1
// valorB<-1
// escreval(valorA)
// escreval(valorB)
// para contadora de 1 ate 15 passo 1 faca
//    proximoNumero<-valorA+valorB
//    escreval(proximoNumero)
//    valorA<-valorB
//    valorB<-proximoNumero
// fimpara