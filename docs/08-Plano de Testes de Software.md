# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
 <br>
 
## Cenário de Teste: Login de Usuário

- **Objetivo:** Verificar se o processo de login de usuário está funcionando corretamente, permitindo que os usuários acessem suas contas com credenciais válidas.

- **Descrição:** Testar o fluxo de autenticação de usuário, inserindo informações de login corretas e verificando se o acesso é concedido ao sistema.

- **Grupo de Usuários:** Usuários registrados no Bolso Feliz.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Cadastro de Novo Usuário


- **Objetivo:** Verificar se o processo de cadastro de novo usuário está funcionando adequadamente, permitindo que novos usuários se registrem fornecendo as informações necessárias.

- **Descrição:** Testar o fluxo de registro de novo usuário, preenchendo os campos obrigatórios do formulário de cadastro e verificando se o usuário é cadastrado com sucesso.

- **Grupo de Usuários:** Novos usuários interessados em criar uma conta no Bolso Feliz.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Adicionar Categoria

- **Objetivo:** Verificar se é possível adicionar uma nova categoria de gasto ao sistema.

- **Descrição:** Testar a funcionalidade de adicionar uma categoria, preenchendo o formulário com os dados da nova categoria (nome e limite) e verificando se ela é cadastrada corretamente no sistema.

- **Grupo de Usuários:** Usuários registrados no Bolso Feliz.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Adicionar Gasto


- **Objetivo:** Verificar se é possível adicionar um novo gasto ao sistema.

- **Descrição:** Testar a funcionalidade de adicionar um gasto, preenchendo o formulário com os detalhes do gasto (categoria, descrição, data, valor) e verificando se ele é registrado corretamente no sistema.

- **Grupo de Usuários:** Usuários registrados no Bolso Feliz.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Relatório Anual

- **Objetivo:** Verificar se o relatório anual é atualizado corretamente ao clicar no botão "Gasto Anual" e se mostra a soma dos valores gastos em cada mês.

- **Descrição:** Testar a funcionalidade de geração do relatório anual ao clicar no botão "Gasto Anual" e verificar se as informações são atualizadas em tempo real, exibindo a soma dos valores gastos em cada mês do ano corrente.

- **Grupo de Usuários:** Usuários registrados no Bolso Feliz.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Relatório por Categoria

- **Objetivo:** Verificar se o relatório de gastos por categoria é atualizado corretamente ao clicar no botão "Gasto por Categoria" e se mostra a porcentagem de cada categoria.

- **Descrição:** Testar a funcionalidade de geração do relatório anual ao clicar no botão "Gasto por Categoria" e verificar se as informações são atualizadas em tempo real, mostrando a porcentagem de gastos em relação ao limite estabelecido para a categoria selecionada.

- **Grupo de Usuários:** Usuários registrados no Bolso Feliz.

- **Ferramentas Utilizadas:** Navegador web, localStorage.
