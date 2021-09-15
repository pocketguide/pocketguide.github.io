window.onload = function (){  // Or with jQuery
  document.getElementById('txtBuscado').value = sessionStorage.getItem("pesquisa");

  const url = `http://appmidias.diamarcado.com.br/api/v1/PesquisaTitulo?titulo=${sessionStorage.getItem("pesquisa")}&projeto=L`;
  }
  