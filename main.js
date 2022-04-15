import Individu from './individu.js'
import Parametres from './parametres.js'
import Phrase from './phrase.js'
import Population from './population.js'

let params = new Parametres()
let phrase = new Phrase()
let population = new Population().population
let ind = new Individu(population[0], population[1])

console.log(ind)