# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

# Teste de Software

Nesta seção, apresentamos a documentação dos testes realizados pelo grupo para verificar os requisitos funcionais e não funcionais da aplicação web InfoSocial.

## Plano de Testes de Software

Para cada caso de teste (CT), associaremos o requisito, seja funcional ou não funcional, que está sendo verificado. Além disso, indicaremos o artefato (página) onde o teste será executado, juntamente com sua descrição.


**Caso de Teste** | **CT01 - Acesso página principal**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve acessar o link infomado em dados de entrada e ter acesso a página principal de conteúdo.
**Requisitos associados** | RF-001 A aplicação deve conter uma página principal de apresentação dos conteúdos.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.
**Artefatos associados** | index.html e style.css
**Resultado esperado** | Carregamento de página bem executado.
**Dados de entrada** | [InfoSocial - Link de Acesso](https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-infosocial/)
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Detalhes do benefício selecionado**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve acessar a página <br> 2) O usuário deve navegar no pagina até a seção listagem de benefícios <br> 3) O usuário deve clicar no mome de algum benefício, para ter acesso aos detalhes do mesmo.
**Requisitos associados** | RF-002	A aplicação deverá permitir que o usuário possa visualizar os detalhes do benefício selecionado.<br> RF-001	A aplicação terá uma página listando sobre os principais benefícios para idosos.<br> RNF-002	O sistema deve ser responsivo.
**Artefatos associados** | index.html, atendimento-preferencial.html, bpc.html, isencao-imposto.html, isencao-iptu.html, passagem-gratuita.html, remedio-gratuito.html, encontrar-beneficios.html
**Resultado esperado** | Carregamento de página bem executado, listagem de benefícios e paginas de detalhamentos.
**Dados de entrada** | Acesso do usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Acesso a um atendimento humanizado**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve qualquer uma das páginas <br> 2) O usuário deve navegar na pagina até o botão verde com o símbolo do Whatsapp <br> 3) O usuário deve clicar no botão e será encaminhado pela API do whatsapp a um atendimento humanizado.
**Requisitos associados** | RF-003 A aplicação deve possuir um botão para entrar em contato por whatsapp.<br> RNF-007	A aplicação deverá utilizar a API oficial do whatsapp para iniciar a conversa por whatsapp (https://wa.me).<br> RNF-002	O sistema deve ser responsivo.
**Artefatos associados** | index.html, atendimento-preferencial.html, bpc.html, isencao-imposto.html, isencao-iptu.html, passagem-gratuita.html, remedio-gratuito.html, encontrar-cras.html, encontrar-beneficios.html
**Resultado esperado** | Carregamento de página bem executado, API do Whatsapp integrada com sucesso, abrindo uma conversa de forma automatizada.
**Dados de entrada** | Acesso do usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Mapa do CRAS mais próximo**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve clicar no botão "CRAS" <br> 2) O usuário deve permitir que o navegador colete sua localização <br> 3) O mapa deve exibir a localizacao do usuário, indicando o CRAS mais próximo.
**Requisitos associados** | RF-004		A aplicação deve mostrar o CRAS mais próximo através da localização do usuário.<br> RNF-008 A aplicação deverá utilizar a API OPEN STREET MAPS para gerar mapas e traçar localizações.<br> RNF-002	O sistema deve ser responsivo.<br> RNF-009 A aplicação deverá captar a localização do usuário através da API nativa do javascript de Geolocalização.
**Artefatos associados** | encontrar-cras.html
**Resultado esperado** | Carregamento de página bem executado, localização coletada com sucesso, API do maptiler integrada com sucesso.
**Dados de entrada** | [InfoSocial - Encontrar CRAS](https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-infosocial/src/encontrar-cras.html)
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Teste de anamnese**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve clicar no botão "Benefícios" <br> 2) O usuário deve responder as perguntas corretamente <br> 3) A tela deve retornar todos os benefícios disponíveis para o usuário de acordo com as respostas dadas.
**Requisitos associados** | RF-005	A aplicação deve possuir um formulário de anamnese para retornar todos os benefícios que se adequam ao perfil do usuário.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.
**Artefatos associados** | encontrar-beneficios.html
**Resultado esperado** | Carregamento de página bem executado, sistema retornando benefícios para o usuário.
**Dados de entrada** | [InfoSocial - Encontrar Benefícios](https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-infosocial/src/encontrar-beneficios.html)
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Acesso ao Fale Conosco**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve clicar na aba "Dúvida" <br> 2) O usuário será redirecionado para outra parte da página, onde deve preencher os campos corretamente <br> 3) A dúvida será encaminhada para o e-mail da InfoSocial e será respondida pelo mesmo canal.
**Requisitos associados** | RF-006	A aplicação deverá fornecer um formulário de Fale Conosco, para os idosos encaminharem dúvidas.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.
**Artefatos associados** | index.html, db.json, package-lock.json, package.json
**Resultado esperado** | Carregamento de página bem executado, sistema encaminhando dúvidas com dados do formulário para o e-mail corretamente.
**Dados de entrada** | Acesso do usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Acesso ao FAQ**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve clicar na aba "FAQ" <br> 2) O usuário será redirecionado para outra parte da página, onde deve clicar na pergunta que quer responder <br> 3) A resposta será exibida logo abaixo, com um texto completo e útil.
**Requisitos associados** | RF-007	A aplicação deverá ter uma seção de perguntas frequentes.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.
**Artefatos associados** | index.html
**Resultado esperado** | Carregamento de página bem executado, âncora encaminhando usuário para a seção de perguntas frequentes corretamente.
**Dados de entrada** | Acesso do usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Acesso a notícias relevantes de fontes confiáveis**
 :--------------: | ------------
