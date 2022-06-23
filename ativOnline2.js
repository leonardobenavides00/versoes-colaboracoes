// O evento está previsto para o dia 10/08/2022, a data atual é a de hoje (22/06/2022) e o programa considera que já haviam 92 participantes cadastrados no momento da inscrição

const rs = require("readline-sync");

let dataEvento = new Date('10/08/2022');  
let dataAtual = new Date('06/22/2022');   
let qtdVagas = 92  ;
let idade = rs.questionInt("Digite sua idade: ");

if((dataEvento < dataAtual) ||idade < 18 ){
    console.log("A inscrição não foi aceita, pois a idade do participante é menor que 18, ou a data do evento é anterior à data atual.");
}else{
    if(qtdVagas < 100){
        console.log("Inscrição permitida.");
        let nome = rs.question("Digite seu nome: ");
        let documento = rs.questionInt("Digite numero de documento: ");
        console.log("Inscrição realizada com sucesso.");
    }else{
        console.log("Infelizmente, não há vagas disponiveis.");
    }
}
