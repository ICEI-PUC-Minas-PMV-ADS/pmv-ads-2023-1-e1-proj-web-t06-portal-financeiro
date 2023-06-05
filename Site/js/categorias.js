var posicaoVertical = 0;
var btnAdd = document.querySelector('.bnt-add');
btnAdd.addEventListener('click', function() {
  var novaCategoria = document.getElementById('textInput').value;
  var limiteGasto = document.getElementById('NumberInput').value;
  var novaDiv = document.createElement('div');
  novaDiv.classList.add('element');
     novaDiv.textContent = novaCategoria + ' Limite:R$' + limiteGasto;

     var buttonContainer = document.createElement('div');
     buttonContainer.classList.add('button-container');
     buttonContainer.style.marginTop = '14px';

     var editButton = document.createElement('button');
     editButton.classList.add('edit-btn');
     editButton.addEventListener('click', function() {
       //editar a categoria, não faço ideia to pensando XD//
     });
   
     var deleteButton = document.createElement('button');
     deleteButton.classList.add('delete-btn');
     deleteButton.addEventListener('click', function() {
        novaDiv.remove();
        organizarCategorias();
     });
   
     buttonContainer.appendChild(editButton);
     buttonContainer.appendChild(deleteButton);
   
     novaDiv.appendChild(buttonContainer);
     
  var elementContainer = document.getElementById('element-container');
  novaDiv.style.marginTop = posicaoVertical + 'px';
  posicaoVertical += 58;
  elementContainer.appendChild(novaDiv);
  document.getElementById('textInput').value = '';
  document.getElementById('NumberInput').value = '';

  organizarCategorias();



});

function organizarCategorias() {
    var elementContainer = document.getElementById('element-container');
    var categorias = elementContainer.querySelectorAll('.element');
    
    categorias.forEach(function(categoria, index) {
      categoria.style.marginTop = index * 58 + 'px';
    });
  }
