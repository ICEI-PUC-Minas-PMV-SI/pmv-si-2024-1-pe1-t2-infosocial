# Especificações do Projeto

Na abordagem da dificuldade de acesso a informações sobre programas sociais e assistência governamental, a **perspectiva do usuário** é fundamental para a definição do problema e a proposição de soluções eficazes. A elaboração dessa parte do documento segue uma metodologia estruturada, composta por elementos como o **diagrama de personas**, que retrata perfis fictícios representativos dos usuários, **histórias de usuários** que narram cenários específicos de interação com os sistemas, **requisitos funcionais e não funcionais** que delineiam as capacidades e características desejadas, além das **restrições do projeto** que impõem limites e direcionamentos.

Essa abordagem centrada no usuário visa assegurar que as soluções propostas sejam eficientes, trazendo inclusão digital capaz de superar as barreiras que atualmente dificultam o acesso a esses serviços essenciais.

## Personas

![seu joão](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/88774181-de2e-4ae0-919b-91bf8b06ddf8)


Sr. Garcia, um senhor de 65 anos, sempre foi um homem independente e curioso. Ele cresceu em uma época em que a tecnologia não era tão predominante, mas sempre teve interesse em aprender coisas novas. No entanto, conforme a internet foi se tornando uma parte cada vez mais essencial da vida cotidiana, Sr. Garcia começou a sentir-se excluído.

Apesar de sua vontade de aprender, Sr. Garcia enfrentava dificuldades ao tentar acessar sites na internet. Os botões eram pequenos demais, as fontes pouco legíveis e a organização confusa para seus olhos cansados. Ele sentia-se frustrado com a forma como os sites pareciam ser projetados para pessoas mais jovens, com visão perfeita e habilidades tecnológicas avançadas.

Certo dia, Sr. Garcia precisava acessar o site do governo para fazer um procedimento burocrático importante. Ele passou horas tentando navegar pelo site, mas acabou desistindo devido à sua dificuldade em encontrar o que precisava. Sentindo-se desanimado e isolado, Sr. Garcia começou a se perguntar se a tecnologia realmente era para ele.

No entanto, sua neta, Sofia, notou a frustração de Sr. Garcia e decidiu ajudá-lo. Ela passou algum tempo pesquisando e encontrou programas e extensões que poderiam tornar a experiência na internet mais fácil para ele. Sofia também ensinou Sr. Garcia a ajustar as configurações do navegador para aumentar o tamanho do texto e a acessibilidade geral, um desses sites compatíveis com essas configurações e ferramentas era justamente o InfoSocial, uma aplicação que se preocupou em tornar essas funções incorporadas à sua aplicação desde seu desenvolvimento inicial.

Com a ajuda de Sofia, o engajamento da equipe InfoSocial e algumas adaptações simples, Sr. Garcia começou a se sentir mais confiante em suas habilidades online e até mesmo conseguiu aprender a utilizar o Whatsapp para conversar com seus netinhos.

![Dona Elsa](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/9074975e-05c4-4e34-b2b9-a9b01ffb7c80)

Dona Elsa, uma senhora de 85 anos, sempre foi uma alma gentil e compassiva. Ela testemunhou muitas mudanças ao longo de sua vida, mas nada a preparou para o desafio que enfrentaria ao tentar navegar na internet em seus anos dourados.

Embora Dona Elsa estivesse aberta a novas tecnologias, ela lutava para encontrar conforto e compreensão ao usar a internet. Os sites que ela visitava pareciam ser projetados para uma geração muito mais jovem, com suas letras pequenas e botões minúsculos. Ela se via constantemente tendo que pedir ajuda aos seus netos ou vizinhos para realizar tarefas simples, como acessar noticias informações importantes.

Certa vez, Dona Elsa precisava renovar sua receita médica em uma unidade de Centro de Referência de Assistência Social (CRAS). No entanto, ela não sabia o endereço do local que ela deveria ir, tentando realizar a busca no site da prefeitura, ela se sentiu ainda mais confusa, fazendo com que ela não conseguisse por conta própria entender como chegar até o CRAS mais próximo a sua residência.

![dona Maria](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/fd94f3ca-f4e9-44f1-bcb3-06f5c55a33ba)

Dona Maria, uma mulher de 70 anos, sempre foi uma pessoa ativa e interessada em aprender coisas novas. No entanto, nos últimos anos, ela enfrentou um desafio que testou sua determinação mais do que nunca: problemas de visão.

Dona Maria foi diagnosticada com degeneração macular, uma condição que afeta sua visão central, dificultando sua capacidade de ler e ver detalhes finos. Confrontada com essa nova realidade, Dona Maria encontrou-se lutando não apenas para realizar tarefas cotidianas, mas também para se manter conectada em um mundo cada vez mais digital.

