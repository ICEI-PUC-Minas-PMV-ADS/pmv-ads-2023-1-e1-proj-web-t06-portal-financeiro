# Programação de Funcionalidades
O documento de programação de funcionalidades descreve as características principais de cada página do sistema. Em cada seção, haverá uma imagem representativa da página e serão fornecidas instruções de acesso, requisitos atendidos, artefatos relacionados à funcionalidade e estruturas de dados utilizadas.

<br>

##  Página Inicial

A página inicial é o ponto de partida para explorar o que oferecemos. Nela, você encontrará uma breve descrição do nosso site e seus principais recursos. Nosso objetivo é proporcionar uma experiência incrível aos usuários, com facilidade de uso, informações relevantes e soluções eficazes para suas necessidades. Você será convidado a explorar o site e descobrir o que nos torna únicos, com um botão destacado para iniciar essa jornada. 


![Tela de apresentacao](img/paginaHome.png)


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/Apresentacao.html

- Na página inicial, clique no botão "CONHECER" para explorar o que o site tem a oferecer.

<br>

### Requisitos Atendidos

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

- |RNF-004| O sistema deve ser responsivo para proporcionar a melhor experiência ao usuário em qualquer dispositivo.

- |RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).

<br>

### Artefatos da funcionalidade

- Apresentacao.html
- Aprentacao.css
- Apresentacao.js

<br>

### Estrutura de dados:

```
 // Função que irá redirecionar o usuário ao clicar no botão "CONHECER"

 function irparalogin() {
    window.location.href = "../Site/login.html";
  }
```
<br>

##  Login 


Sua principal função é permitir que os usuários autentiquem suas identidades para obter acesso ao site. Através dessa página, os usuários podem inserir suas informações de login, como nome de usuário e senha, e o sistema verifica se essas informações são válidas para conceder o acesso. Disponibilizando também outros elementos na página, como botões para cadastrar um novo usuário e a opção para recuperação de senha.


![Tela de login](img/paginaLogin.png)


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/login.html

- Se preferir, acesse a página inicial do site e clique no botão "CONHECER" para ser redirecionado para a página de login. 

- O usuário deve preencher os campos fornecidos na tela com e-mail e senha já cadastrados e clicar em entrar.

- Caso ainda não tenha uma conta, clique em "REGISTRAR" na página de login para ser redirecionado a página de cadastro. 

<br>

### Requisitos Atendidos

- |RF-001| fornecer um formulário de cadastro no qual os usuários possam inserir as informações necessárias para criar uma conta.

- |RF-002| O sistema deve autenticar corretamente os usuários, verificando se as credenciais fornecidas (e-mail e senha) correspondem a um usuário válido.  

- |RF-003| fornecer uma funcionalidade de recuperação de senha que permita aos usuários redefinir suas senhas em caso de esquecimento 

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

<br>

### Artefatos da funcionalidade

- login.html
- login.css
- login.js

<br>

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

<br>

## Cadastro



A página de cadastro de usuário é uma funcionalidade que permite que novos usuários se registrem e criem uma conta para acessar e utilizar os recursos disponíveis no site. Essa página contém um formulário onde os usuários podem inserir informações pessoais, como nome, endereço de e-mail, senha, entre outros dados relevantes para o site. Essas informações são então enviadas para o servidor, onde são processadas e armazenadas em um banco de dados.

![Tela de cadastro](img/paginaCadastro.png)


### Instruções de Acesso

- Abra o navegador da web de sua preferência (Google Chrome, Mozilla Firefox, Safari, etc.) em seu dispositivo.

- Na barra de endereço do navegador, informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/cadastro.html

- Caso você não queira acessar diretamente pelo URL, você pode ser redirecionado para a página de cadastro através da página de login. 

- Digite as credenciais pedidas para realizar seu cadastro ( Nome, Email, Telefone, Senha e a confirmação de Senha).

- Após preencher todas as informações necessárias, clique em cadastrar para que você seja redirecionado para a pagina de login.

<br>

### Requisitos Atendidos

- |RF-001| fornecer um formulário de cadastro no qual os usuários possam inserir as informações necessárias para criar uma conta. 

