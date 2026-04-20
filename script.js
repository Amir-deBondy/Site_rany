const questions = [
  {
    badge: "Question 1",
    title: "Mon bébé Rania, je sais que je n’ai pas été parfait ces derniers jours… mais acceptes-tu que je vienne guérir le cœur que j’aime tant ?",
    text: "Réfléchis bien, la bonne réponse est très évidente.",
    yes: "Oui mon cœur 💖",
    no: "Non 🙈",
    background: "linear-gradient(180deg, #ffd6e7, #ffeef5, #f8ddff)"
  },
  {
    badge: "Question 2",
    title: "Est-ce que malgré tout, tu acceptes encore de me laisser te prouver à quel point je tiens à toi ?",
    text: "Promis, je compte bien me rattraper.",
    yes: "Oui, je te laisse faire ✨",
    no: "On verra 😶",
    background: "linear-gradient(180deg, #e7d6ff, #ffe9f7, #ffdce8)"
  },
  {
    badge: "Question 3",
    title: "Parfait, l’aventure continue… mais sais-tu vraiment à quel point je t’aime ?",
    text: "Tu n’imagines même pas à quel point tu es spéciale pour moi, mon amour.",
    yes: "Ouiii je sais 🤍",
    no: "Pas tant que ça ?",
    background: "linear-gradient(180deg, #ffd8d8, #fff0ea, #ffe1ef)"
  },
  {
    badge: "Question 4",
    title: "Ton petit cœur que j’adore a été blessé par nos disputes, et je sais qu’il te fait mal… Acceptes-tu de sortir jeudi avec l’homme méchant qui t’a blessé, pour qu’il puisse enfin te le guérir et prendre soin de toi ?",
    text: "Avec ce que je t’ai préparé, je suis sûr que tu retrouveras les étincelles, omri.",
    yes: "Oui bien sûr bb 💘",
    no: "L’homme méchant ? 😤",
    background: "linear-gradient(180deg, #f8d4ff, #ffe7f3, #e9dcff)"
  },
  {
    badge: "Question 5",
    title: "As-tu une idée du nombre de fois où je pense à toi pendant 24 heures ?",
    text: "Attention, il y a une réponse presque parfaite.",
    yes: "Oui, chaque seconde 💭",
    no: "Non, jsp 🙃",
    background: "linear-gradient(180deg, #ffd9df, #fff0f3, #ffe1ea)"
  },
  {
    badge: "Question 6",
    title: "Si je pouvais effacer ta tristesse d’un seul geste et te rendre le sourire tout de suite, tu me laisserais le faire ?",
    text: "Parce que ton sourire reste mon endroit préféré.",
    yes: "Oui, viens là 🥺",
    no: "Je réfléchis encore",
    background: "linear-gradient(180deg, #ffd8e8, #fff0e8, #ffe6d8)"
  },
  {
    badge: "Question finale",
    title: "Alors Baby… acceptes-tu de me laisser te reconquérir doucement, te faire passer une magnifique journée jeudi, et rallumer avec moi tout ce qu’on a de beau ?",
    text: "Cette fois, choisis avec ton joli cœur.",
    yes: "Oui, j’accepte mon amour 💍",
    no: "Je m’enfuis 😭",
    background: "linear-gradient(180deg, #e6d8ff, #ffe8f7, #ffd7f0)"
  }
];

let currentQuestion = 0;

const badge = document.querySelector(".badge");
const title = document.querySelector("h1");
const text = document.querySelector("p");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");
const body = document.body;

function renderQuestion() {
  const q = questions[currentQuestion];

  badge.textContent = q.badge;
  title.textContent = q.title;
  text.textContent = q.text;
  yesBtn.textContent = q.yes;
  noBtn.textContent = q.no;

  body.style.background = q.background;

  noBtn.style.left = "50%";
  noBtn.style.top = "80px";
  noBtn.style.transform = "translateX(-50%)";
}

function moveNoButton() {
  const x = Math.floor(Math.random() * 220) - 110;
  const y = Math.floor(Math.random() * 120) - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

yesBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    body.style.background = "linear-gradient(180deg, #ffd6e7, #fff0f7, #f7dfff)";
    card.innerHTML = `
      <div class="final-message">
        <div class="badge">Mission réussie</div>
        <h1>Tu viens officiellement de faire de moi le plus heureux du monde mon BB.</h1>
        <p>Merci d’avoir joué le jeu. Ce petit site n’était qu’une façon mignonne de te dire que tu comptes énormément pour moi, et que j’ai sincèrement envie de prendre soin de ton cœur.</p>
        <p class="final-love">Je t’aime très fort Omri, et j’espère que jeudi sera le début d’un moment doux, sincère et rempli d’étincelles entre nous. 💖</p>
      </div>
    `;
  }
});

renderQuestion();
