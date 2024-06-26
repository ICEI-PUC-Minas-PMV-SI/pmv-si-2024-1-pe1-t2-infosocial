
# Projeto de Interface

Todo o nosso projeto totaliza em 5 telas, sendo elas: tela inicial, tela de benefícios, tela de detalhamento de benefícios, mapa do CRAS e tela de consulta de benefícios.  As telas foram criadas com o objetivo de auxiliar o idoso a encontrar o seu CRAS mais próximo e fazer consultas dos principais benefícios que o governo oferece para eles. 

Pensando em nossos idosos, nossas telas foram desenvolvidas para eles, como o apoio total que a nossa tecnologia pode oferecer, ferramentas de pontas que vão auxiliar ao máxima o idosos a navegar pelo nosso site.

## User Flow

Após a criação das telas, realizamos a montagem de um fluxo que contém todas as telas do sistema.

![Diagrama info social](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/86071326/0d40a562-b156-49e3-9668-fb593fb55fad)


Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

### Página Home

A página inicial, também conhecida como "Início", desempenha um papel fundamental na nossa plataforma. Sua principal utilidade é servir como ponto de partida para os usuários, direcionando-os para as diversas seções e funcionalidades que oferecemos por meio de chamadas à ação estrategicamente distribuídas em seu layout.

Para facilitar a navegação dos usuários e garantir que eles tenham acesso rápido e intuitivo a todas as funcionalidades da nossa solução, implementamos um menu de navegação fixo que se mantém visível e disponível em todas as páginas da plataforma.

Além disso, atendemos aos requisitos estabelecidos ao disponibilizar informações cruciais na página inicial. Os benefícios de assistência social relacionados ao público idoso, notícias relevantes sobre o assunto, seção de perguntas frequentes, e botão intuitivo que redireciona para o Whatsapp para um atendimento mais humanizado, essencial para nosso público-alvo. Também fornecemos detalhes sobre o projeto, para que os usuários compreendam a nossa missão e visão, e as medidas de segurança implementadas para garantir a proteção dos nossos usuários.

Assim, a página home não apenas serve como ponto de partida, mas também como uma vitrine informativa e convidativa para nossa plataforma, proporcionando aos usuários uma experiência completa e esclarecedora desde o primeiro momento em que acessam nosso site.

> **Requisitos atendidos**:

> - [RF-003] A aplicação deve possuir uma seção de perguntas frequentes.
> - [RF-004] A aplicação deve possuir uma seção de links importantes.
> - [RF-005] A aplicação deve possuir uma seção com notícias úteis para o público idoso.
> - [RF-006] A aplicação deve possuir um botão para entrar em contato por Whatsapp.
> - [RF-009] A aplicação deverá fornecer um formulário de Fale Conosco, para os idosos encaminharem dúvidas.
> - [RF-010] A aplicação deverá encaminhar as dúvidas do formulário de Fale Conosco para um e-mail

![Home](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/100433614/470b0e91-0b94-4eb7-957a-54ab16b6b2dc)

### Página Benefícios

A página benefícios, também conhecida como "Benefícios", desempenha um papel fundamental na nossa plataforma. Sua principal utilidade é servir como um compilado dos principais benefícios governamentais de assistência social disponíveis para o público idoso, com redirecionamento apropriado para todo o passo-a-passo necessário que o usuário precisará realizar no intuito de ser cadastrado como beneficiário, ajudando-o à ter acesso mais simplificado a esse tipo de informação num site mais amigável, visualmente intuitivo e desburocratizado.

> **Requisitos atendidos**:

> - [RF-001] A aplicação terá uma página listando sobre os principais benefícios para idosos.
> - [RF-002] A aplicação deverá encaminhar para uma página detalhando o benefício escolhido.
> - [RF-006] A aplicação deve possuir um botão para entrar em contato por whatsapp.


![Benef](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/100433614/8f3c2ec1-8f05-42b1-908f-cf5df048781e)


### Página Mapa

A página mapa, também conhecida como "Mapa do CRAS", desempenha um papel fundamental na nossa plataforma. Sua principal utilidade é servir como um indicador intuitivo e amigável para o público-alvo das localizações físicas dos Centros de Referência de Assistência Social (CRAS), de forma à facilitar o acesso desses usuários às opções mais próximas disponíveis para o atendimento necessário no processo de realizarem seu cadastro nesses benefícios descritos na página "Benefícios", onde podem receber uma orientação também sobre os benefícios disponíveis localmente (de sua própria cidade) de forma presencial, e dos pré-requisitos necessários para serem contemplados pelos mesmos.

> **Requisitos atendidos**:

> - [RF-007] A aplicação deve mostrar o CRAS mais próximo através da localização do usuário.
> - [RF-006] A aplicação deve possuir um botão para entrar em contato por whatsapp.
> - [RF-009] A aplicação deverá fornecer um formulário de Fale Conosco, para os idosos encaminharem dúvidas.

![CRAS](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/100433614/ea13db86-27a7-44e1-a444-b0c0fe38350d)

### Página Detalhamento

A página detalhamento, também conhecida como "Detalhamento de Benefícios", desempenha um papel fundamental na nossa plataforma. Sua principal utilidade é explicar de forma profunda e concisa tudo o que o usuário precisará saber no processo de ser contemplado por um benefício específico, depois de ser encaminhado pelo próprio site ao atender os pré-requisitos necessários desse benefício, lá o usuário encontrará uma breve explicação do que se trata o benefício, como ele pode ter acesso ao mesmo agora que sabe que cumpre com os pré-requisitos e de quais documentos precisará para realizar esse processo de maneira rápida e segura.

> **Requisitos atendidos**:

> - [RF-002] A aplicação deverá encaminhar para uma página detalhando o benefício escolhido
> - [RF-006] A aplicação deve possuir um botão para entrar em contato por whatsapp.

![detbenef](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/100433614/64eff785-119b-493f-89ba-b9f2957614c1)

### Página Validar

A página validar, também conhecida como "Validação de Benefícios", desempenha um papel fundamental na nossa plataforma. Sua principal utilidade é realizar um teste com o usuário, fazendo todas as perguntas necessárias para descobrir os benefícios aos quais ele cumpre os pré-requisitos ou não, de forma automatizada através de um algoritmo próprio, que compila esse pré-requisitos e traduz para o usuário em forma de simples perguntas num formulário, que ao ser respondido, retorna a informação de quais benefícios o usuário tem direito.

> **Requisitos atendidos**:

> - [RF-002] A aplicação deverá encaminhar para uma página detalhando o benefício escolhido
> - [RF-008] A aplicação deve possuir um formulário de anamnese para retornar todos os benefícios que se adequam ao perfil do usuário
> - [RF-006] A aplicação deve possuir um botão para entrar em contato por whatsapp.

![Teste](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/100433614/97c9b612-6a4d-4e4f-912a-82afe71a32dc)
