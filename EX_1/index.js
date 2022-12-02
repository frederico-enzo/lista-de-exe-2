function send(){

    let municipio = document.getElementById('total-eleitores').value;
    let brancos = document.getElementById('votos-branco').value;
    let nulos = document.getElementById('votos-nulos').value;
    let validos = document.getElementById('votos-validos').value;

    municipio = Number(municipio);
    brancos = Number(brancos);
    nulos = Number(nulos);
    validos = Number(validos);



    let br = municipio / (brancos * 100);
    let nu = municipio / (nulos * 100);
    let va = municipio / (validos * 100);

    
    let b = document.getElementById('f');
    let n = document.getElementById('c');
    let v = document.getElementById('a');



    b.innerHTML = br;
    n.innerHTML = nu;
    v.innerHTML = va;

}

