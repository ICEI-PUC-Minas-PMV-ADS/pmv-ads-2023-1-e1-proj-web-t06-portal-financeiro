const senhaInput = document.getElementById('senha');
const mostrarSenhaIcon = document.getElementById('mostrarSenhaIcon');

mostrarSenhaIcon.addEventListener('click', toggleMostrarSenha);

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




  function entrar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    // Recupera os dados do LocalStorage com base no endereço de e-mail
    var dadosString = localStorage.getItem('usuario');
  
    // Verifica se os dados foram encontrados
    if (dadosString) {
      // Converte a string JSON de volta para um objeto
      var dados = JSON.parse(dadosString);
  
      // Verifica se a senha fornecida corresponde à senha armazenada
      if (senha === dados.senha) {
        alert("Login realizado com sucesso!");

        window.location.href = "./menu.html" 
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    } else {
      alert("Usuário não encontrado. Registre-se primeiro.");

      window.location.href = "cadastro.html"
    }
  }
  



  
 