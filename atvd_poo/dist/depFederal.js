import Politico from './politico.js';
export default class DeputadoFederal extends Politico {
    bancada;
    constructor(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos, bancada) {
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    imprimeinfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Partido: ${this.getPartido()}`);
        console.log(`Esfera: ${this.getEsfera()}`);
        console.log(`Poder: ${this.getPoder()}`);
        console.log(`Local de Trabalho: ${this.getLocalTrabalho()}`);
        console.log(`Endereço de Trabalho: ${this.getEndTrabalho()}`);
        console.log(`Remuneração: ${this.getRemuneracao()}`);
        console.log(`Projetos: ${this.getProjetos()}`);
        console.log(`Bancada: ${this.getBancada()}`);
    }
}
