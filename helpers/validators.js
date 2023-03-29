export const cpfValidator = strCPF => {
    var regEx = /^(?=.*[0-9]).{11,}$/;
    var Soma;
    var Resto;
    Soma = 0;
  if (String(strCPF) == "00000000000") return false;

  if(!strCPF.match(regEx))
        return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(String(strCPF).substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(String(strCPF).substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(String(strCPF).substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(String(strCPF).substring(10, 11) ) ) return false;
    return true;
}

export const dataValidator = data => {
    var regEx = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var currentYear = new Date().getFullYear()
    var currentMonth = new Date().getMonth() + 1
    var currentDay = new Date().getDate()

    if(!data.match(regEx))
        return false;

    var partes = data.split("/");
    var dia = parseInt(partes[0], 10);
    var mes = parseInt(partes[1], 10);
    var ano = parseInt(partes[2], 10);

    if(ano < (currentYear - 200) || ano > (currentYear - 18) || mes == 0 || mes > 12)
        return false;
    
    if (ano == (currentYear - 18) && (mes > currentMonth || dia > currentDay))
        return false
    
    var numDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0))
        numDias[1] = 29;

    return dia > 0 && dia <= numDias[mes - 1];
}

export const phoneValidator = (data, region) => {
    var regEx = '';
    if (region === '+55') {
        regEx = /^(?=.*[0-9]).{11,}$/
    } else if (region === '+1') {
        regEx = /^(?=.*[0-9]).{10,}$/
    }

    if(!data.match(regEx))
        return false;

    return true
}

export const passwordValidator = data => {
    //var regEx = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_=+-]).{0,1000}$/;
    var regEx = '';

    if(!data.match(regEx) || data.length < 8)
        return false;

    return true
}
