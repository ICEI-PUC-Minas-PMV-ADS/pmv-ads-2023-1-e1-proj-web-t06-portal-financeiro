function toggleSenha() {
    var senhaInput = document.getElementById("password");
    var icone = document.querySelector(".mostrar-senha i");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      icone.classList.remove("bi-eye-fill");
      icone.classList.add("bi-eye-slash-fill");
    } else {
      senhaInput.type = "password";
      icone.classList.remove("bi-eye-slash-fill");
      icone.classList.add("bi-eye-fill");
    }
  }



  function entrar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "admin" && password == "admin"){
        alert('sucesso');
        location.href = "MeusGastos.html";

    }else{
        alert('usuario ou senha incorretos');
    }

    }
    
  
  
    




  
 