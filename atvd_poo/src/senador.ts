import politico from './politico.js';

export default class Senador extends politico{
    private estado: string;
    private anoEleito: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        anoEleito: number
    ){
        super(nome, partido, 'Federal', 'Executivo', localTrabalho, endTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleito = anoEleito;
    }

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado;
}

getAnoEleito(): number {
    return this.anoEleito;
}

setAnoEleito(anoEleito: number): void {
    this.anoEleito = anoEleito;
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
    console.log(`Ano Eleito: ${this.getAnoEleito()}`);
}
}
