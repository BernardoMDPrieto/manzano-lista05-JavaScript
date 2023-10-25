// Descrição: Fatorial dos números ímpares situados entre 1 a 10

for(let numero = 1; numero < 11; numero+=2){
    let fatorial = 1
    for(let contadora = 1; contadora < numero+1; contadora++){
        fatorial*=contadora
    }
    alert(fatorial)
}
