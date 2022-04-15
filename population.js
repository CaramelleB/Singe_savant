import Phrase from './phrase.js'
import Parametres from './parametres.js'
import Individu from './individu.js'

export default class Population {

    constructor() {
        this.population = this.generatePopulation()
        this.population = this.evalue_tri()
        this.bestFitness = this.population[0].fitness
    }

    generatePopulation() {
        let params = new Parametres()
        let i = 0
        let population = []

        while (i < params.individualsNb) {
            population[i] = new Individu()
            i++
        }

        return population
    }

    evalue_tri() {
        let params = new Parametres()
        let sorting_table = this.population
        let sortIterations = 0
        let temporaryHighest = 0
        let temporaryHighestIndex = 0
        let i = 0

        while (sortIterations < params.individualsNb) {
          i = sortIterations
          temporaryHighestIndex = i
          temporaryHighest = 0

          while (i < params.individualsNb) {

            if (sorting_table[i].fitness > temporaryHighest) {
              temporaryHighest = sorting_table[i].fitness
              temporaryHighestIndex = i
            }

            i++
          }
          sorting_table = this.switchItems(sorting_table, sortIterations, temporaryHighestIndex)
          sortIterations++
        }

        return sorting_table
    }

    switchItems(sorting_table, sortIterations, temporaryHighestIndex) {
        let tempon = sorting_table[sortIterations]

        sorting_table[sortIterations] = sorting_table[temporaryHighestIndex]
        sorting_table[temporaryHighestIndex] = tempon

        return sorting_table
    }

    getAlpha() {

        return this.population[0]
    }
}