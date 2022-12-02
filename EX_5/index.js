function contador (){

let nome  = document.getElementById('nome').value;
let quantidade  = document.getElementById('quantidade').value;
let  preco = document.getElementById('preco').value;
let text = document.getElementById('text');
let total;
let final;

quantidade= Number('quantidade');
preco= Number('preco');

if(quantidade <= 5 ){
    total = quantidade * preco ;
    final = total - (total * 0.02);
    text.innerHTML = `Você comprou ${quantidade} de ${nome} ganhado um descoonto de 2% ficando R$${final}`;


}
if(quantidade > 5 &&  quantidade <= 10){
    total = quantidade * preco ;
    final = total - (total * 0.03);
    text.innerHTML = `Você comprou ${quantidade} de ${nome} ganhado um descoonto de 3% ficando R$${final}`;
}

if(quantidade > 10){
    total = quantidade * preco ;
    final = total - (total * 0.05);    
    text.innerHTML = `Você comprou ${quantidade} de ${nome} ganhado um descoonto de 5% ficando R$${final}`;
}

}