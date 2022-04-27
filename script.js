/*Nesse desafio você irá criar uma lista de **estudantes** e, 
  cada estudante dentro dessa lista, deverá conter os 
  seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas 
       de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**,
       verifique **se** cada aluno obteve sucesso ou não 
       em entrar no concurso e mostre uma mensagem na tela. 
*/

let studentsList = [
  {
   name: "Clara",
   grade1: 8.5,
   grade2: 9, 
  },
  { 
   name: "Paulo",
   grade1: 10,
   grade2: 8.5,
  },
  {
    name: "Laura",
    grade1: 4,
    grade2: 5.5,
  },
  {
    name:"Mario",
    grade1:3.75,
    grade2:7.5,
  },
]

function averageScore(g1,g2){
  let averageScore = (g1 + g2)/2
  return averageScore
}

for (let student of studentsList){
  let averageMarks = averageScore(student.grade1, student.grade2)
  if (averageMarks >= 7){
    alert(`
    A média do(a) aluno(a) ${student.name} foi de: ${averageMarks}\n
    Parabéns ${student.name}, você foi aprovado(a) no concurso.`)
  } else{
    alert(`
    A média do(a) aluno(a) ${student.name} foi de: ${averageMarks}\n
    Não foi dessa vez, ${student.name}!Tente novamente!`)
  }
}