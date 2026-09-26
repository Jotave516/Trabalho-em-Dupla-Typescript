import politico from './politico.js';
export default class Senador extends politico {
    estado;
    anoEleito;
    constructor(nome, partido, localTrabalho, endTrabalho, remuneracao, projetos, estado, anoEleito) {
        super(nome, partido, 'Federal', 'Executivo', localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleito = anoEleito;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleito() {
        return this.anoEleito;
    }
    setAnoEleito(anoEleito) {
        this.anoEleito = anoEleito;
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
        console.log(`Estado: ${this.getEstado()}`);
        console.log(`Ano Eleito: ${this.getAnoEleito()}`);
    }
}
