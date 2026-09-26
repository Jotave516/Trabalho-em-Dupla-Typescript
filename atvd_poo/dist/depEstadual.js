import Politico from './politico.js';
export default class DeputadoEstadual extends Politico {
    estado;
    comissoes;
    constructor(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos, estado, comissoes) {
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = comissoes;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getComissoes() {
        return this.comissoes;
    }
    setComissoes(comissoes) {
        this.comissoes = comissoes;
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
        console.log(`Comissões: ${this.getComissoes()}`);
    }
}
