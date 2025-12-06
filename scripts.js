class OperationMat {
  constructor(number1,number2){
    this.number1 = number1
    this.number2 = number2
  }

  sum(){

    return `Adição: ${this.number1 + this.number2}`
  }

  subtract(){
   
    return `Subtração: ${this.number1 - this.number2}`
  }

  multiply(){
  
    return `Multiplicação: ${this.number1 * this.number2}`
  }

  divide(){
  
    return `Divisão: ${this.number1 / this.number2}`
  }
}


const entradaUn = document.querySelector('.numero1')
const entrada2 = document.querySelector('.numero2')
const msg = document.querySelector('.resultado')
const btn = document.querySelector('button')
const selecao = document.querySelector('#selecao')

btn.addEventListener('click',()=>{
  
let valor1 = Number(entradaUn.value)
let valor2 = Number(entrada2.value)
let operacao = new OperationMat(valor1,valor2)

if(selecao.value === 'sum' && !isNaN(valor1) && !isNaN(valor2)){
  return msg.innerHTML = `${operacao.sum()}`

} 

else if(selecao.value === 'subtract' && !isNaN(valor1) && !isNaN(valor2)){
   return msg.innerHTML = `${operacao.subtract()}`
}

else if (selecao.value === 'multiply' && !isNaN(valor1) && !isNaN(valor2)) {
   return msg.innerHTML = `${operacao.multiply()}`
}

else if (selecao.value === 'divided' && !isNaN(valor1) && !isNaN(valor2)) {
   return msg.innerHTML = `${operacao.divide()}`
}

else {
  alert('Você não digitou um numero valido:(')
}

})

