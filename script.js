/* SENHA */
const senhaCorreta = "1818";

function verificarSenha() {
  const input = document.getElementById("senhaInput").value;
  const erro = document.getElementById("erroSenha");

  if (input === senhaCorreta) {
    document.getElementById("senhaTela").style.display = "none";
    document.getElementById("conteudo").style.display = "block";

    document.getElementById("ytMusic").src =
      "https://www.youtube.com/embed/9cDruEwJbss?autoplay=1&loop=1&playlist=9cDruEwJbss";

    ativarTrailer();
    iniciarCinema();
    iniciarRefrão();
  } else {
    erro.style.display = "block";
  }
}

/* FULLSCREEN */
function ativarTrailer() {
  document.documentElement.requestFullscreen?.();
}

/* TEXTO */
const cenas = [
  { tempo: 4, texto: "Hoje não é um dia comum..." },
  { tempo: 10, texto: "É o início de uma nova fase ✨" },
  { tempo: 16, texto: "Ferreira faz 18 anos 🎂" },
  { tempo: 23, texto: "Que seus sonhos se realizem 💖" },
  { tempo: 30, texto: "Feliz aniversário 🌸" }
];

let tempo = 0;

function escrever(texto) {
  const el = document.getElementById("textoMusica");
  el.innerHTML = "";
  texto.split(" ").forEach((p, i) => {
    setTimeout(() => el.innerHTML += p + " ", i * 350);
  });
}

function iniciarCinema() {
  document.body.classList.add("cinema");
  setInterval(() => {
    tempo++;
    cenas.forEach(c => {
      if (c.tempo === tempo) escrever(c.texto);
    });
  }, 1000);
}

/* CONFETE NO REFRÃO */
const refroes = [35, 70, 105];
let t = 0;

function iniciarRefrão() {
  setInterval(() => {
    t++;
    if (refroes.includes(t)) confete();
  }, 1000);
}

function confete() {
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;

  let p = Array.from({length:200}, () => ({
    x: c.width/2,
    y: c.height/2,
    dx: (Math.random()-0.5)*12,
    dy: (Math.random()-0.5)*12,
    r: Math.random()*6+3
  }));

  let f = 0;
  const anim = setInterval(() => {
    ctx.clearRect(0,0,c.width,c.height);
    p.forEach(o=>{
      ctx.beginPath();
      ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
      ctx.fillStyle="#ff69b4";
      ctx.fill();
      o.x+=o.dx; o.y+=o.dy;
    });
    if (++f > 40) clearInterval(anim);
  },20);
              }
