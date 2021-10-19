window.onload = function (){ 
function pesquisar(){ 
    const pesquisa = document.getElementById('txtBusca').value;
    sessionStorage.setItem("pesquisa", pesquisa);
    window.location = "resultadopesquisa.html";
  }
  
  document.getElementById('txtBusca').addEventListener('keypress',function (e) {
    if (e.key === 'Enter') {
  pesquisar();
    } 
  });
  document.getElementById('txtBuscado').value = sessionStorage.getItem("pesquisa");
  
  
  }
  