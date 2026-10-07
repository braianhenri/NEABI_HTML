const botoes = document.querySelectorAll("nav a, .imagem-link-final");

botoes.forEach((botao) => {
    botao.addEventListener("mouseenter", () => {
        botao.classList.add("botao-ampliado");
    });

    botao.addEventListener("mouseleave", () => {
        botao.classList.remove("botao-ampliado");
    });
});

const elementosRevelados = document.querySelectorAll("h1, h2, p, img, .acoes");

const observador = new IntersectionObserver((entradas, observadorAtual) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observadorAtual.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

elementosRevelados.forEach((elemento) => {
    elemento.classList.add("reveal");
    observador.observe(elemento);
});
