// elementos relevantes

const senhaInput = document.getElementById('senha');
const confirmSenhaInput = document.getElementById('confirmSenha');
const mostrarSenhaIcon = document.getElementById('mostrarSenhaIcon');
const mostrarConfirmSenhaIcon = document.getElementById('mostrarConfirmSenhaIcon');

// event listeners aos ícones do "eye"

mostrarSenhaIcon.addEventListener('click', toggleMostrarSenha);
mostrarConfirmSenhaIcon.addEventListener('click', toggleMostrarConfirmSenha);

// Função para alternar a exibição da senha

function toggleMostrarSenha() {
  if (senhaInput.type === 'password') {
    senhaInput.type = 'text';
    mostrarSenhaIcon.classList.remove('bi-eye-fill');
    mostrarSenhaIcon.classList.add('bi-eye-slash-fill');
  } else {
    senhaInput.type = 'password';
    mostrarSenhaIcon.classList.remove('bi-eye-slash-fill');
    mostrarSenhaIcon.classList.add('bi-eye-fill');
  }
}

// Função para alternar a exibição da senha de confirmação

function toggleMostrarConfirmSenha() {
  if (confirmSenhaInput.type === 'password') {
    confirmSenhaInput.type = 'text';
    mostrarConfirmSenhaIcon.classList.remove('bi-eye-fill');
    mostrarConfirmSenhaIcon.classList.add('bi-eye-slash-fill');
  } else {
    confirmSenhaInput.type = 'password';
    mostrarConfirmSenhaIcon.classList.remove('bi-eye-slash-fill');
    mostrarConfirmSenhaIcon.classList.add('bi-eye-fill');
  }
}






function cadastrar() {
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