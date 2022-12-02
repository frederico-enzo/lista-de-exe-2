function contador() {

let gabriel = document.getElementById('gabriel').value;
let diego = document.getElementById('diego').value;
let grazi = document.getElementById('grazi').value;
let amanda = document.getElementById('amanda').value;
let text = document.getElementById('text');
let text2 = document.getElementById('text2');

let soma;
let soma2;

if(gabriel === diego){
    alert('Nao é permitido idades iguais')
}

if(grazi === amanda){
    alert('Nao é permitido idades iguais')
}

gabriel= Number(gabriel);
diego= Number(diego);
grazi= Number(grazi);
amanda= Number(amanda);



if(gabriel > diego && grazi < amanda ){
    soma = gabriel + grazi;
    soma2 = diego + amanda;
    text.innerHTML = `${gabriel} + ${grazi} = ${soma}`;
    text2.innerHTML = `${diego} + ${amanda} = ${soma}`;
}
if(gabriel > diego && grazi > amanda ){
    soma = gabriel + amanda;
    soma2 = diego + grazi;
    text.innerHTML = `${gabriel} + ${amanda} = ${soma}`;
    text2.innerHTML = `${diego} + ${grazi} = ${soma}`;
}

if(gabriel < diego && grazi > amanda ){
    soma = diego + amanda;
    soma2 = gabriel + grazi;
    text.innerHTML = `${diego} + ${amanda} = ${soma}`;
    text2.innerHTML = `${gabriel} + ${grazi} = ${soma}`;
}
if(gabriel < diego && grazi < amanda ){
    soma = diego + grazi;
    soma2 = gabriel + amanda;
    text.innerHTML = `${diego} + ${grazi} = ${soma}`;
    text2.innerHTML = `${gabriel} + ${amanda} = ${soma}`;
}

}