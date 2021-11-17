let totalTime = 60;
function updateClock() {
document.getElementById('tiempo').innerHTML = 'TIEMPO: ' + totalTime;
if(totalTime==0){
    document.getElementById('loser').style.display = 'flex';
}else{
totalTime-=1;
setTimeout("updateClock()",1000);
}
}

String.prototype.replaceAt = function(index,character)
{
    return this.substr(0,index) + character + this.substr(index + character.length);
};
const palabras = ['gamificacion', 'automotivacion', 'sql', 'frontend', 'css', 'html', 'backend', 'creatividad', 'codigo', 'competencia', 'tecnologia','mindfundless'];
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraGuiones = palabra.replace(/./g, "_ ");
let intentos = 1;
let fallos = 0;
let aciertos = 0;
let tiempo = 0;
let puntuacion = 0;
let letra;

document.querySelector('#palabra').innerHTML = palabraGuiones;
function comprobarTecla(letraUsuario) {
    letra = letraUsuario;
    let esFallo = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            esFallo = false;
            aciertos++;
            puntuacion += 25;
            document.querySelector("#tecla" + letra).classList += " green";
        }
    }
    document.querySelector('#palabra').innerHTML = palabraGuiones;
    if(esFallo == true)
    {
        document.querySelector("#tecla" + letra).classList += " red";
        fallos++;
        intentos++;
        if(puntuacion >= 10)
        {
            puntuacion -= 10; 
        }
        document.getElementById('image').src = "./public/" + intentos + "_pix.png";
        if(intentos == 7)
        {
            document.getElementById('loser').style.display = 'flex';
        }

    }
    else if(palabraGuiones.indexOf('_') < 0){
        document.getElementById('winner').style.display = 'flex';
    }
    document.querySelector('#aciertos').innerHTML = "ACIERTOS: " + aciertos;
    document.querySelector('#fallos').innerHTML = "FALLOS: " + fallos;
    document.querySelector('#puntuacion').innerHTML = "PUNTUACION: " + puntuacion;
    document.querySelector("#tecla" + letra).disabled = true;
}

function myName()
{
    let name = document.querySelector('#name').value;
    document.querySelector('#button').className = 'hidden';
    document.querySelector('#name').className = 'hidden';
    document.querySelector('#myName').className = '';
    document.querySelector('#myName').innerHTML = 'Bienvenid@ ' + name;
    updateClock();
}