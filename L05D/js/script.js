//Soma dos 500 primeiros valores pares
let acumuladora = 0
for(let contadora = 1;contadora < 501; contadora++){
    if(contadora%2 == 0){
    acumuladora+=contadora
    }

}
alert(acumuladora)