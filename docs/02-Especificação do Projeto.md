# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas


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

|João Alves       | Visualizar meus gastos de maneira organizada             | Poder analisar de forma prática                 |
|João Alves       | Utilizar tags para cada tipo de gasto                    | Manter organizado meu perfil                    |
|Maria Clara      | De praticidade ao registrar meus gastos                  | Ter facilidade no dia a dia                     |
|Maria Clara      | Um relátorio detalhado sobre meus gastos no fim do mês   | Poder comparar com os relátorios de outros meses|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| permitir que o usuário crie um orçamento diário ou semanal para controlar seus gastos. | MÉDIA-ALTA | 
|RF-002| permitir que o usuário insira e classifique despesas do dia a dia, como alimentação, transporte e compras. | ALTA | 
|RF-003| permitir que o usuário defina limites de gastos para cada categoria de despesas.  | MÉDIA-ALTA |
|RF-004| permitir que o usuário visualize um resumo diário ou semanal de seus gastos do dia a dia em forma de gráfico de pizza | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final. | ALTA | 
|RNF-002| O sistema deve ter um tempo de resposta rápido para permitir que o usuário atualize as informações de gastos do dia a dia em tempo real. |  ALTA | 
|RNF-003| O sistema deve ser seguro e proteger as informações financeiras do usuário. |  ALTA | 
|RNF-004| O sistema deve ser capaz de armazenar grandes quantidades de dados de despesas do dia a dia sem afetar a sua performance. |  ALTA | 
|RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  MÉDIA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, data limite: 25/06/2023|
|RE-02| A equipe não pode subcontratar o desenvolvimento do trabalho, devendo ser desenvolvido apenas pelo grupo de alunos |
