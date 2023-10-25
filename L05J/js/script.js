// Descrição: Celsius para Fahrenheit, crescendo de 10 em 10 até 100 °C 
let celsius = 0
let fahrenheit = 0
for(celsius = 0; celsius < 101; celsius+=10){
    fahrenheit = ((celsius*9)+160)/5
    alert(`Celsius: ${celsius} n/ Fahrenheit: ${fahrenheit}`)
}