# Especificações do Projeto

Na abordagem da dificuldade de acesso a informações sobre programas sociais e assistência governamental, a **perspectiva do usuário** é fundamental para a definição do problema e a proposição de soluções eficazes. A elaboração dessa parte do documento segue uma metodologia estruturada, composta por elementos como o **diagrama de personas**, que retrata perfis fictícios representativos dos usuários, **histórias de usuários** que narram cenários específicos de interação com os sistemas, **requisitos funcionais e não funcionais** que delineiam as capacidades e características desejadas, além das **restrições do projeto** que impõem limites e direcionamentos.

Essa abordagem centrada no usuário visa assegurar que as soluções propostas sejam eficientes, trazendo inclusão digital capaz de superar as barreiras que atualmente dificultam o acesso a esses serviços essenciais.

## Personas

![seu joão](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/88774181-de2e-4ae0-919b-91bf8b06ddf8)


Sr. Garcia, um senhor de 65 anos, sempre foi um homem independente e curioso. Ele cresceu em uma época em que a tecnologia não era tão predominante, mas sempre teve interesse em aprender coisas novas. No entanto, conforme a internet foi se tornando uma parte cada vez mais essencial da vida cotidiana, Sr. Garcia começou a sentir-se excluído.

Apesar de sua vontade de aprender, Sr. Garcia enfrentava dificuldades ao tentar acessar sites na internet. Os botões eram pequenos demais, as fontes pouco legíveis e a organização confusa para seus olhos cansados. Ele sentia-se frustrado com a forma como os sites pareciam ser projetados para pessoas mais jovens, com visão perfeita e habilidades tecnológicas avançadas.

Certo dia, Sr. Garcia precisava acessar o site do governo para fazer um procedimento burocrático importante. Ele passou horas tentando navegar pelo site, mas acabou desistindo devido à sua dificuldade em encontrar o que precisava. Sentindo-se desanimado e isolado, Sr. Garcia começou a se perguntar se a tecnologia realmente era para ele.

No entanto, sua neta, Sofia, notou a frustração de Sr. Garcia e decidiu ajudá-lo. Ela passou algum tempo pesquisando e encontrou programas e extensões que poderiam tornar a experiência na internet mais fácil para ele. Sofia também ensinou Sr. Garcia a ajustar as configurações do navegador para aumentar o tamanho do texto e a acessibilidade geral.

Com a ajuda de Sofia e algumas adaptações simples, Sr. Garcia começou a se sentir mais confiante em suas habilidades online. Ele percebeu que não estava sozinho em suas dificuldades e que muitos outros idosos enfrentavam os mesmos problemas. Determinado a fazer a diferença, Sr. Garcia começou a se envolver em grupos de advocacia para a acessibilidade na internet para idosos.

Ele participou de reuniões, escreveu cartas para empresas e até mesmo deu palestras sobre a importância de tornar os sites mais amigáveis para pessoas de todas as idades. Com o tempo, sua voz foi ouvida, e muitas empresas começaram a implementar mudanças em seus sites para torná-los mais acessíveis para idosos e pessoas com deficiência.

Sr. Garcia percebeu que, embora possa haver obstáculos, sempre há uma maneira de superá-los quando se tem determinação e apoio. Sua jornada não apenas melhorou sua própria experiência na internet, mas também teve um impacto positivo na vida de muitos outros que enfrentavam desafios semelhantes. Ele se tornou um símbolo de perseverança e advocacy, inspirando outros a nunca desistirem de aprender e se adaptar às mudanças tecnológicas.
 
![Dona Elsa](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/9074975e-05c4-4e34-b2b9-a9b01ffb7c80)

Dona Elsa, uma senhora de 85 anos, sempre foi uma alma gentil e compassiva. Ela testemunhou muitas mudanças ao longo de sua vida, mas nada a preparou para o desafio que enfrentaria ao tentar navegar na internet em seus anos dourados.

Embora Dona Elsa estivesse aberta a novas tecnologias, ela lutava para encontrar conforto e compreensão ao usar a internet. Os sites que ela visitava pareciam ser projetados para uma geração muito mais jovem, com suas letras pequenas e botões minúsculos. Ela se via constantemente tendo que pedir ajuda aos seus netos ou vizinhos para realizar tarefas simples, como pagar contas online ou acessar informações importantes.

Certa vez, Dona Elsa precisava renovar sua receita médica online. No entanto, ela passou horas tentando entender o processo, apenas para acabar frustrada e confusa. Ela sentia-se isolada e desamparada, incapaz de participar plenamente da era digital que envolvia todos ao seu redor.

![dona Maria](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/fd94f3ca-f4e9-44f1-bcb3-06f5c55a33ba)

