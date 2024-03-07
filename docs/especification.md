# Especificações do Projeto

Na abordagem da dificuldade de acesso a informações sobre programas sociais e assistência governamental, a **perspectiva do usuário** é fundamental para a definição do problema e a proposição de soluções eficazes. A elaboração dessa parte do documento segue uma metodologia estruturada, composta por elementos como o **diagrama de personas**, que retrata perfis fictícios representativos dos usuários, **histórias de usuários** que narram cenários específicos de interação com os sistemas, **requisitos funcionais e não funcionais** que delineiam as capacidades e características desejadas, além das **restrições do projeto** que impõem limites e direcionamentos.

Essa abordagem centrada no usuário visa assegurar que as soluções propostas sejam eficientes, inclusivas e capazes de superar as barreiras que atualmente dificultam o acesso a esses serviços essenciais.

## Personas

![seu joão](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/88774181-de2e-4ae0-919b-91bf8b06ddf8)

Sr. Garcia, de 65 anos, que está procurando ajuda para comprar os remédios.

Os medicamentos que o Sr. Garcia precisava eram essenciais para sua qualidade de vida, mas infelizmente eram caros demais para ele suportar com sua modesta pensão de aposentadoria. Ele se viu muitas vezes tendo que escolher entre comprar os remédios de que precisava ou pagar suas contas básicas, como aluguel e comida. 
 
![dona Maria](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/fd94f3ca-f4e9-44f1-bcb3-06f5c55a33ba)

Dona Elsa, de 65, que está procurando ajuda para vencer a solidão.

Ela tentou manter-se ocupada com suas tarefas diárias, mas a solidão era como uma sombra persistente que a acompanhava a cada passo. Dona Elsa ansiava por companhia, por alguém com quem pudesse compartilhar suas histórias, seus pensamentos e suas alegrias. 

![família](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/a77ef334-b3cc-4ef9-8e21-931a57ae9eb7)

Família que hoje buscam ajuda para encontrar um abrigo.

Essas mulheres haviam abandonado um país assolado pela guerra e pela opressão, buscando segurança e oportunidades em terras estrangeiras. Juntas, enfrentavam uma jornada repleta de perigos e desafios, mas mantinham-se unidas por um vínculo inquebrável de amor e solidariedade. 

Juntas, essas mulheres enfrentavam o desconhecido em busca de um novo lar e de uma chance de recomeçar. Embora o caminho fosse difícil e cheio de obstáculos, elas nunca perdiam a esperança de encontrar abrigo e segurança. 

![Seu Manuel](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/fc83f2bc-3475-4f0b-8f1e-1f44bdbbf93b)

Seu Manuel, de 44 anos que está procurando ajuda para parar com seu vicio em álcool 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

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