**Procedimento**  | 	1) O usuário deve clicar na aba "Notícias" <br> 2) O usuário será redirecionado para outra parte da página, onde verá cards de notícias <br> 3) Ao clicar no card, o usuário será reencaminhado para uma fonte confiável que publicou a notícia exibida no mesmo.
**Requisitos associados** | RF-008	A aplicação deverá ter uma seção de notícias relevantes.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.
**Artefatos associados** | index.html
**Resultado esperado** | Carregamento de página bem executado, âncora encaminhando usuário para a seção de notícias corretamente, cards reencaminhando para fontes das notícias corretamente.
**Dados de entrada** | Acesso do usuário
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção está apresentando um relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documentamos cada "caso de teste" apresentando um vídeo ou animação que comprova o funcionamento da funcionalidade especificada nos requisitos funcionais e não-funcionais do projeto.

|*Caso de Teste*    |*CT01 - Acessar os exercícios* |
|---|---|
|Requisito Associado | RF-001 A aplicação deve conter uma página principal de apresentação dos conteúdos.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso. |
|Link do vídeo do teste realizado: | [CT01 - Video](https://www.loom.com/share/0ff591d4de6c43179c7367a685d40a34?sid=ec4d2a4c-e6fa-4339-840b-1a039eff8e54)  | 

|*Caso de Teste*    |*CT02 - Detalhes do benefício selecionado* |
|---|---|
|Requisito Associado | RF-002	A aplicação deverá permitir que o usuário possa visualizar os detalhes do benefício selecionado.<br> RF-001	A aplicação terá uma página listando sobre os principais benefícios para idosos.<br> RNF-002	O sistema deve ser responsivo. |
|Link do vídeo do teste realizado: | [CT02 - Video](https://www.loom.com/share/07a3639a927541e7a6c875a2d9fce0df?sid=856c0e3f-f0d6-4e2c-bc47-1f9e5718c92d)  | 

|*Caso de Teste*    |*CT03 - Acesso a um atendimento humanizado* |
|---|---|
|Requisito Associado | RF-003 A aplicação deve possuir um botão para entrar em contato por whatsapp.<br> RNF-007	A aplicação deverá utilizar a API oficial do whatsapp para iniciar a conversa por whatsapp (https://wa.me).<br> RNF-002	O sistema deve ser responsivo. |
|Link do vídeo do teste realizado: | [CT03 - Video](https://www.loom.com/share/9a08d0b3c6d84225aac825f4558faf97?sid=be5b417d-4699-474c-9f30-df2f4d06c570)  | 

|*Caso de Teste*    |*CT04 - Mapa do CRAS mais próximo* |
|---|---|
|Requisito Associado | RF-004		A aplicação deve mostrar o CRAS mais próximo através da localização do usuário.<br> RNF-008 A aplicação deverá utilizar a API OPEN STREET MAPS para gerar mapas e traçar localizações.<br> RNF-002	O sistema deve ser responsivo.<br> RNF-009 A aplicação deverá captar a localização do usuário através da API nativa do javascript de Geolocalização. |
|Link do vídeo do teste realizado: | [CT04 - Video](https://www.loom.com/share/2c39276781d44a0e8fa22358369b46d7?sid=5ea1f4ba-5c84-4948-b86d-48a313e83657)  | 

|*Caso de Teste*    |*CT05 - Teste de anamnese* |
|---|---|
|Requisito Associado | RF-005	A aplicação deve possuir um formulário de anamnese para retornar todos os benefícios que se adequam ao perfil do usuário.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo. |
|Link do vídeo do teste realizado: | [CT05 - Video](https://www.loom.com/share/cc541e79b79545e4ae1a8eb3e57a94bc?sid=b24ea5c2-de46-4583-8221-bbe3c1fdf0fe)  | 

|*Caso de Teste*    |*CT06 - Acesso ao Fale Conosco* |
|---|---|
|Requisito Associado | RF-006	A aplicação deverá fornecer um formulário de Fale Conosco, para os idosos encaminharem dúvidas.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.|
|Link do vídeo do teste realizado: | [[CT06 - Video](https://www.loom.com/share/688a1f5b19bc422a90bc2fc4be2509b6)] | 

|*Caso de Teste*    |*CT07 - Acesso ao FAQ* |
|---|---|
|Requisito Associado | RF-007	A aplicação deverá ter uma seção de perguntas frequentes.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.|
|Link do vídeo do teste realizado: | [CT07 - Video](https://www.loom.com/share/90609efee0ae45cdb12230caa4e69974?sid=9fca44bc-ee1e-43ca-b98d-57f3d81859a2)  | 

|*Caso de Teste*    |*CT08 - Acesso a notícias relevantes de fontes confiáveis* |
|---|---|
|Requisito Associado | RF-008	A aplicação deverá ter uma seção de notícias relevantes.<br> RNF-001	O sistema deve possuir uma interface de usuário amigável para o público idoso.<br> RNF-002	O sistema deve ser responsivo.|
|Link do vídeo do teste realizado: | [CT08 - Video](https://www.loom.com/share/b7d8a590cbbd419c90f83277f033fd3d?sid=078766dd-d638-450e-9959-28e48edbf252)  | 


## Avaliação dos Testes de Software

### Sobre os bugs
Ao terminar os testes de software, foi possível encontrar alguns bugs de diversos níveis, desde o mais grave até o mais simples. No entanto, é válido ressaltar que todos os bugs detectados na aplicação atualmente, com base nos testes, foram corrigidos com sucesso, somando assim 4 correções de 4 bugs, segue abaixo o gráfico que separa os bugs pelas suas devidas categorias:

![chart](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-infosocial/assets/100433614/0fce7a74-9622-45e6-a10d-2981ee9db5e9)
<br>

Vale destacar que, a detecção dos bugs foram de extrema importância para o desenvolvimento do projeto, tendo em vista de que foi possível gerar um feedback de como está o estado de vida da aplicação e propor possíveis melhorias, como a correção dos retornos dados no teste de anamnese do CT05 e uma implementação mais apropriada de um indicador no mapa do CT04.

### Pontos fracos e fortes da aplicação 

Ao analisar a aplicação por meios dos testes foi possível compreender onde a aplicação mais se destaca e onde ela menos se destaca, por exemplo; como analisado no CT01, CT06, CT07 e CT08, a aplicação possui fortes pontos positivos com relação ao seu layout, sendo amigável para o público idoso, direta ao ponto e eficiente, quando o assunto é feedback e validação dos dados de entrada que o usuário pode interagir, impedindo assim, que o mesmo cometa erros básicos no sistema.

No entanto, pelo fato da aplicação se tratar de um modelo MVP (Minimum Viable Product), podem-se notar limitações significativas em suas funcionalidades, como por exemplo, poucas notícias relevantes para o público em sua biblioteca e falta de pessoas disponíveis para retornar as dúvidas do usuário e cuidar do atendimento humanizado que gostaríamos de fornecer.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à funcionalidade da aplicação de forma geral.

Para tanto, elaboramos cinco cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas três pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que se encaixa na meia idade e baixa renda. Acesse a página inicial do site e tente compreender a proposta do projeto. Tente descobrir à quais benefícios você tem direito através do teste apropriado. |
| 2             | Você é uma pessoa que se encaixa na meia idade que procura estar bem informada sobre as notícias recentes e relevantes sobre benefícios sociais, programas do governo e orientações apropriadas sobre como lidar com a parte burocrática desses temas quando estão direcionados ao público idoso. Tente se informar através dos cards da InfoSocial, que te redireciona para fontes de notícia confiáveis |
| 3             | Você é uma pessoa que se encaixa na meia idade que está procurando por CRAS próximos para realizar os procedimentos burocráticos necessários para receber os benefícios aos quais tem direito. Procure através do "Encontre um CRAS" em sua região. |
| 4             | Você é uma pessoa que se encaixa na meia idade e está com alguma dúvida sobre como utilizar o site InfoSocial. Encontre uma maneira de esclarecer a forma apropriada de usar o site ou tente mandar uma dúvida para a equipe da InfoSocial informando o que você gostaria de poder encontrar, mas não ficou claro ainda. |
| 5             | Você é uma pessoa que se encaixa na meia idade e gostaria de um atendimento mais rápido e humanizado, que o ajudasse à entender como lidar com os procedimentos burocráticos relacionados ao seu benefício. Encontre uma maneira de falar diretamente com alguém da equipe InfoSocial através do Whatsapp, usando o redirecionamento do próprio site. |



## Registro de Testes de Usabilidade

### Registro de Grupo - Idosos
Referente a usabilidade da aplicação por parte dos idosos, considerando o mesmo cenário em dois dispositivos diferentes para cada usuário;

Cenário 1: Você é uma pessoa que se encaixa na meia idade e baixa renda. Acesse a página inicial do site e tente compreender a proposta do projeto. Tente descobrir à quais benefícios você tem direito através do teste apropriado. 

|   Usuário  | Taxa de sucesso | Satisfação subjetiva |  Tempo para conclusão do cenário  |
|------------|-----------------|----------------------|-----------------------------------|
| 1 (62 / PC)| SIM             | 5                    | 57.87   segundos                  |
| 2 (75 / PC)| SIM             | 5                    | 120.30  segundos                  |
| 3 (92 / PC)| SIM             | 4                    | 164.23  segundos                  |
| 4 (62 / SP)| SIM             | 5                    | 45.83   segundos                  |
| 5 (75 / SP)| SIM             | 5                    | 108.25  segundos                  |
| 6 (92 / SP)| SIM             | 5                    | 144.23  segundos                  |                                                   
| **Média**     | 100%         | 4.8                   | 105.02 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 20.60 segundos                   |


    Comentários dos usuários: Achei o site muito agradável e fácil de usar. 
    As letras são grandes e as cores tão em um contraste bacana.


Cenário 2: Você é uma pessoa que se encaixa na meia idade que procura estar bem informada sobre as notícias recentes e relevantes sobre benefícios sociais, programas do governo e orientações apropriadas sobre como lidar com a parte burocrática desses temas quando estão direcionados ao público idoso. Tente se informar através dos cards da InfoSocial, que te redireciona para fontes de notícia confiáveis. 

|   Usuário  | Taxa de sucesso | Satisfação subjetiva |  Tempo para conclusão do cenário  |
|------------|-----------------|----------------------|-----------------------------------|
| 1 (62 / PC)| SIM             | 5                    | 33.50  segundos                   |
| 2 (75 / PC)| SIM             | 5                    | 60.67  segundos                   |
| 3 (92 / PC)| SIM             | 5                    | 92.21  segundos                   |
| 4 (62 / SP)| SIM             | 5                    | 25.80  segundos                   |
| 5 (75 / SP)| SIM             | 5                    | 53.49  segundos                   |
| 6 (92 / SP)| SIM             | 5                    | 85.44  segundos                   |                                                   
| **Média**     | 100%         | 5                    | 58.51  segundos                   |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 6.66 segundos                    |


    Comentários dos usuários: O site é fácil de acessar, o botão que leva direto para as notícias é bem útil 
    as letras dos cards estão num tamanho ótimo, parece ter sido feito pensando em quem tem dificuldade na leitura.

Cenário 3: Você é uma pessoa que se encaixa na meia idade que está procurando por CRAS próximos para realizar os procedimentos burocráticos necessários para receber os benefícios aos quais tem direito. Procure através do "Encontre um CRAS" em sua região.

|   Usuário  | Taxa de sucesso | Satisfação subjetiva |  Tempo para conclusão do cenário  |
|------------|-----------------|----------------------|-----------------------------------|
| 1 (62 / PC)| SIM             | 5                    | 41.57   segundos                  |
| 2 (75 / PC)| SIM             | 4                    | 87.30   segundos                  |
| 3 (92 / PC)| SIM             | 4                    | 102.23  segundos                  |
| 4 (62 / SP)| SIM             | 5                    | 35.87   segundos                  |
| 5 (75 / SP)| SIM             | 4                    | 80.25   segundos                  |
| 6 (92 / SP)| SIM             | 4                    | 95.23   segundos                  |                                                   
| **Média**     | 100%         | 4.42                 | 90.82   segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 7.30  segundos                   |

    Comentários dos usuários: O mapa abriu rápido e coletou de forma precisa aonde estou no momento 
    tornando mais fácil situar onde fica o CRAS mais próximo e como chegar lá, mas falta um indicador mais chamativo ainda.

Cenário 4: Você é uma pessoa que se encaixa na meia idade e está com alguma dúvida sobre como utilizar o site InfoSocial. Encontre uma maneira de esclarecer a forma apropriada de usar o site ou tente mandar uma dúvida para a equipe da InfoSocial informando o que você gostaria de poder encontrar, mas não ficou claro ainda.

|   Usuário  | Taxa de sucesso | Satisfação subjetiva |  Tempo para conclusão do cenário  |
|------------|-----------------|----------------------|-----------------------------------|
| 1 (62 / PC)| SIM             | 5                    | 70.18   segundos                  |
| 2 (75 / PC)| SIM             | 5                    | 150.71  segundos                  |
| 3 (92 / PC)| SIM             | 5                    | 230.57  segundos                  |
| 4 (62 / SP)| SIM             | 5                    | 45.34   segundos                  |
| 5 (75 / SP)| SIM             | 5                    | 128.45  segundos                  |
| 6 (92 / SP)| SIM             | 5                    | 178.76  segundos                  |                                                   
| **Média**     | 100%         | 5                    | 133.92  segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 22 segundos                      |

    Comentários dos usuários: O botão de "dúvida" no topo da página deixa intuitivo e fácil de visualizar para o que serve. 
    Demorei pra conseguir lembrar meu endereço de e-mail e pensar numa forma de explicar minha dúvida.

Cenário 5: Você é uma pessoa que se encaixa na meia idade e gostaria de um atendimento mais rápido e humanizado, que o ajudasse à entender como lidar com os procedimentos burocráticos relacionados ao seu benefício. Encontre uma maneira de falar diretamente com alguém da equipe InfoSocial através do Whatsapp, usando o redirecionamento do próprio site.

|   Usuário  | Taxa de sucesso | Satisfação subjetiva |  Tempo para conclusão do cenário  |
|------------|-----------------|----------------------|-----------------------------------|
| 1 (62 / PC)| SIM             | 5                    | 15.82   segundos                  |
| 2 (75 / PC)| SIM             | 5                    | 17.58   segundos                  |
| 3 (92 / PC)| SIM             | 5                    | 40.77   segundos                  |
| 4 (62 / SP)| SIM             | 5                    | 12.35   segundos                  |
| 5 (75 / SP)| SIM             | 5                    | 15.25   segundos                  |
| 6 (92 / SP)| SIM             | 5                    | 80.46   segundos                  |                                                   
| **Média**     | 100%         | 5                    | 29.83   segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5 segundos                       |

    Comentários dos usuários: O "Whatsapp" no cantinho da página é uma ótima notícia para quem é ansioso e prefere 
    ser atendido por um ser humano ao invés de ter que lidar com muita tecnologia toda vez que quiser reivindicar um benefício.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc. Também notamos uma discrepância no tempo entre os usuários com eles próprios dependendo do dispositivo que usavam, houve melhora perceptível de até 15% nos cenários em que o público-alvo acessava os recursos do sistema pelo celular.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 133.92 segundos — média usuários — contra 22 segundos — especialista — no cenário quatro), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação, como com a classificação mais específica das dúvidas — para reduzir a necessidade de especificidade no texto do usuário, e a implementação de um ícone mais chamativo para indicar com mais precisão o CRAS mais próximo para o usuário.



