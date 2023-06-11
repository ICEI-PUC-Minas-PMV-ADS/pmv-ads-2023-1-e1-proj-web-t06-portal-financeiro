# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Cenário de Teste: Página Inicial - Redirecionamento para a página de Login

**Objetivo:** Verificar se o redirecionamento da página inicial para a página de login está funcionando corretamente.

<br>

**Descrição:** O teste foi realizado para validar se, ao clicar no botão "Conhecer" na página inicial, o usuário é redirecionado corretamente para a página de login do sistema Bolso Feliz.

<br>

**Passos do Teste:**
- Acessar a página inicial do sistema Bolso Feliz.
- Localizar o botão "Conhecer" na página inicial.
- Clicar no botão "Conhecer" para iniciar o redirecionamento.
- Verificar se o usuário é redirecionado para a página de login do sistema.

<br>

 **Resultados:**
- No teste realizado, o redirecionamento da página inicial para a página de login funcionou corretamente.
- Ao clicar no botão "Conhecer", o usuário foi redirecionado para a página de login do sistema.

<br>

**Evidência:**
<div align="center">
  <img src="img/cenario1.gif" style="width: 100%; max-width: 800px;">
</div>

<br>

## Cenário de Teste: Cadastro de Novo Usuário


**Objetivo:** Verificar se o processo de cadastro de novo usuário está funcionando corretamente, permitindo que os usuários preencham os campos necessários e sejam redirecionados para a página de login.

<br>

**Descrição:** O teste foi realizado para validar se o processo de cadastro de novo usuário no sistema Bolso Feliz está operando corretamente. Foram preenchidos os campos obrigatórios de nome, e-mail, número de telefone, senha e confirmação de senha, e verificou-se se o redirecionamento para a página de login ocorre após o cadastro.

<br>

**Passos do Teste:**
- Acessar a página de cadastro de novo usuário do sistema Bolso Feliz.
- Preencher os campos de nome, e-mail, número de telefone, senha e confirmação de senha com informações válidas.
- Clicar no botão "Cadastrar" para registrar os dados do novo usuário.
- Verificar se o usuário é redirecionado para a página de login do sistema.

<br>

 **Resultados:**
- No teste realizado, o processo de cadastro de novo usuário funcionou corretamente.
- Os campos de nome, e-mail, número de telefone, senha e confirmação de senha foram preenchidos corretamente.
- Após o cadastro, o usuário foi redirecionado para a página de login do sistema.


<br>

**Evidência:**
<div align="center">
  <img src="img/login.gif" style="width: 100%; max-width: 800px;">
</div>

<br>


## Cenário de Teste: Login de Usuário


**Objetivo:** Verificar se o processo de login de usuário está funcionando corretamente, permitindo que os usuários acessem suas contas com credenciais válidas.

<br>

**Descrição:** O teste foi realizado para validar se o processo de login de usuário no sistema Bolso Feliz está operando corretamente. Foram inseridas informações de login corretas e verificou-se se o acesso foi concedido ao sistema.

<br>

**Passos do Teste:**
- Acessar a página de login do sistema Bolso Feliz.
- Preencher os campos de e-mail e senha com credenciais válidas de um usuário registrado.
- Clicar no botão de login para autenticar as informações de login.
- Verificar se o acesso ao sistema é concedido após o login.

<br>

 **Resultados:**
- No teste realizado, o processo de login de usuário funcionou corretamente.
- As informações de e-mail e senha foram inseridas corretamente.
- Após o login, o acesso ao sistema foi concedido.
- Quando credenciais inválidas foram fornecidas, uma notificação de credenciais inválidas foi exibida corretamente.


<br>

**Evidência:**
<div align="center">
  <img src="img/Login1.gif" style="width: 100%; max-width: 800px;">
</div>

<br>

## Cenário de Teste: Adicionar Categoria


**Objetivo:** Verificar se a funcionalidade de adicionar categoria está funcionando corretamente, permitindo que os usuários do sistema Bolso Feliz adicionem novas categorias para organizar seus gastos.

<br>

**Descrição:** O teste foi realizado para validar a funcionalidade de adicionar categoria no sistema Bolso Feliz. Foram inseridas informações de categoria válidas, incluindo o nome da categoria e o limite de gastos. Em seguida, verificou-se se a nova categoria foi adicionada com sucesso ao sistema. Também foi verificado se é possível editar o nome ou o limite da categoria, e se é possível deletar categorias existentes. Após a adição das categorias, foi testado o botão de voltar, que redireciona para a página de cadastro de gastos.

