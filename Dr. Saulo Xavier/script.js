// ================= WHATSAPP =================
function abrirWhats() {
  const numero = "5581983675484";
  const mensagem = "Olá, gostaria de agendar uma consulta.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ================= HEADER SCROLL EFFECT =================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#0d2b4ce6";
    header.style.backdropFilter = "blur(8px)";
  } else {
    header.style.background = "#0d2b4c";
  }
});

// ================= ANIMAÇÃO AO ROLAR =================
const elementos = document.querySelectorAll(".section, .card, .especialidade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elementos.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ================= BOTÃO FLUTUANTE WHATSAPP =================
const botaoWhats = document.createElement("div");

botaoWhats.innerHTML = `
  <a href="https://wa.me/5581983675484" target="_blank">
    <div class="whatsapp-float">
      💬
    </div>
  </a>
`;

document.body.appendChild(botaoWhats);

// ================= ANIMAÇÃO CSS VIA JS =================
const style = document.createElement("style");
style.innerHTML = `
.hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

.whatsapp-float {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #25D366;
  color: white;
  font-size: 22px;
  padding: 14px 16px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: 0.3s;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
`;

document.head.appendChild(style);
