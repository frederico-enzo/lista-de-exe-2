function valit() {
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    let text = document.getElementById('text');


    login = Number(login);
    senha = Number(senha);

    let l = 1234;
    let s = 9999;

    if (login != l) {
        text.innerHTML = `Usuário inválido!`;
    } else {
        if (senha != s) {
            text.innerHTML = `Senha inválida!`;
        } else {
            text.innerHTML = `Acesso permitido!`;
        }
    }

}
function contador() {
    let text = document.getElementById('text');
    text.innerHTML = "";
}