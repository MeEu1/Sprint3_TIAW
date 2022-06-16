var img_path = '';
var nome = '';
var descricao = '';

window.onload = () => {
  let quadro_pessoas = document.getElementById('pessoas');

  for(let i = 0; i < jsonPessoas['pessoas'].length; i++) {

    img_path = jsonPessoas['pessoas'][i].hasOwnProperty('img') ? jsonPessoas['pessoas'][i]['img'] : 'imgs/user_default.png' ;
    nome = jsonPessoas['pessoas'][i]['nome'];
    descricao = jsonPessoas['pessoas'][i]['descricao'];

    quadro_pessoas.innerHTML += `<div class="pessoa"><div class="cabecalho"><img src="${img_path}"><a href="#">${nome}</a></div><hr><p class="descricao">${descricao}</p></div>`;
  }
}