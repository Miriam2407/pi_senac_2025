function atualizarDataHeader() {
  const dataElemento = document.getElementById("data-atual");
  if (!dataElemento) return;

  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();

  dataElemento.textContent = `${dia}/${mes}/${ano}`;
}


function configurarMenu() {
  const allLinks = document.querySelectorAll(".sidebar-nav a");
  const hasSubmenuItems = document.querySelectorAll(".nav-item.has-submenu");

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const currentItem =
        link.closest(".nav-item") || link.closest(".submenu-item");

      if (link.closest(".submenu-item")) {
        e.stopPropagation();
        return;
      }

      if (currentItem.classList.contains("has-submenu")) {
        e.preventDefault();

        const wasOpen = currentItem.classList.contains("open");

        hasSubmenuItems.forEach((i) => {
          if (i !== currentItem && i.classList.contains("open")) {
            i.classList.remove("open");
            const icon = i.querySelector("i");
            if (icon) {
              icon.classList.remove("fa-minus");
              icon.classList.add("fa-plus");
            }
          }
        });

        if (!wasOpen) {
          currentItem.classList.add("open", "active");
          const icon = currentItem.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
          }
        } else {
          currentItem.classList.remove("open");
          const icon = currentItem.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
          }
        }

        return;
      }
    });
  });

  const firstItem = document.querySelector(".nav-item");
  if (firstItem) firstItem.classList.add("active");
}


async function carregarUsuario() {
  try {
    const response = await fetch("http://localhost:3005/api/auth/me", {
      credentials: "include"
    });

    if (!response.ok) {
      console.warn("Usuário não autenticado.");
      return;
    }

    const user = await response.json();

    const userElement = document.querySelector(".info-user span");

    if (userElement && user?.name) {
      userElement.textContent = user.name.toUpperCase();
    }

  } catch (error) {
    console.error("Erro ao carregar usuário:", error);
  }
}

function carregarData() {
  const el = document.getElementById("data-atual");
  if (!el) return;

  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();

  el.textContent = `${dia}/${mes}/${ano}`;
}


function configurarCards() {
  const trainingCard = document.querySelector(".training-card");
  if (trainingCard) {
    trainingCard.addEventListener("click", () => {
      alert("Redirecionando para o conteúdo de treinamento no Youtube...");
    });
  }

  const supportCard = document.querySelector(".support-card");
  if (supportCard) {
    supportCard.addEventListener("click", () => {
      alert("Abrindo formulário de contato/chat de suporte...");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarDataHeader();
  configurarMenu();
  carregarUsuario();
  carregarData();
  configurarCards();
});
