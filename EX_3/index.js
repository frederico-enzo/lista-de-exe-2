function contador() {

    let saldo = document.getElementById('saldo').value;
    let debito = document.getElementById('debito').value;
    let credito = document.getElementById('credito').value;
    let text = document.getElementById("text");

    saldo = Number(saldo);
    debito = Number(debito);
    credito = Number(credito);

    let saldoAtual = saldo - (debito + credito);

    if (saldoAtual >= 0) {
        text.innerHTML = "SALDO POSITIVO"
    } if(saldoAtual <0) {
        text.innerHTML = "SALDO NEGATIVO"

    }





}