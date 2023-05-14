// Carregando as informações do arquivo JSON na tabela
function loadTable() {
  // Carrega o arquivo JSON com as informações dos gastos
  fetch('js/table.json')
    .then(response => response.json())
    .then(data => {
      // Obtém a tabela do HTML
      const table = document.getElementById('table').getElementsByTagName('tbody')[0];

      // Limpa o conteúdo atual da tabela
      table.innerHTML = '';

      // Adiciona cada linha do arquivo JSON na tabela
      data.gastos.forEach(item => {
        const row = table.insertRow();

        const cell1 = row.insertCell();
        cell1.textContent = item.data;

        const cell2 = row.insertCell();
        cell2.textContent = item.descricao;

        const cell3 = row.insertCell();
        cell3.textContent = item.categoria;

        const cell4 = row.insertCell();
        cell4.textContent = item.valor.toFixed(2);

        const cell5 = row.insertCell();
        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = '<img src="img/pencil.svg" alt="Editar">';
        editButton.addEventListener('click', () => editRow(editButton));
        cell5.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<img src="img/trash.svg" alt="Excluir">';
        deleteButton.addEventListener('click', () => deleteRow(deleteButton));
        cell5.appendChild(deleteButton);
      });
    })
    .catch(error => console.error(error));
}

// Chama a função para carregar a tabela ao carregar a página
window.addEventListener('DOMContentLoaded', loadTable);
