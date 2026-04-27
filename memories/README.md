# memories — Guide de personnalisation

Site statique pour GitHub Pages. Zéro dépendance, zéro installation.

---

## Structure des fichiers

```
memories/
├── index.html              ← Structure de la page (ne pas modifier)
├── css/
│   └── style.css           ← Mise en page et styles (ne pas modifier)
├── js/
│   ├── config.js           ← ✏️  TOUT le contenu est ici — c'est le seul fichier à modifier
│   └── main.js             ← Moteur du site (ne pas modifier)
└── photos/
    ├── photo-accueil.jpg   ← Photo de la page d'accueil
    ├── galerie/            ← Toutes les photos de la galerie
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ...
    └── quiz/               ← Photos optionnelles associées aux questions du quiz
        ├── souvenir-q2.jpg
        └── ...
```

---

## Comment personnaliser le site

**Toutes les modifications se font dans `js/config.js`.**
Ouvre ce fichier dans un éditeur de texte (Bloc-notes, TextEdit, VS Code...).
Chaque section est commentée et expliquée directement dans le fichier.

### Modifier les textes
Trouve la section correspondante dans `config.js` et change les valeurs entre guillemets.

```js
// Exemple — changer le sous-titre de l'accueil :
sousTitre: "Mon nouveau texte ici.",
```

### Ajouter / modifier les photos

1. Compresse tes photos à moins de 500 Ko (outil gratuit : [squoosh.app](https://squoosh.app))
2. Place les fichiers dans le bon dossier (`photos/galerie/` ou `photos/quiz/`)
3. Dans `config.js`, indique le nom exact du fichier :

```js
// Galerie — ajoute autant de lignes que tu veux :
photos: [
  { fichier: "vacances-2022.jpg", legende: "Été 2022" },
  { fichier: "noel-famille.jpg",  legende: "" },
],

// Quiz — photo optionnelle par question :
photo: "souvenir-anniversaire.jpg"  // ou null si pas de photo
```

### Modifier les questions du quiz

Dans `config.js`, chaque question ressemble à ça :

```js
{
  question: "Quelle est ma couleur préférée ?",
  reponses: ["Rouge", "Bleu", "Vert"],
  bonne: 2,        // ← 0 = première réponse, 1 = deuxième, 2 = troisième
  feedback: "Oui, le vert depuis toujours !",
  photo: null      // ou "nom-du-fichier.jpg"
},
```

Pour ajouter une question : copie-colle un bloc et modifie-le.
Pour en supprimer une : efface le bloc entier (y compris la virgule à la fin).

### Modifier les vidéos de la capsule

1. Upload ta vidéo sur YouTube en mode **Non répertorié**
2. Sur YouTube : clique sur ta vidéo > Partager > **Intégrer** > copie l'URL de la forme `https://www.youtube.com/embed/XXXXXXXX`
3. Colle cette URL dans `config.js` :

```js
videos: [
  { prenom: "Tom",   url: "https://www.youtube.com/embed/IDENTIFIANT" },
  { prenom: "Lucas", url: "https://www.youtube.com/embed/IDENTIFIANT" },
],
```

### Changer la date d'ouverture de la capsule

```js
dateOuverture: "2027-05-30",  // Format : AAAA-MM-JJ
```

### Changer les couleurs

```js
couleurs: {
  principale: "#3d7a35",   // couleur dominante (boutons, titres colorés)
  claire:     "#5ca653",   // variante claire
  fondClair:  "#f0f7ee",   // fond des blocs
  foncee:     "#254d20",   // texte sur fond vert
  bordure:    "#a8d49f",   // bordures et séparateurs
},
```

Tu peux utiliser n'importe quel code couleur CSS (ex: `"#ff6b6b"`, `"tomato"`, `"rgb(255,100,0)"`).
Pour trouver un code couleur : [coolors.co](https://coolors.co) ou [htmlcolorcodes.com](https://htmlcolorcodes.com).

---

## Déployer sur GitHub Pages

1. Crée un repo GitHub nommé `memories`
2. Upload tous les fichiers (maintenir la structure des dossiers)
3. Dans le repo : **Settings > Pages > Source : Deploy from branch > main > / (root)**
4. Ton site sera accessible à `https://cry-0ne.github.io/memories`

---

## Tester en local

Double-clique sur `index.html` pour l'ouvrir dans ton navigateur.
Les photos et vidéos YouTube ne s'afficheront que si tu es connecté à internet.

---

## Checklist avant de partager le lien

- [ ] Textes personnalisés dans `config.js`
- [ ] Photo d'accueil ajoutée dans `photos/`
- [ ] Photos de la galerie dans `photos/galerie/` (et config mis à jour)
- [ ] Questions du quiz complétées
- [ ] Prénoms de la capsule mis à jour
- [ ] URLs YouTube unlisted ajoutées
- [ ] Date d'ouverture de la capsule vérifiée
