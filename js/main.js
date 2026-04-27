// ============================================================
//  MAIN.JS — Moteur du site
//  Ce fichier lit CONFIG (défini dans config.js) et construit
//  toutes les pages dynamiquement. Tu n'as normalement pas
//  besoin de modifier ce fichier.
// ============================================================


// ------------------------------------------------------------
//  Applique les couleurs du config en variables CSS
// ------------------------------------------------------------
function appliquerCouleurs() {
  const root = document.documentElement.style;
  const c = CONFIG.couleurs;
  root.setProperty('--c-principale', c.principale);
  root.setProperty('--c-claire',     c.claire);
  root.setProperty('--c-fond',       c.fondClair);
  root.setProperty('--c-foncee',     c.foncee);
  root.setProperty('--c-bordure',    c.bordure);
}


// ------------------------------------------------------------
//  Navigation entre sections
// ------------------------------------------------------------
function afficherSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
}

function initNav() {
  document.querySelectorAll('.nav-links a[data-section]').forEach(a => {
    a.addEventListener('click', () => afficherSection(a.dataset.section));
  });
}


// ------------------------------------------------------------
//  PAGE ACCUEIL
// ------------------------------------------------------------
function initAccueil() {
  const cfg = CONFIG.accueil;

  document.getElementById('accueil-eyebrow').textContent = cfg.eyebrow;

  // Titre : remplace \n par <br>
  const titreEl = document.getElementById('accueil-titre');
  titreEl.innerHTML = cfg.titre.replace(/\n/g, '<br>');
  // Met en italique le dernier mot (ex. "maman")
  const mots = cfg.titre.split(/\s|\n/);
  const dernier = mots[mots.length - 1];
  titreEl.innerHTML = titreEl.innerHTML.replace(
    new RegExp(dernier + '$'),
    `<em>${dernier}</em>`
  );

  document.getElementById('accueil-sous-titre').textContent = cfg.sousTitre;
  document.getElementById('accueil-message').textContent = cfg.messageAccueil;

  const img = document.getElementById('accueil-photo');
  img.src = cfg.photoAccueil;
  img.alt = "Photo d'accueil";
}


// ------------------------------------------------------------
//  PAGE QUIZ
// ------------------------------------------------------------
let quizEtat = { current: 0, score: 0, selectionne: -1, valide: false };

function initQuiz() {
  const cfg = CONFIG.quiz;
  document.getElementById('quiz-titre').textContent = cfg.titre;
  document.getElementById('quiz-sous-titre').textContent = cfg.sousTitre;
  afficherQuestion();
}

function afficherQuestion() {
  const cfg = CONFIG.quiz;
  const q = cfg.questions[quizEtat.current];
  const total = cfg.questions.length;

  document.getElementById('quiz-compteur').textContent =
    `question ${quizEtat.current + 1} / ${total}`;
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-progress-fill').style.width =
    `${((quizEtat.current + 1) / total) * 100}%`;

  const optsEl = document.getElementById('quiz-options');
  optsEl.innerHTML = '';
  q.reponses.forEach((rep, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = rep;
    btn.addEventListener('click', () => selectionnerOption(i));
    optsEl.appendChild(btn);
  });

  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('btn-valider').style.display = 'none';
  document.getElementById('btn-suivant').style.display = 'none';
  quizEtat.selectionne = -1;
  quizEtat.valide = false;
}

function selectionnerOption(i) {
  if (quizEtat.valide) return;
  quizEtat.selectionne = i;
  document.querySelectorAll('.quiz-option').forEach((b, j) => {
    b.classList.toggle('selected', j === i);
  });
  document.getElementById('btn-valider').style.display = 'block';
}

