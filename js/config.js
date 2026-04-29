// ============================================================
//  CONFIG.JS — Tout le contenu du site est ici
//  Modifie ce fichier pour personnaliser le site sans toucher
//  au HTML, CSS ou aux autres fichiers JS.
// ============================================================


// ------------------------------------------------------------
//  GÉNÉRAL
// ------------------------------------------------------------
const CONFIG = {

  // Texte affiché dans l'onglet du navigateur
  titreSite: "Memories — Fête des mères",


  // ------------------------------------------------------------
  //  PAGE ACCUEIL
  // ------------------------------------------------------------
  accueil: {
    // Petite ligne au-dessus du titre principal
    eyebrow: "Fête des mères · 2025",

    // Titre principal (le \n crée un retour à la ligne)
    titre: "Pour toi,\nmaman",

    // Sous-titre sous le titre
    sousTitre: "Quelques souvenirs pour te rappeler qu'on t'aime fort",

    // Photo principale — mettre le fichier dans /photos/ et indiquer son nom ici
    // Exemple : "photos/famille-noel.jpg"
    photoAccueil: "photos/photo-accueil.jpg",

    // Message d'accueil en italique
    messageAccueil: "Tu es ma maman à moi ! Et à moi aussi !",
  },


  // ------------------------------------------------------------
  //  PAGE QUIZ
  // ------------------------------------------------------------
  quiz: {
    titre: "À quel point nous connais-tu ?",
    sousTitre: "Quelques questions pour voir si tu nous as bien observés pendant qu'on grandissait.",

    // Messages selon le score final
    // [0 bonne réponse, 1-2 bonnes réponses, toutes bonnes]
    messagesScore: [
      "Retente ta chance !",
      "Pas mal du tout !",
      "Tu nous connais par cœur !"
    ],

    // ---- Questions ----
    // Chaque question contient :
    //   question   : le texte de la question
    //   reponses   : tableau de 3 réponses (texte)
    //   bonne      : numéro de la bonne réponse (0 = première, 1 = deuxième, 2 = troisième)
    //   feedback   : petit mot affiché après la réponse (bonne ou mauvaise)
    //   photo      : nom du fichier photo dans /photos/quiz/ — ou null si pas de photo
    questions: [
      {
        question: "Question 1 — à compléter",
        reponses: ["Réponse A", "Réponse B", "Réponse C"],
        bonne: 1,  // → Réponse B est la bonne réponse
        feedback: "Petit mot personnalisé après la question 1. À compléter.",
        photo: null  // Exemple avec photo : "souvenir-question1.jpg"
      },
      {
        question: "Question 2 — à compléter",
        reponses: ["Réponse A", "Réponse B", "Réponse C"],
        bonne: 2,  // → Réponse C est la bonne réponse
        feedback: "Petit mot personnalisé après la question 2. À compléter.",
        photo: "souvenir-q2.jpg"  // Fichier à placer dans /photos/quiz/
      },
      {
        question: "Question 3 — à compléter",
        reponses: ["Réponse A", "Réponse B", "Réponse C"],
        bonne: 0,  // → Réponse A est la bonne réponse
        feedback: "Petit mot personnalisé après la question 3. À compléter.",
        photo: null
      },
      // ---- Pour ajouter une question, copie ce bloc ----
      // {
      //   question: "Nouvelle question ?",
      //   reponses: ["Option 1", "Option 2", "Option 3"],
      //   bonne: 0,
      //   feedback: "Le petit mot qui va avec.",
      //   photo: null
      // },
    ],
  },


  // ------------------------------------------------------------
  //  PAGE GALERIE
  // ------------------------------------------------------------
  galerie: {
    titre: "Nos souvenirs",
    sousTitre: "Ceux qu'on oubliera jamais",

    // Photos de la galerie — mettre les fichiers dans /photos/galerie/
    // L'ordre ici = l'ordre d'affichage dans la galerie
    // Le masonry s'adapte automatiquement à tous les formats (portrait, paysage, carré...)
    photos: [
      { fichier: "photo1.jpg", legende: "" },  // legende optionnelle au survol
      { fichier: "photo2.jpg", legende: "" },
      { fichier: "photo3.jpg", legende: "" },
      { fichier: "photo4.jpg", legende: "" },
      { fichier: "photo5.jpg", legende: "" },
      { fichier: "photo6.jpg", legende: "" },
      // Ajoute autant de photos que tu veux sur ce modèle :
      // { fichier: "mon-fichier.jpg", legende: "Été 2019" },
    ],
  },


  // ------------------------------------------------------------
  //  PAGE CAPSULE TEMPORELLE
  // ------------------------------------------------------------
  capsule: {
    titre: "Capsule temporelle",
    description: "Ces vidéos ont été enregistrées pour toi avec amour.",

    // Date de déverrouillage — format : "AAAA-MM-JJ"
    dateOuverture: "2027-05-30",

    // Texte affiché sous le décompte
    texteAttente: "Reviens le 30 mai 2027 pour découvrir les messages.",

    // Titre affiché quand la capsule est ouverte
    titreOuverture: "Pour toi, maman",
    sousTitreOuverture: "Un message vidéo de nous deux.",

    // Vidéos — URL YouTube unlisted
    // Pour obtenir l'URL d'une vidéo YouTube unlisted :
    // YouTube Studio > ta vidéo > Partager > Copier le lien
    // Format attendu : "https://www.youtube.com/embed/IDENTIFIANT"
    // Exemple : "https://www.youtube.com/embed/dQw4w9WgXcQ"
    videos: [
      {
        prenom: "Prénom 1",  // Nom affiché sur la carte
        url: "https://www.youtube.com/embed/IDENTIFIANT_VIDEO_1"  // À remplacer
      },
      {
        prenom: "Prénom 2",
        url: "https://www.youtube.com/embed/IDENTIFIANT_VIDEO_2"  // À remplacer
      },
    ],
  },


  // ------------------------------------------------------------
  //  COULEURS — Palette verte
  //  Pour changer la teinte du site entier, modifie ces valeurs.
  //  Les valeurs sont des codes couleur CSS (#RRGGBB ou nom CSS).
  // ------------------------------------------------------------
  couleurs: {
    // Vert principal (boutons, accents, titres colorés)
    principale: "#3d7a35",

    // Vert clair (fond des blocs, bordures douces)
    claire: "#5ca653",

    // Fond très léger (arrière-plan des blocs de feedback, message accueil...)
    fondClair: "#f0f7ee",

    // Vert foncé (texte sur fond vert clair)
    foncee: "#254d20",

    // Vert bordure (séparateurs, placeholders)
    bordure: "#a8d49f",
  },

};
