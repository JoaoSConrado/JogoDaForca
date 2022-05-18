let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  palavra001 = {
    nome: "BRASIL",
    categoria: "PAÍS"
  },
  palavra002 = {
    nome: "MEXICO",
    categoria: "PAÍS"
  },
  palavra003 = {
    nome: "CHILE",
    categoria: "PAÍS"
  },
  palavra004 = {
    nome: "FRANCA",
    categoria: "PAÍS"
  },
  palavra005 = {
    nome: "RUSSIA",
    categoria: "PAÍS"
  },
  palavra006 = {
    nome: "INGLATERRA",
    categoria: "PAÍS"
  },
  palavra007 = {
    nome: "ITALIA",
    categoria: "PAÍS"
  },
  palavra008 = {
    nome: "ESPANHA",
    categoria: "PAÍS"
  },
  palavra009 = {
    nome: "URUGUAI",
    categoria: "PAÍS"
  },
  palavra010 = {
    nome: "CHINA",
    categoria: "PAÍS"
  },
  palavra011 = {
    nome: "BICICLETA",
    categoria: "TRANSPORTE"
  },
  palavra012 = {
    nome: "LANCHA",
    categoria: "TRANSPORTE"
  },
  palavra013 = {
    nome: "NAVIO",
    categoria: "TRANSPORTE"
  },
  palavra014 = {
    nome: "METRO",
    categoria: "TRANSPORTE"
  },
  palavra015 = {
    nome: "MOTOCICLETA",
    categoria: "TRANSPORTE"
  },
  palavra016 = {
    nome: "BARCO",
    categoria: "TRANSPORTE"
  },
  palavra017 = {
    nome: "AVIAO",
    categoria: "TRANSPORTE"
  },
  palavra018 = {
    nome: "TREM",
    categoria: "TRANSPORTE"
  },
  palavra019 = {
    nome: "CANOA",
    categoria: "TRANSPORTE"
  },
  palavra020 = {
    nome: "CAMINHÃO",
    categoria: "TRANSPORTE"
  },
  palavra021 = {
    nome: "XICARA",
    categoria: "OBJETOS"
  },
  palavra022 = {
    nome: "MOEDA",
    categoria: "OBJETOS"
  },
  palavra023 = {
    nome: "CELULAR",
    categoria: "OBJETOS"
  },
  palavra024 = {
    nome: "SINO",
    categoria: "OBJETOS"
  },
  palavra025 = {
    nome: "CHUVEIRO",
    categoria: "OBJETOS"
  },
  palavra026 = {
    nome: "ESCADA",
    categoria: "OBJETOS"
  },
  palavra027 = {
    nome: "LAMPADA",
    categoria: "OBJETOS"
  },
  palavra028 = {
    nome: "EDREDOM",
    categoria: "OBJETOS"
  },
  palavra029 = {
    nome: "CORTINA",
    categoria: "OBJETOS"
  },
  palavra030 = {
    nome: "LAPIS",
    categoria: "OBJETOS"
  },
  palavra031 = {
    nome: "MELANCIA",
    categoria: "ALIMENTOS"
  },
  palavra032 = {
    nome: "AMENDOIM",
    categoria: "ALIMENTOS"
  },
  palavra033 = {
    nome: "ESFIRRA",
    categoria: "ALIMENTOS"
  },
  palavra034 = {
    nome: "LASANHA",
    categoria: "ALIMENTOS"
  },
  palavra035 = {
    nome: "CHOCOLATE",
    categoria: "ALIMENTOS"
  },
  palavra036 = {
    nome: "PIZZA",
    categoria: "ALIMENTOS"
  },
  palavra037 = {
    nome: "ROCAMBOLE",
    categoria: "ALIMENTOS"
  },
  palavra038 = {
    nome: "FRANGO",
    categoria: "ALIMENTOS"
  },
  palavra039 = {
    nome: "CHICLETE",
    categoria: "ALIMENTOS"
  },
  palavra040 = {
    nome: "PICANHA",
    categoria: "ALIMENTOS"
  },
  palavra040 = {
    nome: "DRAGAO",
    categoria: "ANIMAIS"
  },
  palavra041 = {
    nome: "GALINHA",
    categoria: "ANIMAIS"
  },
  palavra042 = {
    nome: "PAVAO",
    categoria: "ANIMAIS"
  },
  palavra043 = {
    nome: "CAMELO",
    categoria: "ANIMAIS"
  },
  palavra044 = {
    nome: "PERU",
    categoria: "ANIMAIS"
  },
  palavra045 = {
    nome: "ZEBRA",
    categoria: "ANIMAIS"
  },
  palavra046 = {
    nome: "GIRAFA",
    categoria: "ANIMAIS"
  },
  palavra047 = {
    nome: "CALANGO",
    categoria: "ANIMAIS"
  },
  palavra048 = {
    nome: "SAGUI",
    categoria: "ANIMAIS"
  },
  palavra049 = {
    nome: "LAGARTIXA",
    categoria: "ANIMAIS"
  },
  palavra050 = {
    nome: "HIPOPOTAMO",
    categoria: "ANIMAIS"
  }
];

criarPalavraSecreta();

function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;

}

montarPalavraNaTela();

function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;"
      palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
    } else {
      palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparalistas(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#BF6C06";
  document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra)
  if (pos < 0) {
    tentativas--
    carregaImagemForca();

    if (tentativas == 0) {
      abreModal("OPS!", "Não foi dessa vez... A palavra secreta era: <br>" + palavraSecretaSorteada);
    }

  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    abreModal("PARABÉNS!", "Você Venceu...");
    tentativas = 0;
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background = "url('./img/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background = "url('./img/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background = "url('./img/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background = "url('./img/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background = "url('./img/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background = "url('./img/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background = "url('./img/forca.png')";
      break;
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true
  });
}

let btnReset = document.querySelector("#btnReiniciar")

btnReset.addEventListener("click", function () {
  location.reload();
});