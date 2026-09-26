import Politico from './politico.js';

export default class DeputadoEstadual extends Politico{
    private estado:string;
    private comissoes:string[]

        constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        comissoes: string[]
    ){
        super(nome, partido, esfera, poder, localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = comissoes;
    }

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado;
}

getComissoes(): string[] {
    return this.comissoes;
}

setComissoes(comissoes: string[]): void {
    this.comissoes = comissoes;
}

imprimeinfo(): void {
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