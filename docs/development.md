# Programação de Funcionalidades

O projeto foi hospedado utilizando o Github Pages, você pode acessa-lo em: [https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-infosocial/](https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-infosocial/)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação terá uma página listando sobre os principais benefícios para idosos | Sandro e Marco | index.html |
|RF-002| A aplicação deverá permitir que o usuário possa visualizar os detalhes do benefício selecionado | Sandro | atendimento-preferencial.html, bpc.html, isencao-imposto.html, isencao-iptu.html, passagem-gratuita.html, remedio-gratuito.html |
|RF-003| A aplicação deve possuir um botão para entrar em contato por whatsapp | Marco | todas as páginas |
|RF-004| A aplicação deve mostrar o CRAS mais próximo através da localização do usuário | Sandro | encontrar-cras.html |
|RF-005| A aplicação deve possuir um formulário de anamnese para retornar todos os benefícios que se adequam ao perfil do usuário | Marco | encontrar-beneficios.html |
|RF-006| A aplicação deverá fornecer um formulário de Fale Conosco, para os idosos encaminharem dúvidas | Sandro | index.html |
|RF-007| A aplicação deverá ter uma seção de perguntas frequentes | Pedro | index.html |
|RF-008| A aplicação deverá ter uma seção de perguntas noticias | Pedro | index.html |

## Descrição das estruturas:

## Perguntas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Inteiro)  | Identificador único da pergunta            | 1                                              |
| question         | Texto             | Pergunta da anamnese                         | Qual sua idade?                                   |
| buttonLabel       | Texto             | Texto do botão de perguntar                       | Próximo                           |
| isLastQuestion  | Booleano  | Indica se essa pergunta finaliza o questionario | false                                             |
| answers         | Objeto             | Opções de respostas                         | { label: '20-30', value: 20 }                                   |

## Respostas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| questionId             | Numero (Inteiro)  | Identificador pergunta            | 1                                              |
| value             | Texto  | Resposta selecionada            | '20-30'                                              |
| userId             | Numero (Inteiro)  | Id do usuário que respondeu a pergunta            | 1                                     |

## Formulario
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| name             | Texto  | Nome da pessoa respondido no formulario            | Marco                                              |
| email             | Texto  | Email da pessoa respondido no formulario            | marco.candeo@sga.pucminas.br                                              |
| message             | Texto  | Mensagem respondido no formulario            | Preciso de ajuda para encontrar benefícios                                              |

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| title         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| description       | Texto             | Descrição da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| link  | Texti  | link para o site de notícia | https://example.com                                              |

