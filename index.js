let partidas = calcular(120,20)
function calcular(vitorias,derrotas){
    saldo = vitorias-derrotas
    return saldo
}
switch(true){
    case saldo<=10:
        console.log(`O herói tem saldo de ${saldo} e está no nível de Ferro`);
    break
    case saldo<=20:
        console.log(`O herói tem saldo de ${saldo} e está no nível de Bronze`);
    break
    case saldo<=50:
        console.log(`O herói tem saldo de ${saldo} e está no nível de Prata`);
    break
    case saldo <=80:
        console.log(`O herói tem saldo de ${saldo} e está no nível de Ouro`);
    break
    case saldo <=90:
        console.log(`O herói tem saldo de ${saldo} e está no nível de Diamante`);
    break 
    case saldo <=100:
        console.log(`O herói tem saldo de ${saldo} e está no nível de lendario`);
    break
    case saldo >=101:
        console.log(`O herói tem saldo de ${saldo} e está no nível de Imortal e vamos o parabenizar!`);
        console.log("Em ...")
        for (i=1;i<4;i++){
            console.log(i)
        }
        console.log("Parabens!!!!!")

}
