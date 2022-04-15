export default class Parametres {
    static individualsNb
    static generationsMaxNb
    static fitness
    static genes
    static mutationRate
    static mutationMaxSize

    constructor() {
        this.individualsNb = 20
        this.generationsMaxNb = 100
        this.fitness = 1.0
        this.genes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
        this.mutationRate = 0.9
        this.mutationMaxSize = 3
    }
}
