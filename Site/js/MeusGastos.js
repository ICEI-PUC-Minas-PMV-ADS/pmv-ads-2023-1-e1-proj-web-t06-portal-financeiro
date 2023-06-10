const form = document.getElementById('gastos-form');
const selecaoCategoria = document.getElementById('selecao-categoria');
const entradaDescricao = document.getElementById('entrada-descricao');
const entradaData = document.getElementById('entrada-data');
const entradaValor = document.getElementById('entrada-valor');
const corpoTabela = document.querySelector('#gastos-table tbody');


let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
let gastos = JSON.parse(localStorage.getItem('gastos')) || [];


function preencherSelecaoCategoria() {
  selecaoCategoria.innerHTML = '';
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria.nome;
    option.textContent = categoria.nome;
    selecaoCategoria.appendChild(option);
  });
}


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


function excluirGasto(index) {
  const confirmarExclusao = confirm('Deseja realmente excluir o gasto?'); /* p0de alterar se quiser:D */
  if (confirmarExclusao) {
    gastos.splice(index, 1);
    salvarGastos();
    renderizarGastos();
  }
}

function limparFormulario() {
  selecaoCategoria.value = '';
  entradaDescricao.value = '';
  entradaData.value = '';
  entradaValor.value = '';
}

function obterValorTotalCategoria(categoria) {
  return gastos.reduce((total, gasto) => {
    if (gasto.categoria === categoria) {
      return total + gasto.valor;
    }
    return total;
  }, 0);
}

function salvarGastos() {
  localStorage.setItem('gastos', JSON.stringify(gastos));
}

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


preencherSelecaoCategoria();


renderizarGastos();
