import Phrase from './phrase.js'
import Parametres from './parametres.js'

export default class Individu {

    constructor(i_mother = null, i_father = null) {
        this.genome = (i_mother == null) ? this.randomGenomGenerator() : this.reproduction(i_father.genome, i_mother.genome)
        this.mutation()
        this.fitness = this.evalue()
    }

    randomGenomGenerator() {
        let phrase = new Phrase()
        let params = new Parametres()
        let newGenom = []
        let i = 0

        while (i < phrase.length) {
            newGenom[i] = params.genes[this.randomInt(phrase.length)]
            i++
        }

        return newGenom
    }

    evalue() {
        let phrase = new Phrase()
        let fitness = 0.0
        let a_phrase = [...phrase.phrase.split('')]
        let i = 0
        let presenceIndex
        let count = 0.0
        let bonus = 0.0

        while (i < this.genome.length) {

            if (this.genome[i] == phrase.phrase.split('')[i]) {
                bonus += this.genome.length / phrase.coeff

                if (this.genome[i] == ' ') {
                    bonus += 0.25
                }
            }

            if ((presenceIndex = this.checkPresence(this.genome[i], a_phrase)) != -1) {
                a_phrase.splice(presenceIndex, 1)
                count++
            }

            i++
        }
        fitness = (count + bonus) / (i + bonus)
        this.fitnessNoBonus = count / i

        return fitness
    }

    checkPresence(gene, genome) {
        let i = 0

        while (i < genome.length) {
            if (gene == genome[i]) {

                return i
            }
            i++
        }

        return -1
    }

    reproduction(pere, mere) {
        let sizeMere = mere.length
        let coupure = this.randomInt(sizeMere)
        let geneEnfant = []
        let i = 0
        while (i < coupure) {
            geneEnfant[i] = pere[i]
            i++
        }
        while (i < sizeMere) {
            geneEnfant[i] = mere[i]
            i++
        }

        return geneEnfant
    }

    mutation() {
        let params = new Parametres()
        let isMutating = this.randomInt(10)
        let mutationSize, mutationPosition
        let newGenome = this.genome

        if (isMutating < (params.mutationRate * 10)) {
            mutationSize = this.randomInt(params.mutationMaxSize)
            mutationPosition = this.randomInt(this.genome)
            newGenome = this.mutate(mutationPosition, mutationSize)
        }
        this.genome = newGenome
    }

    mutate(position, size) {
        let params = new Parametres()
        let phrase = new Phrase()
        let i = position
        let newGenome = this.genome

        while (i < size && i < newGenome.length) {
            newGenome[i] = params.genes[this.randomInt(phrase.length)]
            i++
        }

        return newGenome
    }

    randomInt(range) {

        return (Math.floor(Math.random() * range))
    }
}