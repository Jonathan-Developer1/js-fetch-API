function imprimeObjeto(objeto) {
  var mensagem = `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${objeto.id},
        <br>
        "<span class='campo'>userId</span>": ${objeto.userId},
        <br>
        "<span class='campo'>title</span>": ${objeto.title},
        <br>
        "<span class='campo'>body</span>": ${objeto.body}
        <br>
      }
      <br>`;

  return mensagem;
}

function imprimeVetor(objeto) {
  var mensagem;

  objeto.forEach(function (obj) {
    mensagem += `
        <br>
        {
          <br>
          "<span class='campo'>id</span>": ${obj.id},
          <br>
          "<span class='campo'>userId</span>": ${obj.userId},
          <br>
          "<span class='campo'>title</span>": ${obj.title},
          <br>
          "<span class='campo'>body</span>": ${obj.body}
          <br>
        },
        <br>`;
  });

  return mensagem;
}

function imprime(objeto) {
        var mensagem = `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${objeto.id},
        <br>
        "<span class='campo'>userId</span>": ${objeto.userId},
        <br>
        "<span class='campo'>title</span>": ${objeto.title},
        <br>
        "<span class='campo'>body</span>": ${objeto.body}
        <br>
      }
      <br>`;

        return mensagem;
      }


// Deletar Dados
function imprime(objeto) {
        var mensagem = `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${objeto.id},
        <br>
        "<span class='campo'>userId</span>": ${objeto.userId},
        <br>
        "<span class='campo'>title</span>": ${objeto.title},
        <br>
        "<span class='campo'>body</span>": ${objeto.body}
        <br>
      }
      <br>`;

        return mensagem;
      }
// Fim do deletar dados



// Criar
async function postPostagens() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "Nova Postagem",
      body: "Essa é a minha mais nova postagem! :D",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      respjson.innerHTML = imprimeObjeto(json);
    });
}
// Fim da criação


// Leitura
async function getPostagem() {
  const numero = document.getElementById('numero').value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${numero}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.id) {
        document.getElementById('respjson').innerHTML = imprimeObjeto(json);
      } else {
        document.getElementById('respjson').innerHTML = "Postagem não encontrada!";
      }
    })
    .catch((error) => {
      console.error('Erro ao buscar a postagem:', error);
      document.getElementById('respjson').innerHTML = "Erro ao buscar a postagem.";
    });
}

// Fim da leitura



// Atualizar itens
async function modificarPostagens(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            title: "Essa é a modificação da minha mais nova postagem! :D",
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            respjson.innerHTML = imprime(json);
          });
      }
// Fim de atualizar

// Deletar dados
 async function removerPostagem(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            respjson.innerHTML = imprime(json);
          });
      }
// Fim do delete