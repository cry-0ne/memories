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
    messageAccueil: "Ça c'est ma maman à moi ! Et à moi aussi !",
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
        question: "Quelle est la pointure de Ben ?",
        reponses: [
          "45 pied gauche / 44 pied droit",
          "44 pied gauche / 45 pied droit",
          "44,5",
        ],
        bonne: 1,
        feedback: "ça se voit que le droit est plus grand",
        photo: "pieds.jpg",
      },
      {
        question: "Quel était le combo de jouets préféré de Ben et Noah ?",
        reponses: [
          "Playmobile & Kapla",
          "Lego & Géomag",
          "Pokémon & Zhuzhu pets",
        ],
        bonne: 0,
        feedback: "Des Playmobiles dans des tours de Kapla, des heures et des heures...",
        photo: null,
      },
      {
        question: "Combien de pays Noah a-t-il foulé depuis 2 ans ?",
        reponses: [
          "6",
          "7",
          "8",
        ],
        bonne: 2,
        feedback: "8 pays ! Fallait pas oublier la France.",
        photo: null,
      },
      {
        question: "Qu'est-ce que « Skylanders » ?",
        reponses: [
          "Un groupe de musique",
          "Une saga de livres",
          "Un jeu vidéo",
        ],
        bonne: 2,
        feedback: "Un jeu Wii — avec des figurines physiques qui s'importent dans le jeu.",
        photo: null,
      },
      {
        question: "À qui appartenait le doudou « Crapouille » ?",
        reponses: [
          "Ben",
          "Noah",
          "Aucun des deux",
        ],
        bonne: 1,
        feedback: "C'était le doudou de Noah !",
        photo: null,
      },
      {
        question: "Combien de dents de sagesse reste-t-il à Noah ?",
        reponses: [
          "1",
          "3",
          "0",
        ],
        bonne: 2,
        feedback: "0 — il s'en est débarrassé récemment.",
        photo: null,
      },
      {
        question: "Quel plat Ben préfère-t-il ?",
        reponses: [
          "Lasagnes",
          "Raclette",
          "Risotto aux cèpes",
        ],
        bonne: 2,
        feedback: "Risotto aux cèpes —un méga classique.",
        photo: null,
      },
      {
        question: "Laquelle de ces enseignes existe ?",
        reponses: [
          "Tutti Pouletti",
          "100% Crousty",
          "Maxi Chicken",
        ],
        bonne: 1,
        feedback: "100% Crousty — oui, ça existe vraiment.",
        photo: null,
      },
      {
        question: "Quelle bêtise Noah a-t-il faite en soirée ?",
        reponses: [
          "Boire un shot nu debout sur une table",
          "Entrer par effraction dans une piscine municipale",
          "Jeter un gros tapis marocain dans la rue depuis un balcon au 6ème étage",
        ],
        bonne: 1,
        feedback: "Le plus dur c'était d'esquiver le gardien de nuit",
        photo: "piscine.jpeg",
      },
      {
        question: "Laquelle de ces bêtises de soirée Ben n'a PAS faite ?",
        reponses: [
          "S'introduire de nuit aux Cascades de Trévoux",
          "Démarrer un engin de chantier (bétonneuse)",
          "Assister à un rassemblement clandestin de drift à L.A",
        ],
        bonne: 1,
        feedback: "Désolé Maman j'ai fait les deux autres",
        photo: "drift.jpg",
      },

],
  },


  // ------------------------------------------------------------
  //  PAGE GALERIE
  // ------------------------------------------------------------
  galerie: {
    titre: "Nos souvenirs",
    sousTitre: "On t'aime fort Maman",

    // Photos de la galerie — mettre les fichiers dans /photos/galerie/
    // L'ordre ici = l'ordre d'affichage dans la galerie
    // Le masonry s'adapte automatiquement à tous les formats (portrait, paysage, carré...)
    photos: [
      { fichier: "8.jpg", legende: "Mont Saint Michel" },  // legende optionnelle au survol
      { fichier: "2.jpg", legende: "Je fais des bulles avec mon frère!" },
      { fichier: "3.jpg", legende: "Grrrr les petits monstres" },
      { fichier: "4.jpg", legende: "Meilleurs frères du monde !" },
      { fichier: "5.jpg", legende: "Chez Bribri" },
      { fichier: "6.jpg", legende: "Ben le séducteur" },
      { fichier: "7.jpg", legende: "Toujours meilleurs frères du monde !" },
      { fichier: "1.jpg", legende: "" },
      { fichier: "9.jpg", legende: "Je Rock and Roll Maman !" },
      { fichier: "10.jpg", legende: "" },
      { fichier: "11.jpg", legende: "Merci pour la pizza" },
      { fichier: "12.jpg", legende: "Repas d'été en famille" },
      { fichier: "13.jpg", legende: "Ma petite maman" },
      { fichier: "14.jpg", legende: "" },
      { fichier: "15.jpg", legende: "" },
      { fichier: "16.jpg", legende: "Aies l'air cool Mams" },
      { fichier: "17.jpg", legende: "Papagallo" },
      { fichier: "18.jpg", legende: "Ouin ouin je peux pas caliner mes deux fils en meme temps" },
      { fichier: "19.jpg", legende: "Hihi la jolie fleur" },
      { fichier: "20.jpg", legende: "Anniversaire de Ben à Grenoble" },
      { fichier: "21.jpg", legende: "Anniversaire de Sacha" },
      { fichier: "22.jpg", legende: "J'adore CenterParks avec mon frère Brice" },
      { fichier: "23.jpg", legende: "Qu'il est beau ce tablier punaise de merde !!" },
      { fichier: "24.jpg", legende: "Une certaine aire d'autoroute" },
      { fichier: "25.jpg", legende: "Bribri le super tonton parrain" },
      { fichier: "26.jpg", legende: "EuropaPark" },
      { fichier: "27.jpg", legende: "Les Alixois-Unis aux Estables" },
      { fichier: "28.jpg", legende: "Ils sont amoureux" },
      { fichier: "29.jpg", legende: "Etre Maman c'est du sport !!!" },
      { fichier: "30.jpg", legende: "" },
      { fichier: "31.jpg", legende: "" },
      { fichier: "32.jpg", legende: "Maman et les 4 nains" },
      { fichier: "33.jpg", legende: "Même de dos tu es belle Maman" },
      { fichier: "34.jpg", legende: "Petit coup en terrasse" },
      { fichier: "35.jpg", legende: "Maman j'adore Bounty et Gros chien" },
      { fichier: "36.jpg", legende: "" },
      { fichier: "37.jpg", legende: "Heureusement que tu étais à Paris avec moi, merci" },
      { fichier: "38.jpg", legende: "" },
      { fichier: "39.jpg", legende: "Quel beau gâteau ! Je veux des religieuses la prochaine fois..." },
      
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
