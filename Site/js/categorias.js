var editando = "";
var elementContainer = document.getElementById('element-container');
var dadoscategoria = JSON.parse(localStorage.getItem('categorias')) || [];
var btnAdd = document.querySelector('.bnt-add');
load();

function save() {
  localStorage.setItem('categorias', JSON.stringify(dadoscategoria)); 
}

function addcategoria() {
  var nome = document.getElementById('textInput').value;
  var limite = document.getElementById('NumberInput').value;

  if (validarCamposVazios(nome, limite) == false) {
    if (validar(nome) == false) {
      var nova = {
        nome: nome, limite: limite
      }
      dadoscategoria.push(nova);
      save();
      load();
    }
  }
}
btnAdd.addEventListener('click', addcategoria);

function limpar(nome) {
  dadoscategoria.forEach((categoria, index) => {
    if (categoria.nome == nome) {
      dadoscategoria.splice(index, 1)
      load()
      save()
    }
  });
}

function editar() {
  var nomenovo = document.getElementById('nomenovo').value;
  var valornovo = document.getElementById('valornovo').value;
  if (validarCamposVazios(nomenovo, valornovo) == false) {
    if (nomenovo == editando || validar(nomenovo) == false) {
      dadoscategoria.forEach((categoria, index) => {
        if (categoria.nome == editando) {
          categoria.nome = nomenovo
          categoria.limite = valornovo
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

function abrirpopup(categoria) {
  document.getElementById('nomenovo').value = categoria.nome;
  document.getElementById('valornovo').value = categoria.limite;
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

function popup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

function load() {
  elementContainer.innerHTML = "";
  dadoscategoria.forEach(categoria => {
    var novaDiv = document.createElement('div');
    novaDiv.classList.add('element');
    var textDiv = document.createElement('div');
    textDiv.classList.add('element-text');
    textDiv.textContent = categoria.nome + ' Limite:R$' + categoria.limite;

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

function validarCamposVazios(nome, limite) {
  var error = false;
  if (nome == "" || limite == "") { error = true }
  return error;
};

function validar(nome) {
  var error = false;
  dadoscategoria.forEach(function (element) {
    if (element.nome == nome) {
      error = true;
    }
  });
  return error;
};