- |RF-002| O sistema deve autenticar corretamente os usuários, verificando se as credenciais fornecidas (e-mail e senha) correspondem a um usuário válido.  

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

<br>

### Artefatos da Funcionalidade

- cadastro.html
- cadastro.css
- cadastro.js

<br>

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

<br>

##  Menu/Relatório



A página de menu/relatório é uma parte essencial do site, oferecendo aos usuários acesso a gráficos interativos. Nessa página, os usuários podem explorar dados por meio de gráficos dinâmicos gerados com base em suas interações. Além disso, a página fornece rotas para outras seções do site, permitindo que os usuários naveguem facilmente para diferentes páginas, como "Meus Gastos" e "Categorias". Também é disponibilizado um botão para sair/deslogar, proporcionando aos usuários a opção de encerrar sua sessão quando desejarem. 


![Tela de menu](img/paginaMenu.png)
![Tela de menuV1](img/paginaMenuV1.png)
![Tela de menuV2](img/paginaMenuV2.png)

### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/menu.html

- Se preferir, faça o login em sua conta. Após o login bem-sucedido, você será redirecionado automaticamente para a página de menu.

- Para visualizar os gastos anuais, clique no botão "Gastos Anuais". 

- Para visualizar os gastos por categorias, clique no botão "Gastos por Categoria".

- Se desejar ir para outras seções do site, basta clicar nas opções do navbar, que está localizada na parte superior da página.

- Caso queira sair da sessão atual, clique no botão "Sair".

<br>

### Requisitos Atendidos

- |RF-007| Permitir que o usuário visualize um resumo mensal de seus gastos.

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

- |RNF-002| O sistema deve ter um tempo de resposta rápido para permitir que o usuário atualize as informações de gastos do dia a dia em tempo real.

- |RNF-004| O sistema deve ser responsivo para proporcionar a melhor experiência ao usuário em qualquer dispositivo.

- |RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).

<br>

### Artefatos da funcionalidade

- menu.html
- menu.css
- menu.js

<br>

### Estrutura de dados:

