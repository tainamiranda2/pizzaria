//capturar do formulario
/*document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo)
function cadastrarVeiculo(){

//texte vai para outra pagina
document.write('funcionar')

}*/

document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo)

function cadastrarVeiculo(e){
var modelocarro = document.getElementById('modelocarro').value;
var placacarro = document.getElementById('placacarro').value;
var time = new Date();

carro={
    modelo: modelocarro,
    placa: placacarro,
    hora: time.getHours(),
    minutos:  time.getMinutes()
}

console.log(carro);
/*localStorage.setItem('teste', 'ola')
console.log(localStorage.getItem('teste'))
localStorage.removeItem('teste')
console.log(localStorage.getItem('teste'))*/


if(localStorage.getItem("patio2") == null){
    var carro= [];
    carros.push(carro);
    localStorage.setItem('patio2', JSON.stringify(carros));
}else{
    var carros = JSON.parse(localStorage.getItem('patio'));
    carros.push(carro);
    localStorage.setItem('patio2', JSON.stringify(carros));
}

e.preventDefault();

}


function mostrarPatio(){
  var carros=  JSON.parse(localStorage.getItem('palio2'));
  var carrosresultados = document.getElementById('resultados');

  carrosresultados.innerHTML='ola mundo';
}