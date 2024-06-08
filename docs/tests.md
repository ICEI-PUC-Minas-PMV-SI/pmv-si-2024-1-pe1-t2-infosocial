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
**Procedimento**  | 	1) O usuário deve acessar a página <br> 2) O usuário deve navegar no pagina até a seção listagem de benefícios <br> 3) O usuário deve clicar no menu superior no nome benefícios.
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

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta parte 1*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Criar conta parte 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1 (idade / dispositivo)   | SIM             | 5                    | 27.87 segundos                  |
| 2 (idade / dispositivo)      | SIM             | 5                    | 17.11 segundos                  |
| 3 (idade / dispositivo)      | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