```
 //Coletando dados que estão armazenados no localStorage
 const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
 const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
 let gastoAnualAberto = false;
 let gastoPorCategoriaAberto = false;

 //Função para calcular o valor total de gastos por mês
 function calcularValorTotalGastosPorMes() {
   const valorTotalGastosPorMes = Array(12).fill(0);

   gastos.forEach(gasto => {
     const data = new Date(gasto.data);
     const mes = data.getMonth(); // de 0 até 11

     valorTotalGastosPorMes[mes] += gasto.valor;
   });

   return valorTotalGastosPorMes;
 }

//Função que irá calcular a porcentagem de gastos por categoria
 function calcularPorcentagemGastosPorCategoria() {
   const porcentagemGastosPorCategoria = {};

   categorias.forEach(categoria => {
     const valorTotalGastos = calcularValorTotalGastos(categoria);
     const limite = categoria.limite;
     const porcentagem = (valorTotalGastos / limite) * 100;
     porcentagemGastosPorCategoria[categoria.nome] = porcentagem;
   });

   return porcentagemGastosPorCategoria;
 }

 //Função que calcula o valor total de gastos
 function calcularValorTotalGastos(categoria) {
   return gastos.reduce((total, gasto) => {
     if (gasto.categoria === categoria.nome) {
       return total + gasto.valor;
     }
     return total;
   }, 0);
 }

//Função que irá renderizar o gasto anual em um gráfico de colunas
 function renderizarGastoAnual() {
   const valorTotalGastosPorMes = calcularValorTotalGastosPorMes();

   const chartContainer = document.getElementById('chartContainer');
   chartContainer.innerHTML = '<canvas id="chart"></canvas>'; 

   const ctx = document.getElementById('chart').getContext('2d');
   new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
       datasets: [{
         label: 'Valor Total de Gastos',
         data: valorTotalGastosPorMes,
         backgroundColor: 'rgba(0, 128, 0, 0.5)'
       }]
     },
     options: {
       responsive: true,
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
 }

//Função que irá renderizar o gasto por categoria em um gráfico de colunas
 function renderizarGastoPorCategoria() {
   const porcentagemGastosPorCategoria = calcularPorcentagemGastosPorCategoria();

   const chartContainer = document.getElementById('chartContainer');
   chartContainer.innerHTML = '<canvas id="chart"></canvas>'; 

   const ctx = document.getElementById('chart').getContext('2d');
   new Chart(ctx, {
     type: 'bar',
     data: {
       labels: Object.keys(porcentagemGastosPorCategoria),
       datasets: [{
         label: 'Porcentagem de Gastos',
         data: Object.values(porcentagemGastosPorCategoria),
         backgroundColor: [
           'rgba(0, 128, 0, 0.5)',
           'rgba(0, 150, 0, 0.5)',
           'rgba(0, 175, 0, 0.5)',
           'rgba(0, 200, 0, 0.5)',
           'rgba(0, 225, 0, 0.5)',
           'rgba(0, 255, 0, 0.5)',
           'rgba(50, 205, 50, 0.5)',
           'rgba(75, 200, 75, 0.5)',
           'rgba(100, 190, 100, 0.5)',
           'rgba(125, 180, 125, 0.5)',
           'rgba(150, 170, 150, 0.5)',
           'rgba(175, 160, 175, 0.5)',
           'rgba(200, 150, 200, 0.5)',
           'rgba(225, 140, 225, 0.5)',
           'rgba(240, 130, 240, 0.5)',
           'rgba(0, 255, 0, 0.5)',
           'rgba(0, 235, 0, 0.5)',
           'rgba(0, 215, 0, 0.5)',
           'rgba(0, 195, 0, 0.5)',
           'rgba(0, 175, 0, 0.5)'
         ]
       }]
     },
     options: {
       responsive: true,
       scales: {
         y: {
           beginAtZero: true,
           ticks: {
             callback: function (value) {
               return value + '%'; 
             }
           }
         }
       }
     }
   });
 }

//Função que renderiza o gráfico de gasto anual se o usuário clicar uma vez, caso clique denovo irá recolher o gráfico, chamando a função fecharGráfico
 function toggleGastoAnual() {
  gastoAnualAberto = !gastoAnualAberto; 
  if (gastoAnualAberto) {
    renderizarGastoAnual();
  } else {
    fecharGrafico();
  }
}

//Função que renderiza o gráfico de gastos por categoria se o usuário clicar uma vez, caso clique denovo irá recolher o gráfico, chamando a função fecharGráfico
function toggleGastoPorCategoria() {
  gastoPorCategoriaAberto = !gastoPorCategoriaAberto; 
  if (gastoPorCategoriaAberto) {
    renderizarGastoPorCategoria();
  } else {
    fecharGrafico();
  }
}

//Função que fecha o gráfico
function fecharGrafico() {
  const chartContainer = document.getElementById('chartContainer');
  chartContainer.innerHTML = ''; // Limpa o conteúdo do container do gráfico
}




//MENSAGEM DE BOAS VINDAS:

const dadosUsuario = JSON.parse(localStorage.getItem('usuario')) || {};


const nomeUsuario = dadosUsuario.nome || '';


const saudacaoElement = document.getElementById('saudacao');

function exibirTextoGradualmente(texto, elemento) {
  let index = 0;
  const interval = setInterval(() => {
    elemento.textContent += texto[index];
    index++;
    if (index >= texto.length) {
      clearInterval(interval);
    }
  }, 100); 
}

exibirTextoGradualmente(`Olá ${nomeUsuario}, o seu relatório está pronto!`, saudacaoElement);
```

<br>


## Meus Gastos


A página de cadastro de gastos permite ao usuário registrar suas despesas pessoais de forma simples e conveniente. Nela, é possível selecionar a categoria, adicionar uma descrição, inserir a data e informar o valor do gasto. Os registros são exibidos em uma tabela, onde o usuário pode editar ou excluir as entradas existentes. Essas opções de edição e exclusão garantem que o usuário tenha total controle sobre seus registros financeiros. Com uma interface intuitiva e recursos práticos, a página de cadastro de gastos é uma ferramenta eficaz para o gerenciamento das despesas pessoais.

![Tela de gastos](img/paginaGastos.png)


### Instruções de Acesso

- Abra o navegador da web de sua preferência (Google Chrome, Mozilla Firefox, Safari, etc.) em seu dispositivo.

