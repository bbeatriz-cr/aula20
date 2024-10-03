import validator from 'validator'
import {soma, subtrair} from './matematica'
import {filmes} from './filmes'

let nome: string = 'Beatriz'
let idade: number = 19
let ip = '192.168.0.7'

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`)

console.log(validator.isEmail(`fulano@gmail.com`))
//validando email
console.log(validator.isIP(ip))
//validando IP
console.log(`SOMA: ${soma(10,20)}`)
console.log(`SUBTRAÇÃO: ${subtrair(5,20)}`)

console.log(`FILMES: ${filmes}`)
//console.log(`filmes`)

