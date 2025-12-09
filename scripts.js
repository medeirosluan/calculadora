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

  divide(){
  
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
const operacao = new OperationMat(valor1,valor2)

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
  alert('Você não digitou um numero...\nPor favor digite 2 numeros valido.')
}

})

