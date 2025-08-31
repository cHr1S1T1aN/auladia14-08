const fruta = [
    {nome:"TATU", uso:"agua"},
    {nome:"Abacaxi", uso:"doce"},
    {nome:"Limão", uso:"azeda"},
    {nome:"Laranja", uso:"doce"},
    {nome:"Tanjerina", uso:"azeda"},
    {nome:"Melão", uso:"doce"},
    {nome:"Laranja", uso:"doce"},
    {nome:"Atemoia", uso:"doce"},
    {nome:"Kwi", uso:"azeda"},
    {nome:"Morango", uso:"azeda"}
]

let frutaDoce="";
let frutaAzeda="";

fruta.forEach(copiaFruta=>{
    if(copiaFruta.uso ==='doce'){
        frutaDoce += `Nome: ${copiaFruta.nome}<br>`
    }
    else if(copiaFruta.uso ==='azeda'){
        frutaAzeda += `Nome: ${copiaFruta.nome}<br>`
    }else{
        alert(copiaFruta.nome + " não existe")
    }
})

document.getElementById("fruta2").innerHTML = frutaDoce
document.getElementById("fruta1").innerHTML = frutaAzeda