Dona Maria, uma mulher de 70 anos, sempre foi uma pessoa ativa e interessada em aprender coisas novas. No entanto, nos últimos anos, ela enfrentou um desafio que testou sua determinação mais do que nunca: problemas de visão.

Dona Maria foi diagnosticada com degeneração macular, uma condição que afeta sua visão central, dificultando sua capacidade de ler e ver detalhes finos. Confrontada com essa nova realidade, Dona Maria encontrou-se lutando não apenas para realizar tarefas cotidianas, mas também para se manter conectada em um mundo cada vez mais digital.

Ela adorava ler notícias online, manter contato com amigos e familiares por meio das redes sociais e até mesmo fazer compras pela internet. No entanto, à medida que sua visão piorava, ela descobriu que os sites que costumava visitar eram cada vez mais difíceis de usar. As letras eram muito pequenas, os contrastes eram fracos e os botões eram difíceis de distinguir.

Sentindo-se isolada e frustrada, Dona Maria quase desistiu de tentar usar a internet. No entanto, sua filha, Carolina, percebeu o quanto sua mãe estava lutando e decidiu intervir. Ela pesquisou e encontrou ferramentas de leitura de tela feitas para ajudar pessoas com defiências visuais.

Porém, ao utilizar desses aplicativos, Dona Maria descobriu que a maior parte dos sites que ela frequentava não estavam preparados para utilizar esse tipo de tecnologia. Conversando com seu sobrinho Juninho, ele explicou que muitos sites não são programados utilizando-se de atributos *HTML* para acessibilidade, o que dificulta o uso desses leitores.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador  | Fazer login no painel de administrador | Ter acesso a funções de administração |
|Usuário do sistema  | Realizar pesquisas sobre informações de programas assistênciais | Encontrar as respostas da minha duvida |
|Administrador  | Escrever uma base de conhecimento no painel de administrador | Trazer resultados nas pesquisa |
|Usuário do sistema  | Poder ver Perguntas Frequentes (FAQ) | Encontrar as respostas da minha duvida |
|Administrador  | Cadastrar as perguntas frequentes no painel de administrador | Atualizar as dúvidas frequentes de acordo com a demanda |
|Usuário do sistema  | Entrar em contato por whatsapp num atendimento humanizado | Caso encontrar alguma dificuldade |
|Usuário do sistema  | Encontrar o CRAS mais perto de mim | Poder ter um atendimento presencial |
|Usuário do sistema  | Ver links confiáveis dos programas sociais | Evitar golpes e desinformação |
|Usuário do sistema  | Ver noticias relevantes sobre programas governamentais | Ter acesso a informações atualizadas e verdadeiras |
|Administrador  | Compilar noticias no painel de administrador | Serem consultados |
|Usuário do sistema  | Me certificar através de relatos de outros usuários | Entender se o site cumpre o que promete |
|Usuário do sistema  | Saber todos os benefícios que se adequam para mim | Ver o que eu tenho direito |
|Usuário do sistema  | Ver um link fácil sobre como consultar o BPC | Aprender a fazer a consulta |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O sistema deve possuir um formulário de login para o administrador acessar | ALTA | 
|RF-002| O sistema deve possuir uma barra de pesquisas avançadas usando filtros específicos, como data, tipo de documento, agência governamental, autor, etc. | ALTA |  
|RF-003| O sistema deve permitir que o administrador escreva uma base de conhecimento | MÉDIA |  
|RF-004| O sistema deve possuir uma seção de perguntas frequentes | MÉDIA | 
|RF-004| O sistema deve possuir um botão para entrar em contato por whatsapp | MÉDIA | 
|RF-005| O sistema deve mostrar o CRAS mais próximo através da localização do usuário | ALTA | 
|RF-006| O sistema deve indexar links de várias fontes governamentais, como sites oficiais, bancos de dados, relatórios, legislação, entre outros.   | ALTA | 
|RF-007| O sistema deve permitir que o administrador compile notícias no painel de admin | BAIXA | 
|RF-008| O sistema deve possuir uma página de relatos | BAIXA | 
|RF-009| O sistema deve possuir um formulário de perguntas para retornar todos os benefícios que se adequam ao perfil do usuário | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve possuir uma interface de usuário amigável para o público idoso | ALTA | 
|RNF-002| O sistema deve ser capaz de fornecer resultados de pesquisa relevantes e precisos | ALTA | 
|RNF-003| O sistema deve agregar fontes externas confiaveis | ALTA | 
|RNF-004| O sistema deve ser de fácil manutenção | ALTA | 
|RNF-005| O sistema deve ser compatível com uma variedade de dispositivos e tamanhos de tela | ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