- Na barra de endereço do navegador, informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/MeusGastos.html

- Você também pode acessar a página de cadastro de gastos através das opções do menu, após fazer o login. 

- Na página, selecione uma categoria previamente cadastrada, preencha a descrição, a data utilizando o calendário e insira o valor do gasto.

- Após preencher todos os campos, clique no botão "Adicionar" para registrar o gasto.

- Se precisar corrigir algum erro, utilize o ícone de edição para abrir um popup e realizar as alterações necessárias. 

- Para excluir um registro de gasto, clique no ícone de lixeira correspondente ao gasto desejado. O registro será deletado permanentemente.

<br>

### Requisitos Atendidos

- |RF-004| Permitir que o usuário crie um orçamento mensal para controlar seus gastos.

- |RF-005| Permitir que o usuário insira e classifique despesas do dia a dia, como alimentação, transporte e compras. 

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final. 

- |RNF-002| O sistema deve ter um tempo de resposta rápido para permitir que o usuário atualize as informações de gastos do dia a dia em tempo real.

- |RNF-004| O sistema deve ser responsivo para proporcionar a melhor experiência ao usuário em qualquer dispositivo.

- |RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).	

<br>

### Artefatos da Funcionalidade

- MeusGastos.html
- MeusGastos.css
- MeusGastos.js

<br>

### Estrutura de Dados

```
//Seleciona os elementos
const form = document.getElementById('gastos-form');
const selecaoCategoria = document.getElementById('selecao-categoria');
const entradaDescricao = document.getElementById('entrada-descricao');
const entradaData = document.getElementById('entrada-data');
const entradaValor = document.getElementById('entrada-valor');
const corpoTabela = document.querySelector('#gastos-table tbody');

//Captura os objetos do localStorage
let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

//Função para o usuário poder escolhe a categoria e preencher o campo de categoria
function preencherSelecaoCategoria() {
  selecaoCategoria.innerHTML = '';
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria.nome;
    option.textContent = categoria.nome;
    selecaoCategoria.appendChild(option);
  });
}

//Função para renderizar o gasto cadastrado na tabela
function renderizarGastos() {
  corpoTabela.innerHTML = '';

  gastos.forEach((gasto, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${gasto.categoria}</td>
      <td>${gasto.descricao}</td>
      <td>${gasto.data}</td>
      <td>${gasto.valor.toFixed(2)}</td>
      <td>
        <button class="edit-button" data-index="${index}">
          <img src="./img/pencil.svg" alt="Editar" />
        </button>
        <button class="delete-button" data-index="${index}">
          <img src="./img/trash.svg" alt="Excluir" />
        </button>
      </td>
    `;


    const editButton = row.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      const index = parseInt(editButton.getAttribute('data-index'));
      const gasto = gastos[index];
      selecaoCategoria.value = gasto.categoria;
      entradaDescricao.value = gasto.descricao;
      entradaData.value = gasto.data;
      entradaValor.value = gasto.valor;

      const novaDescricao = prompt('Digite a nova descrição:', gasto.descricao);
      const novoValor = parseFloat(prompt('Digite o novo valor:', gasto.valor));
      

      if (novaDescricao !== null && novoValor !== null) {
        editarGasto(index, gasto.categoria, novaDescricao, gasto.data, novoValor);
      }
    });

    
    const deleteButton = row.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      const index = parseInt(deleteButton.getAttribute('data-index'));
      excluirGasto(index);
    });

    corpoTabela.appendChild(row);
  });
}


//Função para adicionar 
function adicionarGasto(categoria, descricao, data, valor) {
  const categoriaSelecionada = categorias.find(cat => cat.nome === categoria);
  const valorTotalCategoria = obterValorTotalCategoria(categoria);

  if (valorTotalCategoria + valor > categoriaSelecionada.limite) {
    alert('O valor ultrapassa o limite da categoria!');
    return;
  }

  const gasto = { categoria, descricao, data, valor };
  gastos.push(gasto);
  salvarGastos();
  renderizarGastos();
  limparFormulario();
}

