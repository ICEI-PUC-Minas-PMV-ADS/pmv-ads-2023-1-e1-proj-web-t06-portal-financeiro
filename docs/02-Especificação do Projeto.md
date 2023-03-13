# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

| **Carolina Silva** |      |      |
|------------------------------|------|------|
|![persona1](img/persona1.png) | **Idade:** 18 anos  | **Ocupação:** Estudante do curso técnico em enfermagem |
| **Motivações:** Carolina Silva é motivada pelo desejo de ajudar o próximo através de trabalhos voluntários e pelo amor por sua famlía | **Frustrações:** Atrasar a mensalidade do curso e esquecer de anotar seus gastos na agenda | **Hobbies, História:** Estudar, passear com as amigas no shopping, passar horas navegando no computador|

| **João Alves** |      |      |
|------------------------------|------|------|
|![persona2](img/persona2.png) | **Idade:** 20 anos  | **Ocupação:** Estudante Universitário |
| **Motivações:** Quer aprender a gerenciar melhor o dinheiro para economizar e investir em seus hobbies e interesses. | **Frustrações:** Não sabe por onde começar a planejar suas finanças, tem dificuldades em controlar seus gastos e fica ansioso com a dívida do empréstimo estudantil. | **Hobbies, História:** Jogos de computador, assistir séries e filmes, andar de bicicleta|

| **Maria Clara** |      |      |
|------------------------------|------|------|
|![persona3](img/persona3.png) | **Idade:** 26 anos  | **Ocupação:** Mãe Solteira |
| **Motivações:** Precisa de ajuda para cuidar de suas finanças sozinha, deseja ensinar seus filhos a importância da educação financeira. | **Frustrações:** Está lutando para pagar contas mensais básicas, tem dívidas de cartão de crédito e não sabe como economizar dinheiro com um orçamento apertado. | **Hobbies, História:** Leitura, caminhada, voluntariado|

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Carolina Silva  | Registrar meus gastos pessoais          | Ter controle do meu salário              |
|Carolina Silva      |      Notificação para atualizar meus gastos            | Não esquecer de anotar |

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
|RF-001| Área de cadastro de usuário | ALTA | 
|RF-002| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-003| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-004| Resumo dos gastos mensais em forma de gráfico de pizza | MÉDIA |
|RF-005| Permitir lançar gastos variáveis a qualquer momento, recebendo o feedback de como isso afeta seu mês na hora | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser responsivo e adaptável a diferentes dispositivos, como celulares, tablets e desktops | MÉDIA | 
|RNF-002| O site deve ser fácil de usar e navegar, com uma interface intuitiva e organizada |  ALTA | 
|RNF-003| O site deve ser rápido e eficiente, garantindo uma experiência de usuário satisfatória |  ALTA | 
|RNF-004| O site deve ser seguro e proteger as informações pessoais dos usuários |  ALTA | 
|RNF-005| O site deve ter conteúdo de qualidade e atualizado sobre educação financeira |  MÉDIA | 
|RNF-006| O site deve atualizar em tempo real os dados lançados pelo usuário |  ALTA | 

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
