export default abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private endTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(
        nome: string,
        partido: string, 
        esfera: string,
        poder: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ){
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.endTrabalho = endTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

getNome(): string {
    return this.nome;
}

setNome(nome: string): void {
    this.nome = nome;
}

getPartido(): string {
    return this.partido;
}

setPartido(partido: string): void {
    this.partido = partido; 
}

getEsfera(): string {
    return this.esfera;
}

setEsfera(esfera: string): void {
    this.esfera = esfera;
}

getPoder(): string {
    return this.poder;
}

setPoder(poder: string): void {
    this.poder = poder;
}

getLocalTrabalho(): string {
    return this.localTrabalho;
}

setLocalTrabalho(localTrabalho: string): void {
    this.localTrabalho = localTrabalho;
}

getEndTrabalho(): string {
    return this.endTrabalho;
}

setEndTrabalho(endTrabalho: string): void {
    this.endTrabalho = endTrabalho;
}

getRemuneracao(): number {
    return this.remuneracao;
}

setRemuneracao(remuneracao: number): void {
    this.remuneracao = remuneracao;
}

getProjetos(): string[] {
    return this.projetos;
}

setProjetos(projetos: string[]): void {
    this.projetos = projetos;
}

abstract imprimeinfo(): void;

}