//Função para abrir o alert para editar o gasto
function editarGasto(index, categoria, descricao, data, valor) {
  const categoriaSelecionada = categorias.find(cat => cat.nome === categoria);
  const valorTotalCategoria = obterValorTotalCategoria(categoria) - gastos[index].valor;

  if (valorTotalCategoria + valor > categoriaSelecionada.limite) {
    alert('O valor ultrapassa o limite da categoria!');
    return;
  }

  gastos[index].categoria = categoria;
  gastos[index].descricao = descricao;
  gastos[index].data = data;
  gastos[index].valor = valor;
  salvarGastos();
  renderizarGastos();
  limparFormulario();
}

//Função para excluir o gasto cadastrado
function excluirGasto(index) {
  const confirmarExclusao = confirm('Deseja realmente excluir o gasto?'); /* p0de alterar se quiser:D */
  if (confirmarExclusao) {
    gastos.splice(index, 1);
    salvarGastos();
    renderizarGastos();
  }
}

//Função para limpar o formulário depois que for cadastrado
function limparFormulario() {
  selecaoCategoria.value = '';
  entradaDescricao.value = '';
  entradaData.value = '';
  entradaValor.value = '';
}

//Função para calcular o valor total da categoria
function obterValorTotalCategoria(categoria) {
  return gastos.reduce((total, gasto) => {
    if (gasto.categoria === categoria) {
      return total + gasto.valor;
    }
    return total;
  }, 0);
}

//Função para salvar o gasto no localStorage com o nome do objeto sendo 'gastos'
function salvarGastos() {
  localStorage.setItem('gastos', JSON.stringify(gastos));
}

//Evento que acontece ao enviar o formulário, confere se está tudo ok para o envio, caso não, retorna mensagens
form.addEventListener('submit', event => {
  event.preventDefault();
  const categoria = selecaoCategoria.value;
  const descricao = entradaDescricao.value;
  const data = entradaData.value;
  const valor = parseFloat(entradaValor.value);

  const categoriaSelecionada = categorias.find(cat => cat.nome === categoria);
  if (!categoriaSelecionada) {
    alert('Categoria inexistente!');
    return;
  }

  if (valor > categoriaSelecionada.limite) {
    alert('O valor ultrapassa o limite da categoria!');
    return;
  }

  const indiceEdicao = form.getAttribute('data-edit-index');
  if (indiceEdicao) {
    editarGasto(indiceEdicao, categoria, descricao, data, valor);
    form.removeAttribute('data-edit-index');
  } else {
    adicionarGasto(categoria, descricao, data, valor);
  }
});

//Evento que acontece na tabela ao ser clicado no icone de editar ou de excluir
corpoTabela.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('edit-button')) {
    const index = parseInt(target.getAttribute('data-index'));
    const gasto = gastos[index];
    selecaoCategoria.value = gasto.categoria;
    entradaDescricao.value = gasto.descricao;
    entradaData.value = gasto.data;
    entradaValor.value = gasto.valor;

    const novaDescricao = prompt('Digite a nova descrição:', gasto.descricao);
    const novoValor = parseFloat(prompt('Digite o novo valor:', gasto.valor));

    if (novaDescricao !== null && novoValor !== null) {
      editarGasto(index, gasto.categoria, novaDescricao, gasto.data, novoValor);
    }
  } else if (target.classList.contains('delete-button')) {
    const index = parseInt(target.getAttribute('data-index'));
    excluirGasto(index);
  }
});

//Executando funções:
preencherSelecaoCategoria();
renderizarGastos();

```

<br>

##  Categorias 

A página de categorias permite ao usuário adicionar, editar ou excluir categorias que serão utilizadas para classificar e organizar suas transações financeiras. Essas categorias podem representar diferentes tipos de despesas, receitas ou classificações específicas do usuário. Ajudando o usuário a obter uma visão geral de como estão utilizando seu dinheiro.

![Categorias](img/paginaCategorias.png)


### Instruções de acesso

- Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t06-portal-financeiro/Site/categorias.html

### Requisitos Atendidos

- |RF-006|  Permitir que o usuário defina limites de gastos para cada categoria de despesas.

- |RNF-001| O sistema deve ser fácil de usar e ter uma interface amigável para o usuário final.

- |RNF-002| O sistema deve ter um tempo de resposta rápido para permitir que o usuário atualize as informações de gastos do dia a dia em tempo real.

- |RNF-004| O sistema deve ser responsivo para proporcionar a melhor experiência ao usuário em qualquer dispositivo.

- |RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).


### Artefatos da funcionalidade

- categorias.html
- categorias.css
- categorias.js

### Estrutura de dados:

```

