function abrirPagamento() {
    document.getElementById("popupPagamento").style.display = "flex";
}

function fecharPagamento() {
    document.getElementById("popupPagamento").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const chk = document.getElementById("chkTrocaNome");
  const nomeCliente = document.getElementById("nomeCliente");
  const campoNomeNF = document.getElementById("campoNomeNF");

  if (!chk || !nomeCliente || !campoNomeNF) {
    console.error("Algum elemento não foi encontrado no DOM.");
    return;
  }

  function atualizarCampos() {
    if (chk.checked) {
      nomeCliente.value = "";
      nomeCliente.setAttribute("readonly", true);

      campoNomeNF.style.display = "block";
    } else {
      nomeCliente.removeAttribute("readonly");

      campoNomeNF.style.display = "none";
    }
  }

  atualizarCampos();
  chk.addEventListener("change", atualizarCampos);
});


document.addEventListener("DOMContentLoaded", () => {
  const chk = document.getElementById("chkTrocaNome") || document.querySelector(".troca-nome input[type='checkbox']");
  const nome = document.getElementById("nomeCliente");
  const nomeNF = document.getElementById("nomeNF");

  if (!chk) {
    console.error("Checkbox 'Troca de nome' não encontrado. Verifique se o input existe na DOM.");
    return;
  }
  if (!nome) {
    console.error("Campo 'Nome' não encontrado (id='nomeCliente').");
    return;
  }

  function atualizarEstado() {
    if (chk.checked) {
      nome.value = "";
      nome.setAttribute("readonly", "true");
      nome.style.backgroundColor = "#eee";
    } else {
      nome.removeAttribute("readonly");
      nome.style.backgroundColor = "white";    }
  }

  atualizarEstado();

  chk.addEventListener("change", atualizarEstado);

  console.log("Script de Troca de Nome inicializado. Checkbox encontrado:", chk);
});