// Descrição: Potência com valores informados pelo usuário
let valorBase = parseInt(prompt("Informe a base"))
let potencia = parseInt(prompt("Informe o expoente"))
for(let contadora = 0; contadora <= potencia; contadora++){
    if(contadora == 0){
        numero = 1
    } else{
        numero*=valorBase
    }
    alert(numero)
}
