import Politico from "./politico.js";

export default class Governador extends Politico{
    private qtdsecretarios: number;
    private estado: string;


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        endTrabalho: string,
        remuneracao: number,
        projetos: string[],
        qtdsecretarios: number,
        estado: string
    ){
        super(nome, partido, 'Estadual', 'Executivo', localTrabalho, endTrabalho, remuneracao, projetos);
        this.qtdsecretarios = qtdsecretarios;
        this.estado = estado;
    }

getQtdSecretarios(): number {
    return this.qtdsecretarios;
}

setQtdSecretarios(qtdsecretarios: number): void {
    this.qtdsecretarios = qtdsecretarios;
}

getEstado(): string {
    return this.estado;
}

setEstado(estado: string): void {
    this.estado = estado; 
}
mandato(): void {
        console.log(
            "O governador sanciona leis estaduais, veta leis estaduais, " +
            "decreta estado de calamidade e envia PEC à Assembleia Legislativa."
        );
    }

    gerirPoliciaMilitar(): string {
        return "Gerir a Polícia Militar do Estado.";
    }

    administrarRodoviasEstaduais(): string {
        return "Administrar as rodovias estaduais.";
    }

    coordenarEducacaoESaude(): string {
        return "Coordenar a educação e a saúde do Estado.";
    }

    elaborarPPA(): string {
        return "Elaborar e enviar o PPA estadual à Assembleia Legislativa.";
    }

    elaborarLDO(): string {
        return "Elaborar e enviar a LDO estadual à Assembleia Legislativa.";
    }

    elaborarLOA(): string {
        return "Elaborar e enviar a LOA estadual à Assembleia Legislativa.";
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
    console.log(`Quantidade de Secretários: ${this.getQtdSecretarios()}`);
    console.log(`Estado: ${this.getEstado()}`);
}
}  