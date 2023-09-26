
//switch

//opção 4
/*let opcao = prompt("Digite uma opção") 4;

switch(opcao){
    case 1:
        document.write("Primeira opção")
        break;
    case 2:
        document.write("Segunda opção")
        break;
    case 3:
        document.write("Terceira opção")  
        break;
    default
    document.write("Nenhuma das opções")   
    break;           
}


let valor = 7
console.log(valor)
valor = valor-1
console.log(valor);

let valor1 =10
console.log(valor1)
valor +=3;
console.log(valor1)


//for (laço de repetição)

for(leti=0;i<10;i++){
    console.log("Agora i vale" +i);
}

//for com array

let carros=["Porsche","BMW","Passat"]

for(let i=0;i<carros.length;i++){
    console.log(carros[i])
}

//for com of

for(let carro of carros){
    console.log(carro)
}

//while 

let cont=0
while(cont<20){
    console.log("Passagem de numeros"+cont)
    cont++
}

let valor2 = 10
do{
    console.log("passagem" +valor2)
    valor2++
}while (valor2 ==0)

//função

function teste(num1,num2){
    return num1 + num2
}
console.log(teste(4,6))

function avisar (){
    alert("Avisar")
    alert("Avisar 2")
}
avisar()
*/
let novo = document.getElementById("idNome")

function mudar(){
    
 document.getElementById("titulo").innerHTML =novo.value;
}

function trocar(cores){
    document.body.style.background =cores
}