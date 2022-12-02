function salario() {

    let horas = document.getElementById('Horas-trabalhadas').value;
    let salario = document.getElementById('Salário-por-hora').value;
    let b = document.getElementById('a');
    horas = Number(horas);
    salario = Number(salario);
    let cargaHoraria = 160;
    let horaExtra = salario + (salario * 0.5);
    let salarioFinal = horas * salario;
    let extra = horas - cargaHoraria;
    let adicional = extra * horaExtra;
    let salarioF = adicional + salarioFinal;



    if (cargaHoraria == horas) {

        b.innerHTML = `Sua carga horaria é de ${horas} que equivalem a R$${salarioFinal}`;
    }
    if (cargaHoraria < horas) {

        b.innerHTML = `Sua carga horaria é de ${horas} com ${extra} de horas extras que equivalem a R$${salarioFinal}`;
    }




}