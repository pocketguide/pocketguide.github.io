window.onload = function (){  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

$(document).ready(function(){
  // TABS
  $('ul.tabs').tabs();
});

//Modal
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

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
