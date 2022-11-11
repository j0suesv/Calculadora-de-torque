function calcular(){
    const fuerza = parseFloat(document.getElementById('fuerza').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const angulo = parseFloat(document.getElementById('angulo').value);
    anguloRadianes = angulo*((Math.PI)/180)
    document.getElementById('resultado').innerHTML = (fuerza*distancia*Math.sin(anguloRadianes)).toFixed(1) + " Nm"
}