function validerReponse() {
  if (quizEtat.selectionne < 0 || quizEtat.valide) return;
  quizEtat.valide = true;

  const q = CONFIG.quiz.questions[quizEtat.current];
  const correct = quizEtat.selectionne === q.bonne;
  if (correct) quizEtat.score++;

  // Colorie les options
  document.querySelectorAll('.quiz-option').forEach((b, j) => {
    b.classList.remove('selected');
    b.classList.add('locked');
    if (j === q.bonne)              b.classList.add('correct');
    else if (j === quizEtat.selectionne) b.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('quiz-feedback');
  fb.style.display = 'block';
  fb.className = 'quiz-feedback ' + (correct ? 'bonne' : 'mauvaise');
  document.getElementById('quiz-feedback-verdict').textContent =
    correct ? 'Bonne réponse !' : 'Mauvaise réponse :(';
  document.getElementById('quiz-feedback-texte').textContent = q.feedback;

  // Photo optionnelle
  const photoEl = document.getElementById('quiz-feedback-photo');
  if (q.photo) {
    photoEl.src = `photos/quiz/${q.photo}`;
    photoEl.alt = 'Photo souvenir';
    photoEl.style.display = 'block';
  } else {
    photoEl.style.display = 'none';
  }

  document.getElementById('btn-valider').style.display = 'none';
  document.getElementById('btn-suivant').style.display = 'block';
}

function questionSuivante() {
  quizEtat.current++;
  if (quizEtat.current >= CONFIG.quiz.questions.length) {
    afficherResultat();
    return;
  }
  afficherQuestion();
}

function afficherResultat() {
  document.getElementById('quiz-contenu').style.display = 'none';
  const res = document.getElementById('quiz-resultat');
  res.style.display = 'block';
  const total = CONFIG.quiz.questions.length;
  document.getElementById('quiz-score').textContent =
    `${quizEtat.score}/${total}`;
  const msgs = CONFIG.quiz.messagesScore;
  const msg = quizEtat.score === total ? msgs[2]
    : quizEtat.score > 0 ? msgs[1]
    : msgs[0];
  document.getElementById('quiz-resultat-msg').textContent = msg;
}

function recommencerQuiz() {
  quizEtat = { current: 0, score: 0, selectionne: -1, valide: false };
  document.getElementById('quiz-contenu').style.display = 'block';
  document.getElementById('quiz-resultat').style.display = 'none';
  afficherQuestion();
}


// ------------------------------------------------------------
//  PAGE GALERIE
// ------------------------------------------------------------
function initGalerie() {
  const cfg = CONFIG.galerie;
  document.getElementById('galerie-titre').textContent = cfg.titre;
  document.getElementById('galerie-sous-titre').textContent = cfg.sousTitre;

  const masonry = document.getElementById('masonry');
  masonry.innerHTML = '';

  cfg.photos.forEach(p => {
    const item = document.createElement('div');
    item.className = 'masonry-item';

    const img = document.createElement('img');
    img.src = `photos/galerie/${p.fichier}`;
    img.alt = p.legende || '';
    img.loading = 'lazy'; // chargement paresseux pour les performances
    item.appendChild(img);

    if (p.legende) {
      const leg = document.createElement('div');
      leg.className = 'masonry-legende';
      leg.textContent = p.legende;
      item.appendChild(leg);
    }

    masonry.appendChild(item);
  });
}


// ------------------------------------------------------------
//  PAGE CAPSULE TEMPORELLE
// ------------------------------------------------------------
let intervalCapsule = null;

function initCapsule() {
  const cfg = CONFIG.capsule;
  document.getElementById('capsule-titre').textContent = cfg.titre;
  document.getElementById('capsule-description').textContent = cfg.description;
  document.getElementById('capsule-sous-texte').textContent = cfg.texteAttente;

  // Formate la date d'ouverture en français
  const dateObj = new Date(cfg.dateOuverture + 'T00:00:00');
  const dateFormatee = dateObj.toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  document.getElementById('capsule-date-pill').innerHTML =
    `Disponible le <strong>${dateFormatee}</strong>`;

  // Titre vue ouverte
  document.getElementById('capsule-titre-ouverture').textContent = cfg.titreOuverture;
  document.getElementById('capsule-sous-titre-ouverture').textContent = cfg.sousTitreOuverture;

  // Construit les vidéos
  const videosEl = document.getElementById('capsule-videos');
  videosEl.innerHTML = '';
  cfg.videos.forEach(v => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="capsule-video-wrapper">
        <iframe src="${v.url}" allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
      </div>
      <p class="capsule-video-label">Message de ${v.prenom}</p>
    `;
    videosEl.appendChild(wrapper);
  });

  // Lance le décompte
  mettreAJourDecompte();
  if (intervalCapsule) clearInterval(intervalCapsule);
  intervalCapsule = setInterval(mettreAJourDecompte, 1000);
}

function mettreAJourDecompte() {
  const unlock = new Date(CONFIG.capsule.dateOuverture + 'T00:00:00');
  const maintenant = new Date();

  if (maintenant >= unlock) {
    // Déverrouillée
    document.getElementById('capsule-verrouillee').style.display = 'none';
    document.getElementById('capsule-ouverte').style.display = 'block';
    if (intervalCapsule) clearInterval(intervalCapsule);
    return;
  }

  const diff = unlock - maintenant;
  const j = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('c-jours').textContent = j;
  document.getElementById('c-heures').textContent = String(h).padStart(2, '0');
  document.getElementById('c-minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('c-secondes').textContent = String(s).padStart(2, '0');
}


// ------------------------------------------------------------
//  Initialisation globale au chargement de la page
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.title = CONFIG.titreSite;
  appliquerCouleurs();
  initNav();
  initAccueil();
  initQuiz();
  initGalerie();
  initCapsule();
});
