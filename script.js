console.log("JS carregado");

// =======================
// WHATSAPP
// =======================
const numeroWhats = "5581983675484";

function abrirWhats() {
    window.open(`https://wa.me/${numeroWhats}`);
}

document.getElementById("whatsappBtn").onclick = abrirWhats;
document.getElementById("whatsappBtn2").onclick = abrirWhats;


// =======================
// GSAP
// =======================
gsap.registerPlugin(ScrollTrigger);


// =======================
// LENIS (CORRETO)
// =======================
const lenis = new Lenis({
    duration: 1.2,
    smooth: true
});

// 🔥 INTEGRAÇÃO CORRETA COM GSAP
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


// =======================
// ANIMAÇÕES (SEM QUEBRAR HOVER)
// =======================
gsap.utils.toArray(".animar").forEach((el) => {

    // 🚫 IGNORA CARDS E BOTÕES (ESSENCIAL)
    if (el.closest(".card",) || el.classList.contains("btn-primary")) return;

    gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true
        }
    });
});


// =======================
// PARALLAX SUAVE
// =======================
gsap.to(".parallax", {
    y: -60,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

