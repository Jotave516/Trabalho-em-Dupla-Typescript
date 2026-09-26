import Politico from "./politico.js";
export default class Governador extends Politico {
    qtdsecretarios;
    estado;
    constructor(nome, partido, localTrabalho, endTrabalho, remuneracao, projetos, qtdsecretarios, estado) {
        super(nome, partido, 'Estadual', 'Executivo', localTrabalho, endTrabalho, remuneracao, projetos);
        this.qtdsecretarios = qtdsecretarios;
        this.estado = estado;
    }
    getQtdSecretarios() {
        return this.qtdsecretarios;
    }
    setQtdSecretarios(qtdsecretarios) {
        this.qtdsecretarios = qtdsecretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    mandato() {
        console.log("O governador sanciona leis estaduais, veta leis estaduais, " +
            "decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar do Estado.";
    }
    administrarRodoviasEstaduais() {
        return "Administrar as rodovias estaduais.";
    }
    coordenarEducacaoESaude() {
        return "Coordenar a educação e a saúde do Estado.";
    }
    elaborarPPA() {
        return "Elaborar e enviar o PPA estadual à Assembleia Legislativa.";
    }
    elaborarLDO() {
        return "Elaborar e enviar a LDO estadual à Assembleia Legislativa.";
    }
    elaborarLOA() {
        return "Elaborar e enviar a LOA estadual à Assembleia Legislativa.";
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
        console.log(`Quantidade de Secretários: ${this.getQtdSecretarios()}`);
        console.log(`Estado: ${this.getEstado()}`);
    }
}