Ela adorava ler notícias online, manter contato com amigos e familiares por meio das redes sociais e até mesmo fazer compras pela internet. No entanto, à medida que sua visão piorava, ela descobriu que os sites que costumava visitar eram cada vez mais difíceis de usar. As letras eram muito pequenas, os contrastes eram fracos e os botões eram difíceis de distinguir.

Sentindo-se isolada e frustrada, Dona Maria quase desistiu de tentar usar a internet. No entanto, sua filha, Carolina, percebeu o quanto sua mãe estava lutando e decidiu intervir. Ela pesquisou e encontrou ferramentas de leitura de tela feitas para ajudar pessoas com defiências visuais.

Porém, ao utilizar desses aplicativos, Dona Maria descobriu que a maior parte dos sites que ela frequentava não estavam preparados para utilizar esse tipo de tecnologia. Conversando com seu sobrinho Juninho, ele explicou que muitos sites não são programados utilizando-se de atributos *HTML* para acessibilidade, o que dificulta o uso desses leitores.

![Lurdes](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/8672242/1b7199ed-e1ac-45ff-b236-92624c391ee0)
Lurdes, uma idosa recentemente viúva e pouco familiarizada com tecnologia, sentia-se perdida após a morte do marido, responsável pelas contas da casa. Decidida a buscar seus direitos, ela enfrentou o desafio de lidar com programas assistenciais online. No entanto, as complexidades tecnológicas provaram ser um obstáculo difícil de superar para Lurdes, e ela se viu incapaz de completar o processo sozinha.

Apesar de seus esforços e da ajuda do neto, Lurdes não conseguiu entender completamente os procedimentos online necessários para acessar os programas de assistência. Frustrada e desanimada, ela lamentou sua falta de habilidade com a tecnologia e sua dependência do marido para lidar com questões financeiras.

No final, Lurdes percebeu que, mesmo com sua determinação, algumas batalhas eram simplesmente além de sua capacidade atual, e infelizmente, acabou desistindo de ir atrás dos seus direitos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Sr Garcia  | Entrar em contato por whatsapp caso não encontre a resposta da minha dúvida | Pois o whatsapp é uma ferramenta que aprendi de utilizar |
|Dona Elsa  | Encontrar o CRAS mais perto de mim | Para renovar ḿinha receita médica |
|Dona Elsa  | Ver noticias e informações importantes de maneira simples | Para conseguir ter acesso a conteúdos sem a ajuda dos meus netos e vizinhos  |
|Lurdes  | Saber todos os benefícios que se adequam para mim de maneira fácil | Saber quais são meus direitos após o falecimento do meu marido |
|Dona Maria  | Acessar o site utilizando meu aplicativo de leitura de tela | Conseguir me manter atualizada mesmo com meus problemas de visão |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Tipo |
|------|-----------------------------------------|----|----| 
|RF-001| A aplicação terá uma página listando sobre os principais benefícios para idosos | ALTA | ESTÁTICO |
|RF-002| A aplicação deverá permitir que o usuário possa visualizar os detalhes do benefício selecionado | ALTA | ESTÁTICO |
|RF-003| A aplicação deve possuir um botão para entrar em contato por whatsapp | ALTA | DINÂMICO |
|RF-004| A aplicação deve mostrar o CRAS mais próximo através da localização do usuário | ALTA | DINÂMICO |
|RF-005| A aplicação deve possuir um formulário de anamnese para retornar todos os benefícios que se adequam ao perfil do usuário | ALTA | DINÂMICO |
|RF-006| A aplicação deverá fornecer um formulário de Fale Conosco, para os idosos encaminharem dúvidas | ALTA | DINÂMICO |
|RF-007| A aplicação deverá ter uma seção de perguntas frequentes | MEDIA | ESTÁTICO |
|RF-008| A aplicação deverá ter uma seção de perguntas noticias | MEDIA | ESTÁTICO |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve possuir uma interface de usuário amigável para o público idoso | ALTA | 
|RNF-002| O sistema deve ser responsivo | ALTA | 
|RNF-003| O sistema deve ser compatível com ferramentas de leitura de tela | ALTA | 
|RNF-004| A aplicação deve possuir uma seção de perguntas frequentes | ALTA |
|RNF-005| A aplicação deve possuir uma seção de links importantes | ALTA |
|RNF-006| A aplicação deve possuir uma seção com notícias úteis para o público idoso | MEDIA |
|RNF-007| A aplicação deverá utilizar a API oficial do whatsapp para iniciar a conversa por whatsapp (https://wa.me)        |
|RNF-008| A aplicação deverá utilizar a API OPEN STREET MAPS para gerar mapas e traçar localizações        |
|RNF-009| A aplicação deverá captar a localização do usuário através da API nativa do javascript de Geolocalização        |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
