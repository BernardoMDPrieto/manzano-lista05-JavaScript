// //Descrição: Potência de 3
let numero = 0
for(let contadora = 0; contadora < 16; contadora++){
    if(contadora == 0){
        numero = 1
    } else if(contadora == 1){
        numero = 3
    } else{
        numero*=3
    }
    alert(numero)
}
