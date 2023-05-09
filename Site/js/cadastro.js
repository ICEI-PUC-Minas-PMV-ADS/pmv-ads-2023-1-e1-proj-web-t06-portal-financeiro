function toggleSenha() {
    var senhaInput = document.getElementById("password");
    var icone = document.querySelector(".mostrar-senha is");
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

