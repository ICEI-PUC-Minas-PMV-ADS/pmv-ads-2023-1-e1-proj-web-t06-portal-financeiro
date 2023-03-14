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
|![persona3](img/persona3.jpeg) | **Idade:** 20 anos  | **Ocupação:** Estudante Universitário |
| **Motivações:** Quer aprender a gerenciar melhor o dinheiro para economizar e investir em seus hobbies e interesses. | **Frustrações:** Não sabe por onde começar a planejar suas finanças, tem dificuldades em controlar seus gastos e fica ansioso com a dívida do empréstimo estudantil. | **Hobbies, História:** Jogos de computador, assistir séries e filmes, andar de bicicleta| 

| **Maria Clara** |      |      |
|------------------------------|------|------|
|![persona2](img/persona2.jpeg) | **Idade:** 26 anos  | **Ocupação:** Mãe Solteira |
| **Motivações:** Precisa de ajuda para cuidar de suas finanças sozinha, deseja ensinar seus filhos a importância da educação financeira. | **Frustrações:** Está lutando para pagar contas mensais básicas, tem dívidas de cartão de crédito e não sabe como economizar dinheiro com um orçamento apertado. | **Hobbies, História:** Leitura, caminhada, voluntariado|

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Carolina Silva   | Registrar meus gastos diários                            | Ter controle da minha renda                     |
|Carolina Silva   | Notificação diária para atualizar meus gastos            | Manter a frequência nos registros de gastos     |
|João Alves       | Visualizar meus gastos de maneira organizada             | Poder analisar de forma prática                 |
|João Alves       | Utilizar tags para cada tipo de gasto                    | Manter organizado meu perfil                    |
|Maria Clara      | De praticidade ao registrar meus gastos                  | Ter facilidade no dia a dia                     |
|Maria Clara      | Um relátorio detalhado sobre meus gastos no fim do mês   | Poder comparar com os relátorios de outros meses|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Área de cadastro de usuário | ALTA | 
|RF-002| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-003| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-004| Resumo dos gastos mensais em forma de gráfico de pizza | BAIXA |
|RF-005| Calcular os gastos fixos e notificar o usuário sobre quanto ele tem para gastos variáveis | MÉDIA |
|RF-006| Permitir lançar gastos variáveis a qualquer momento, recebendo o feedback de como isso afeta seu mês em tempo real | MÉDIA |
|RF-007| Permitir que o usuário utilize tags em diferentes tipos de registros | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser responsivo e adaptável a diferentes dispositivos, como celulares, tablets e desktops | MÉDIA | 
|RNF-002| O site deve ser fácil de usar e navegar, com uma interface intuitiva e organizada |  ALTA | 
|RNF-003| O site deve ser rápido e eficiente, garantindo uma experiência de usuário satisfatória |  ALTA | 
|RNF-004| O site deve ser seguro e proteger as informações pessoais dos usuários |  ALTA | 
|RNF-005| O site deve ter conteúdo de qualidade e atualizado sobre educação financeira |  MÉDIA | 
|RNF-006| O site deve atualizar em tempo real os dados lançados pelo usuário |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, data limite: 25/06/2023|
|RE-02| A equipe não pode subcontratar o desenvolvimento do trabalho, devendo ser desenvolvido apenas pelo grupo de alunos |
