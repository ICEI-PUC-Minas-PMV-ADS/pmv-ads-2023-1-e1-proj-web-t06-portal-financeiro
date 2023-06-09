# Programação de Funcionalidades

##  Login 

Sua principal função é permitir que os usuários autentiquem suas identidades para obter acesso ao site. Através dessa página, os usuários podem inserir suas informações de login, como nome de usuário e senha, e o sistema verifica se essas informações são válidas para conceder o acesso. Disponibilizando também outros elementos na página, como botões para cadastrar um novo usuário e a opção para recuperação de senha.


![Tela de login](img/PaginaDeLogin.png)


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/login.html

- O usuário deve preencher os campos fornecidos na tela com e-mail e senha já cadastrados e clicar em entrar.

### Requisitos Atendidos

- |RF-001| fornecer um formulário de cadastro no qual os usuários possam inserir as informações necessárias para criar uma conta.

- |RF-002| O sistema deve autenticar corretamente os usuários, verificando se as credenciais fornecidas (e-mail e senha) correspondem a um usuário válido.  

- |RF-003| fornecer uma funcionalidade de recuperação de senha que permita aos usuários redefinir suas senhas em caso de esquecimento 

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

### Artefatos da funcionalidade

- login.html
- login.css
- login.js

### Estrutura de dados:

```
function entrar() {

    // Iniciando login

     // Colhendo todos os valores dos elementos presentes no formulário


    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    // Recupera os dados do LocalStorage com base no endereço de e-mail

    var dadosString = localStorage.getItem(email);
  
    // Verifica se os dados foram encontrados

    if (dadosString) {
      // Converte a string JSON de volta para um objeto
      var dados = JSON.parse(dadosString);
  
      // Verifica se a senha fornecida corresponde à senha armazenada

      if (senha === dados.senha) {
        alert("Login realizado com sucesso!");

        window.location.href = "MeusGastos.html"
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    } else {
      alert("Usuário não encontrado. Registre-se primeiro.");

      window.location.href = "cadastro.html"
    }
  }

```


### Cadastro

A página de cadastro de usuário é uma funcionalidade que permite que novos usuários se registrem e criem uma conta para acessar e utilizar os recursos disponíveis no site. Essa página contém um formulário onde os usuários podem inserir informações pessoais, como nome, endereço de e-mail, senha, entre outros dados relevantes para o site. Essas informações são então enviadas para o servidor, onde são processadas e armazenadas em um banco de dados.

![Tela de cadastro](img/TeladeCadastro.png)


### Instruções de Acesso

- Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/cadastro.html

- Digite as credenciais pedidas para realizar seu cadastro ( Nome, Email, Telefone, Senha e a confirmação de Senha).

- Clique em cadastrar para que você seja redirecionado para a pagina de login.

### Requisitos Atendidos

- |RF-001| fornecer um formulário de cadastro no qual os usuários possam inserir as informações necessárias para criar uma conta. 

- |RF-002| O sistema deve autenticar corretamente os usuários, verificando se as credenciais fornecidas (e-mail e senha) correspondem a um usuário válido.  

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

### Artefatos da Funcionalidade

- cadastro.html
- cadastro.css
- cadastro. js

### Estrutura de Dados

```
function cadastrar() {

  // Iniciando cadastro

  // Colhendo todos os valores dos elementos presentes no formulário


  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var celular = document.getElementById("celular").value;
  var senha = document.getElementById("senha").value;
  var confirmSenha = document.getElementById("confirmSenha").value;

  // Verifica se todos os campos foram preenchidos
  
  if (nome === "" || email === "" || celular === "" || senha === "" || confirmSenha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Verifica se a senha e a confirmação de senha são iguais
  
  if (senha !== confirmSenha) {
    alert("A senha e a confirmação de senha não correspondem.");
    return;
  }

  // Verifica se a senha contém pelo menos uma letra e um número
  
  if (!/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha)) {
    alert("A senha deve conter pelo menos uma letra e um número.");
    return;
  }
  
  // Verifica se o campo de celular contém apenas números

  if (!/^\d{8}$/.test(celular)) {
    alert("O campo de celular deve conter de 8 a 9 digitos.");
    return;
  }
  
  // Verifica se o email contém o símbolo @

  if (!email.includes('@')) {
    alert("O email deve ser válido, contendo o caractere especial @.");
    return;
  }

  // Cria um objeto para armazenar os dados

  var dados = {
    nome: nome,
    email: email,
    celular: celular,
    senha: senha
  };

  // Converte o objeto para uma string JSON

  var dadosString = JSON.stringify(dados);

  // Armazena os dados no LocalStorage

  localStorage.setItem(email, dadosString);

  alert("Dados salvos com sucesso!");

  window.location.href = "./login.html";
}
  
function voltar(){

  window.location.href = "login.html"
}

```