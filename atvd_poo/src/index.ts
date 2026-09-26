import Presidente from './presidente.js';
import Senador from './senador.js';
import DeputadoFederal from './depFederal.js';
import DeputadoEstadual from './depEstadual.js';
import Governador from './governador.js';

let presidente = new Presidente(
    'Luiz Inácio Lula da Silva',
    'PT',
    'Palácio do Planalto',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Bolsa Família', 'Pé de meia'],
    38
);

presidente.imprimeinfo();

let governador1 = new Governador(
    'Raquel Texeira Lyra Lucena',
    'PSD',
    'Palácio do Campo das Princesas',
    'Praça da República, s/n - Santo Antônio, Recife - PE, CEP 50010-000',
    60000,
    ['Programa de Desenvolvimento Econômico', 'Plano Estadual de Educação'],
    30,
    'Pernambuco'
);

governador1.imprimeinfo();

let governador2 = new Governador(
    'Jerônimo Rodrigues',
    'PT',
    'Centro Administrativo da Bahia - CAB',
    '3ª Avenida, nº 390, Plataforma IV, Salvador - BA, CEP: 41.745-005.',
    36894.89,
    ['Reurb-S', 'Quilombo Legal'],
    26,
    'Bahia'
);

governador2.imprimeinfo();

let senador1 = new Senador(
    'Fernando Bezerra Coelho',
    'PT',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    40000,
    ['Apoio a Pequenos Agricultores', 'Relatorias Econômicas e Sociais'],
    'Pernambuco',
    2014);

senador1.imprimeinfo();

let senador2 = new Senador(
    'Teresa Leitão',
    'PT',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    40000,
    ['PL 4414/2024', 'PL 4403/2024'],
    'Pernambuco',
    2022);

senador2.imprimeinfo();

let senador3 = new Senador(
    'Daniella Ribeiro',
    'PP',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    40000,
    ['Assentos em viagens', 'Piso Salarial dos Médicos'],
    'Paraíba',
    2018);

senador3.imprimeinfo();

let depFederal1 = new DeputadoFederal(
    'Túlio Gadelha',
    'PSD',
    'Federal',
    'Legislativo',
    'Câmara dos Deputados',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Lei do Mar (PL 6.969/2013)', 'Incentivo ao Voluntariado (PL 5.862)'],
    'PSD'
);

depFederal1.imprimeinfo();

let depFederal2 = new DeputadoFederal(
    'Carlos Veras',
    'PT ',
    'Federal',
    'lesgislativo',
    'Câmara dos Deputados',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Lei Paul Singer (Lei nº 15.068/2024)', 'Transporte Universitário Gratuito'],
    'PSB'
);

depFederal2.imprimeinfo();

let depFederal3 = new DeputadoFederal(
    'Lula da Fonte',
    'Progressista',
    'Federal',
    'lesgislativo',
    'Câmara dos Deputados',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Estruturacao De Unidades De Atencao Especializada Em Saude - No Estado De Pernambuco', 'Apoio A Execucao De Projetos E Obras De Contencao De Encostas Em Areas Urbanas - No Estado De Pernambuco'],
    'PP'
);

depFederal3.imprimeinfo();

let depFederal4 = new DeputadoFederal(
    'Felipe Carreras',
    'PSB',
    'Federal',
    'lesgislativo',
    'Câmara dos Deputados',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['Lei de Incentivo ao Esporte', 'Autoria do PL 11187/2018'],
    'PSB'
);

depFederal4.imprimeinfo();

let depFederal5 = new DeputadoFederal(
    'Adilson Barroso',
    'PL',
    'Federal',
    'lesgislativo',
    'Câmara dos Deputados',
    'Praça dos Três Poderes, Brasília - DF, CEP 70150-900',
    46366.19,
    ['PL 2307/2024:','PL 976/2023'],
    'PL'
);

depFederal5.imprimeinfo();




let depEstadual1 = new DeputadoEstadual(
    'Abimael Santos',
    'PL',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa de Pernambuco',
    'Rua da União, 397 - Boa Vista, Recife - PE, CEP 50050-010',
    30000,
    ['PL 1234/2024', 'PL 5678/2024'],
    'Pernambuco',
    ['Comissão de Assuntos Municipais','Comissão Especial da PMPE']
);

depEstadual1.imprimeinfo();

let depEstadual2 = new DeputadoEstadual(
    'Adalto Santos',
    'PP',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa de Pernambuco',
    'Rua da União, 397 - Boa Vista, Recife - PE, CEP 50050-010',
    30000,
    ['Destinação de multas de trânsito', 'Financiamento contra o Câncer'],
    'Pernambuco',
    ['Comissão de Ética Parlamentar','Comissão de Saúde e Assistência Social']
);

depEstadual2.imprimeinfo();

let depEstadual3 = new DeputadoEstadual(
    'Cayo Albino',
    'PSB',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa de Pernambuco',
    'Rua da União, 397 - Boa Vista, Recife - PE, CEP 50050-010',
    30000,
    ['PEC do Orçamento da Juventude', 'Código de Defesa dos Autistas'],
    'Pernambuco',
    ['Comissão de Desenvolvimento Econômico e Turismo','Comissão de Constituição, Legislação e Justiça']
);

depEstadual3.imprimeinfo();

let depEstadual4 = new DeputadoEstadual(
    'Adolfo Menezes',
    'PSD',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa da Bahia',
    '1ª Avenida do Centro Administrativo da Bahia (CAB), nº 130Bairro: Centro Administrativo da BahiaSalvador - BACEP: 41745-001',
    30000,
    ['Título de Capital do Couro a Ipirá', 'Propostas de democratização cultural'],
    'Bahia',
    ['Comissão de Finanças, Orçamento, Fiscalização e Controle','Comissão de Direitos Humanos e Segurança Pública']
);

depEstadual4.imprimeinfo();

let depEstadual5 = new DeputadoEstadual(
    'Alex Piatã',
    'PSD',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa da Bahia',
    '1ª Avenida do Centro Administrativo da Bahia (CAB), nº 130Bairro: Centro Administrativo da BahiaSalvador - BACEP: 41745-001',
    30000,
    ['Aplicativo para Denúncias de Violência Doméstica', 'Combate ao Bullying Escolar'],
    'Bahia',
    ['Comissão de Saúde e Saneamento','Comissão Especial de Desenvolvimento Regional']
);

depEstadual5.imprimeinfo();