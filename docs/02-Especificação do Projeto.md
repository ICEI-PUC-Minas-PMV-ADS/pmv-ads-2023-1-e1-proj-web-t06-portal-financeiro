# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Nesta seção do documento, será abordada a especificação do projeto de controle financeiro, a partir da perspectiva do usuário. Serão utilizadas técnicas e ferramentas como a criação do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, bem como as restrições do projeto.

O diagrama de personas será criado com o objetivo de entender as necessidades e expectativas dos usuários do sistema de controle financeiro. As histórias de usuários serão utilizadas para descrever as atividades que os usuários desejam realizar no sistema, e os requisitos funcionais e não funcionais serão estabelecidos para definir as funcionalidades e características que o sistema deve possuir.

Além disso, serão consideradas as restrições do projeto, como o prazo de entrega e as tecnologias que serão utilizadas, a fim de garantir a viabilidade do projeto. Com essas informações, será possível definir uma solução adequada e satisfatória para os usuários, levando em conta suas necessidades e expectativas em relação ao sistema de controle financeiro.

 <br /> 

## Personas


 **<h3 align="center" >João Alves da Silva</h3 >**
 
 <img align="left" width="180px" height="190px" style="margin:-5px 1em 0 auto" src="img/persona3.jpeg"> **Biografia**: Meu nome é João Alves da Silva, tenho 20 anos e sou um estudante universitário de direito que mora em São Paulo, SP. No momento, minha renda depende dos bicos que eu faço ao longo do mês para conseguir pagar as minhas despesas.

**Metas**:
Controlar melhor meus gastos para não ficar sem dinheiro antes do fim do mês.

**Motivação**:
Sou motivado a controlar melhor minhas finanças para ter mais estabilidade financeira e conseguir alcançar meus objetivos pessoais e profissionais. Quero ter mais segurança para lidar com imprevistos.


**Frustrações**:
Esta sendo muito difícil controlar meus gastos e economizar dinheiro enquanto tento equilibrar minha vida acadêmica e minhas atividades extracurriculares.

**Bloqueadores**:
Os principais bloqueadores para alcançar minhas metas financeiras são:
* A falta de tempo para gerenciar minhas finanças; 
* Dificuldade em manter um orçamento equilibrado diante das flutuações de renda.
 <br /> 
 
##

 **<h3 align="center" >Maria Clara Pereira </h3 >**
 
<img align="left" width="180px" height="190px" style="margin:-5px 1em 0 auto" src="img/persona2.jpeg"> **Biografia**: Meu nome é Maria Clara Pereira, tenho 26 anos e moro em Belo Horizonte, MG. Sou mãe solteira de três filhos e possuo formação de nível médio. Atualmente, trabalho como manicure e cabeleireira em meu próprio salão de beleza no bairro.

**Metas**: Conseguir economizar dinheiro para poder dar uma vida melhor para meus filhos.

**Motivação**:
Eu quero ser capaz de pagar minhas contas mensais e ter dinheiro suficiente para aproveitar as pequenas coisas da vida. Além disso, quero ser um bom exemplo para meus filhos quando se trata de finanças e ensiná-los a administrar seu dinheiro de forma responsável.


**Frustrações**:
Estou lutando para pagar minhas contas mensais e muitas vezes sinto que não tenho dinheiro suficiente para tudo o que preciso. Também estou preocupada com minhas dívidas de cartão de crédito e me sinto sobrecarregada com a pressão financeira. 

**Bloqueadores**:
Meus principais bloqueadores incluem ter um orçamento apertado, não saber como economizar dinheiro e não ter muita educação financeira. Eu também sinto que não tenho muito tempo ou recursos para aprender sobre finanças pessoais, já que trabalho em tempo integral no meu salão de beleza e tenho três filhos para cuidar.


 <br />         
 
 
## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| João Alves / Maria Clara | Visualizar meus gastos de maneira organizada | Compreender de que forma o dinheiro está sendo gasto  |
| João Alves / Maria Clara | Categorizar meus gastos por tipo | Organizar as despesas  |
| João Alves / Maria Clara | Registrar meus gastos com praticidade | Ter facilidade no dia a dia |
| João Alves / Maria Clara | Planejar o uso de meu dinheiro com as despesas durante o mês. | Poder economizar |

 <br /> 
 
 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| permitir que o usuário crie um orçamento diário ou semanal para controlar seus gastos. | MÉDIA-ALTA | 
|RF-002| permitir que o usuário insira e classifique despesas do dia a dia, como alimentação, transporte e compras. | ALTA | 
|RF-003| permitir que o usuário defina limites de gastos para cada categoria de despesas. | MÉDIA-ALTA |
|RF-004| permitir que o usuário visualize um resumo diário ou semanal de seus gastos. | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final. | ALTA | 
|RNF-002| O sistema deve ter um tempo de resposta rápido para permitir que o usuário atualize as informações de gastos do dia a dia em tempo real. |  ALTA | 
|RNF-003| O sistema deve ser seguro e proteger as informações financeiras do usuário. |  ALTA | 
|RNF-004| O sistema deve ser responsivo para proporcionar a melhor experiência ao usuário em qualquer dispositivo. |  ALTA |
|RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA |


 <br /> 
 
 
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, data limite: 25/06/2023|
|RE-02| A equipe não pode subcontratar o desenvolvimento do trabalho, devendo ser desenvolvido apenas pelo grupo de alunos |
|RE-03| O projeto deve ser publicado no GitHub |
|RE-04| As tecnologias utilizadas neste projeto devem ser: HTML, CSS e JavaScript.|
