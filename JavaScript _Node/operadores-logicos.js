const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

if (notaFinal <= 7 && faltas > 4){
    console.log('Reprovado, boas festas!');
} else {
    console.log('Não foi reprovado, boas festas!');
}

if (faltas >= 2 && !advertencias){
    console.log('Recebeu bonus!');
} else {
    console.log('Não foi recebeu bonus!');
}