//Configurações das principais variáveis e do array para armazenar os dados//
var editando = "";
var elementContainer = document.getElementById('element-container');
var dadoscategoria = JSON.parse(localStorage.getItem('categorias')) || [];
var btnAdd = document.querySelector('.bnt-add');
load();

//Salva os dados das categorias no localStorage//
function save() {
  localStorage.setItem('categorias', JSON.stringify(dadoscategoria));
}

//Cria uma nova categoria//
function addcategoria() {
  var nome = document.getElementById('textInput').value;
  var limite = document.getElementById('NumberInput').value;

  if (validarCamposVazios(nome, limite) == false) {
    if (validar(nome) == false) {
      var nova = {
        nome: PrimeiraLetraMaiusc(nome), limite: limite
      }
      dadoscategoria.push(nova);
      save();
      load();
    }
  }
}
btnAdd.addEventListener('click', addcategoria);

//Remove categorias duplicadas na tela//
function limpar(nome) {
  dadoscategoria.forEach((categoria, index) => {
    if (categoria.nome.toLowerCase() === nome.toLowerCase()) {
      dadoscategoria.splice(index, 1)
      load()
      save()
    }
  });
}

//Chama um pop-up onde o usuário consegue editar uma categoria já criada//
function editar() {
  var nomenovo = document.getElementById('nomenovo').value;
  var valornovo = document.getElementById('valornovo').value;
  if (validarCamposVazios(nomenovo, valornovo) == false) {
    if (nomenovo == editando || validar(nomenovo) == false) {
      dadoscategoria.forEach((categoria, index) => {
        if (categoria.nome == editando) {
          categoria.nome = nomenovo
          categoria.limite = valornovo
          categoria.nome = PrimeiraLetraMaiusc(nomenovo);
          load()
          save()
        }
      });
      popup();
      document.getElementById('nomenovo').value = '';
      document.getElementById('valornovo').value = '';
    }
  }
}

//Abre o pop-up da edição de categorias//
function abrirpopup(categoria) {
  document.getElementById('nomenovo').value = categoria.nome;
  document.getElementById('valornovo').value = categoria.limite;
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

//Fecha o pop-up da edição de categorias//
function popup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

//Recarrega os dados das categorias, ela limpa o conteúdo do element-container,//
//e para cada categoria armazenada no array ela cria um novo elemento//
function load() {
  elementContainer.innerHTML = "";
  dadoscategoria.forEach(categoria => {
    var novaDiv = document.createElement('div');
    novaDiv.classList.add('element');
    var textDiv = document.createElement('div');
    textDiv.classList.add('element-text');
    textDiv.textContent = categoria.nome + ' Limite:R$' + categoria.limite;

    //Configurações dos botões de excluir e editar as categorias//
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    var editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function () {
      abrirpopup(categoria);
      editando = categoria.nome;
    });

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
      limpar(categoria.nome);
    });

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    novaDiv.appendChild(textDiv);
    novaDiv.appendChild(buttonContainer);

    elementContainer.appendChild(novaDiv);
    document.getElementById('textInput').value = '';
    document.getElementById('NumberInput').value = '';

  });
}

//Verifica se usuário está tentando criar uma categoria vazia e impede//
function validarCamposVazios(nome, limite) {
  var error = false;
  if (nome == "" || limite == "") { error = true }
  return error;
};

//Verifica se a categoria já existe, se existir ele impede a criação de duas categorias iguais//
function validar(nome) {
  var error = false;
  dadoscategoria.forEach(function (element) {
    if (element.nome.toLowerCase() === nome.toLowerCase()) {
      error = true;
    }
  });
  return error;
};

//Faz toda categoria ter a primeira letra maiúscula//
function PrimeiraLetraMaiusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Leva o usuário de volta para a página Meus Gastos//
function voltarPagina() {
  window.location.href = "../Site/MeusGastos.html";
}

```
