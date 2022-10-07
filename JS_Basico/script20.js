var aluno = {
  nome: "igor",
  notas: [8, 8],
  media: function (){
    return (this.notas[0]+ this.notas[1])/2
  }
}

console.log(aluno)
console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0],aluno.notas[1]))
