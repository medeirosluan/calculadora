class OperationMat {
  constructor(number1,number2){
    this.number1 = number1
    this.number2 = number2
  }

  sum(){

    return `Adição: ${this.number1 + this.number2} &#128540;`
  }

  subtract(){
   
    return `Subtração: ${this.number1 - this.number2} &#128513`
  }

  multiply(){
  
    return `Multiplicação: ${this.number1 * this.number2} &#128515`
  }

  divided(){
  
    return `Divisão: ${this.number1 / this.number2} &#128521`
  }
}


const entradaUn = document.querySelector('.numero1')
const entrada2 = document.querySelector('.numero2')
const msg = document.querySelector('.resultado')
const btn = document.querySelector('button')
const selecao = document.querySelector('#selecao')

btn.addEventListener('click',()=>{
  
const valor1 = Number(entradaUn.value)
const valor2 = Number(entrada2.value)

if(isNaN(valor1) || isNaN(valor2)){
  return msg.textContent = 'Por favor digite um numero...'
} 

const operacao = new OperationMat(valor1,valor2)

const operationMath = {
  sum: () => operacao.sum(),
  subtract: () => operacao.subtract(),
  multiply:() => operacao.multiply(),
  divided:() => operacao.divided(),

}

msg.innerHTML = operationMath[selecao.value]?.() ?? 'Operação inválida, selecione uma opção correta.'


})