<br>

**Passos do Teste:**
- Acessar a página de gerenciamento de categorias do sistema Bolso Feliz.
- Verificar se a lista de categorias existentes é exibida corretamente.
- Inserir um nome válido no campo "Nome da Categoria".
- Inserir um limite de gastos válido no campo "Limite de Gasto".
- Clicar no botão de adicionar categoria para salvar a nova categoria.
- Verificar se a nova categoria foi adicionada à lista de categorias existentes.
- Testar a funcionalidade de edição, alterando o nome ou o limite da categoria.
- Verificar se as alterações realizadas na categoria foram salvas corretamente.
- Testar a funcionalidade de deleção, removendo uma categoria existente.
- Clicar no botão de voltar para retornar à página de cadastro de gastos.
- Verificar se o redirecionamento para a página de cadastro de gastos ocorre corretamente.

<br>

 **Resultados:**
- No teste realizado, a funcionalidade de adicionar categoria funcionou corretamente.
- As informações de categoria, incluindo nome e limite de gastos, foram inseridas corretamente.
- Todas as categorias adicionadas foram salvas com sucesso no sistema.
- A lista de categorias existentes foi atualizada corretamente após a adição das novas categorias.
- A funcionalidade de edição permitiu alterar o nome e o limite da categoria corretamente.
- A funcionalidade de deleção permitiu remover categorias existentes com sucesso.
- O botão de voltar redirecionou corretamente para a página de cadastro de gastos.


<br>

**Evidência:**
<div align="center">
  <img src="img/Categorias.gif" style="width: 70%; max-width: 800px;">
</div>

<br>

## Cenário de Teste: Adicionar Gasto

**Objetivo:** Verificar se a funcionalidade de adicionar gasto está funcionando corretamente no sistema Bolso Feliz. O objetivo é inserir informações válidas de compra, incluindo a categoria previamente cadastrada, descrição, data e valor. Será verificado se o valor da compra não ultrapassa o limite estabelecido na categoria. Além disso, serão testadas as funcionalidades de edição e exclusão do gasto adicionado.

<br>

**Descrição:** O teste foi realizado para validar a funcionalidade de adicionar gasto no sistema Bolso Feliz. Inicialmente, foi escolhida uma categoria previamente cadastrada na página de cadastro de categorias. Em seguida, foram inseridas informações válidas de descrição, data e valor da compra. Durante o teste, foi verificado se o valor da compra não ultrapassou o limite estabelecido na categoria selecionada. Após a adição do gasto, foram testadas as funcionalidades de edição e exclusão, para garantir que os gastos adicionados possam ser modificados ou removidos corretamente.

<br>

**Passos do Teste:**
- Acessar a página de cadastro de gastos do sistema Bolso Feliz.
- Verificar se a lista de gastos existentes é exibida corretamente.
- Escolher a categoria previamente cadastrada na página de cadastro de categorias.
- Inserir uma descrição válida no campo "Descrição".
- Inserir uma data válida no campo "Data".
- Inserir um valor válido no campo "Valor".
- Clicar no botão de adicionar gasto para salvar a nova compra.
- Verificar se o valor da compra não ultrapassa o limite estabelecido na categoria selecionada.
- Verificar se o gasto foi adicionado corretamente à tabela de gastos existentes.
- Verificar se as alterações realizadas no gasto foram salvas corretamente.
- Verificar se o gasto foi removido com sucesso da lista de gastos existentes.

<br>

 **Resultados:**
- No teste realizado, a funcionalidade de adicionar gasto funcionou corretamente.
- As informações de compra, incluindo categoria, descrição, data e valor, foram inseridas corretamente.
- O sistema verificou corretamente se o valor da compra não ultrapassou o limite estabelecido na categoria selecionada.
- O gasto adicionado foi exibido corretamente na tabela de gastos existentes.
- A funcionalidade de edição permitiu alterar a descrição ou o valor do gasto corretamente.
- As alterações realizadas no gasto foram salvas corretamente no sistema.
- A funcionalidade de exclusão permitiu remover o gasto adicionado com sucesso da lista.



<br>

**Evidência:**
<div align="center">
  <img src="img/Categorias.gif" style="width: 70%; max-width: 800px;">
</div>

<br>
## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
