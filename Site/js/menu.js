
 const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
 const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
 let gastoAnualAberto = false;
 let gastoPorCategoriaAberto = false;

 
 function calcularValorTotalGastosPorMes() {
   const valorTotalGastosPorMes = Array(12).fill(0);

   gastos.forEach(gasto => {
     const data = new Date(gasto.data);
     const mes = data.getMonth(); // de 0 até 11

     valorTotalGastosPorMes[mes] += gasto.valor;
   });

   return valorTotalGastosPorMes;
 }


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

 
 function calcularValorTotalGastos(categoria) {
   return gastos.reduce((total, gasto) => {
     if (gasto.categoria === categoria.nome) {
       return total + gasto.valor;
     }
     return total;
   }, 0);
 }

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

 function toggleGastoAnual() {
  gastoAnualAberto = !gastoAnualAberto; // Inverte o estado atual
  if (gastoAnualAberto) {
    renderizarGastoAnual();
  } else {
    fecharGrafico();
  }
}

function toggleGastoPorCategoria() {
  gastoPorCategoriaAberto = !gastoPorCategoriaAberto; // Inverte o estado atual
  if (gastoPorCategoriaAberto) {
    renderizarGastoPorCategoria();
  } else {
    fecharGrafico();
  }
}

function fecharGrafico() {
  const chartContainer = document.getElementById('chartContainer');
  chartContainer.innerHTML = ''; // Limpa o conteúdo do container do gráfico
}




//MENSAGEM DE BOAS VINDAS::

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

//não vai ser usado porque nao aparece um pointer 
function irMeusGastos() {
  window.location.href = "../Site/MeusGastos.html";
}


