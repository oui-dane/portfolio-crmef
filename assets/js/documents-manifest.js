const MODULE_DOCUMENTS = {
  planification: {
    htmlReports: [],
    pdfReports: [
      { title: "Rapport du cours", description: "Rapport de synthèse du module Planification.", path: "../assets/pdf/planification/Rapport du cours.odt" },
      { title: "Planification long et moyenne terme", description: "Document de planification pédagogique.", path: "../assets/pdf/planification/Planification long et moyenne terme.pdf" }
    ],
    presentations: [
      { title: "Les méthodes d'apprentissage", description: "Support de présentation sur les méthodes d'apprentissage.", path: "../assets/presentations/planification/Les methodes d'apprentissage.pdf" }
    ],
    resources: [
      { title: "Fiche pédagogique", description: "Ressource pédagogique du module.", path: "../assets/pdf/planification/Fiche pédagogique.odt" },
      { title: "Fiche pédagogique 2", description: "Deuxième fiche pédagogique.", path: "../assets/pdf/planification/Fiche pédagogique 2.odt" },
      { title: "Fiche pédagogique 3", description: "Troisième fiche pédagogique.", path: "../assets/pdf/planification/Fiche pédagogique 3.odt" }
    ],
    images: [
      { title: "Production Planification 1", path: "../assets/images/planification/ardouino.jpeg" },
      { title: "Production Planification 2", path: "../assets/images/planification/controle continue.jpeg" },
      { title: "Production Planification 3", path: "../assets/images/planification/WhatsApp Image 2026-06-08 at 23.43.39 (2).jpeg" },
      { title: "Production Planification 4", path: "../assets/images/planification/WhatsApp Image 2026-06-08 at 23.43.39.jpeg" },
      { title: "Production Planification 5", path: "../assets/images/planification/WhatsApp Image 2026-06-08 at 23.43.40.jpeg" },
      { title: "Production Planification 6", path: "../assets/images/planification/WhatsApp Image 2026-06-11 at 17.38.38.jpeg" },
      { title: "Production Planification 7", path: "../assets/images/planification/WhatsApp Image 2026-06-11 at 17.38.39.jpeg" }
    ]
  },

  gestion1: {
    htmlReports: [],
    pdfReports: [
      { title: "Cours Gestion 1", description: "Support de cours du module.", path: "../assets/pdf/gestion1/cour.odt" }
    ],
    presentations: [
      { title: "Axe1 + Axe2 = situation d'exploration", description: "Présentation sur les situations d'exploration et didactique.", path: "../assets/presentations/gestion1/Axe1 + Axe2 = situation d'exploration & didactique.pdf" },
      { title: "Communication et motivation", description: "Présentation sur la communication et la motivation.", path: "../assets/presentations/gestion1/Communicationmotivation  Presentation.pdf" }
    ],
    resources: [],
    images: []
  },

  didactique: {
    htmlReports: [
      { title: "Rapport de cours Didactique", description: "Rapport de cours du module Didactique de l'informatique.", path: "../assets/pdf/didactique/rapport_didactique_informatique.html" }
    ],
    pdfReports: [],
    presentations: [],
    resources: [],
    images: [
      { title: "Production Didactique 1", path: "../assets/images/didactique/WhatsApp Image 2026-06-08 at 23.43.42 (5).jpeg" },
      { title: "Production Didactique 2", path: "../assets/images/didactique/WhatsApp Image 2026-06-08 at 23.43.43 (1).jpeg" },
      { title: "Production Didactique 3", path: "../assets/images/didactique/WhatsApp Image 2026-06-08 at 23.43.43 (3).jpeg" },
      { title: "Production Didactique 4", path: "../assets/images/didactique/WhatsApp Image 2026-06-08 at 23.43.43.jpeg" },
      { title: "Production Didactique 5", path: "../assets/images/didactique/WhatsApp Image 2026-06-08 at 23.43.44 (1).jpeg" },
      { title: "Production Didactique 6", path: "../assets/images/didactique/WhatsApp Image 2026-06-11 at 17.38.36.jpeg" },
      { title: "Production Didactique 7", path: "../assets/images/didactique/WhatsApp Image 2026-06-11 at 17.38.37.jpeg" }
    ]
  },

  tice: {
    htmlReports: [
      { title: "Carte mentale réseau informatique", description: "Carte mentale interactive sur les réseaux.", path: "../assets/pdf/tice/carte_mentale_reseau_informatique.html" },
      { title: "Livre numérique réseau 2AC", description: "Livre numérique interactif sur les réseaux.", path: "../assets/pdf/tice/livre_numerique_reseau_2ac.html" },
      { title: "Quiz réseau collège interactif", description: "Quiz interactif sur les réseaux.", path: "../assets/pdf/tice/quiz_reseau_college_interactif.html" }
    ],
    pdfReports: [],
    presentations: [
      { title: "AI Agent Anatomy", description: "Présentation sur les agents IA.", path: "../assets/presentations/tice/AI_Agent_Anatomy (2).pptx" },
      { title: "ChatGPT et ses capacités créatives", description: "Présentation sur les capacités de ChatGPT.", path: "../assets/presentations/tice/ChatGPT-et-ses-capacites-creatives.pptx.pdf" },
      { title: "Comment ChatGPT génère des vidéos", description: "Présentation sur la génération vidéo par ChatGPT.", path: "../assets/presentations/tice/Comment-ChatGPT-genere-des-videos-professionnelles.pptx.pdf" }
    ],
    resources: [],
    images: [
      { title: "Production TICE 1", path: "../assets/images/tice/WhatsApp Image 2026-06-09 at 15.14.58.jpeg" },
      { title: "Production TICE 2", path: "../assets/images/tice/WhatsApp Image 2026-06-09 at 15.14.59.jpeg" },
      { title: "Production TICE 3", path: "../assets/images/tice/WhatsApp Image 2026-06-11 at 17.38.35.jpeg" }
    ]
  },

  "sciences-education": {
    htmlReports: [],
    pdfReports: [
      { title: "Cours Sciences de l'Éducation", description: "Support de cours du module.", path: "../assets/pdf/sciences-education/cour.pdf" }
    ],
    presentations: [
      { title: "Cours Sciences de l'Éducation", description: "Présentation du module.", path: "../assets/presentations/sciences-education/Science d'education.pdf" }
    ],
    resources: [],
    images: []
  },

  renforcement1: {
    htmlReports: [],
    pdfReports: [
      { title: "Cours Renforcement 1", description: "Support de cours du module Fondements de l'informatique.", path: "../assets/pdf/renforcement1/cour 1.pdf" }
    ],
    presentations: [
      { title: "Présentation Renforcement 1", description: "Présentation du module Fondements de l'informatique.", path: "../assets/presentations/renforcement1/presentation.pdf" }
    ],
    resources: [],
    images: [
      { title: "Production Renforcement 1", path: "../assets/images/renforcement1/WhatsApp Image 2026-06-08 at 23.43.41 (4).jpeg" },
      { title: "Production Renforcement 2", path: "../assets/images/renforcement1/WhatsApp Image 2026-06-08 at 23.43.42 (3).jpeg" },
      { title: "Production Renforcement 3", path: "../assets/images/renforcement1/WhatsApp Image 2026-06-08 at 23.43.42 (4).jpeg" },
      { title: "Production Renforcement 4", path: "../assets/images/renforcement1/WhatsApp Image 2026-06-08 at 23.43.43 (4).jpeg" }
    ]
  },

  renforcement2: {
    htmlReports: [],
    pdfReports: [],
    presentations: [
      { title: "Présentation Renforcement 2", description: "Présentation du module Outils numériques et programmation.", path: "../assets/presentations/renforcement2/Microsoft Word.pdf" }
    ],
    resources: [],
    images: []
  },

  "recherche-action": {
    htmlReports: [],
    pdfReports: [
      { title: "Cours Recherche-action", description: "Support de cours du module.", path: "../assets/pdf/recherche-action/cours.pdf" }
    ],
    presentations: [
      { title: "Rapport Recherche-action", description: "Présentation du rapport de recherche.", path: "../assets/presentations/recherche-action/rapport_recherche_action.pdf" }
    ],
    resources: [],
    images: []
  },

  evaluation: {
    htmlReports: [
      { title: "Rapport d'évaluation", description: "Rapport d'évaluation du module.", path: "../assets/pdf/evaluation/Rapport d'evaluation.html" }
    ],
    pdfReports: [
      { title: "Contrôle Scratch", description: "Évaluation sur Scratch.", path: "../assets/pdf/evaluation/Controle_Scratch.pdf" },
      { title: "Évaluation sommative", description: "Évaluation sommative du module.", path: "../assets/pdf/evaluation/evaluation_sommative.odt" },
      { title: "Évaluation système d'exploitation", description: "Évaluation sur les systèmes d'exploitation.", path: "../assets/pdf/evaluation/evaluation_systeme_exploitation.odt" },
      { title: "Fiche évaluation pratique/théorique", description: "Fiche d'évaluation pratique et théorique.", path: "../assets/pdf/evaluation/Fiche d'eval pratique theorique.docx" },
      { title: "Organisation évaluation pratique", description: "Document d'organisation de l'évaluation pratique.", path: "../assets/pdf/evaluation/organisation eval pratique.pdf" }
    ],
    presentations: [
      { title: "Stratégies de soutien et remédiation", description: "Présentation sur les stratégies de soutien.", path: "../assets/presentations/evaluation/stratégies_soutien_remédiation [Réparé].pptx" }
    ],
    resources: [],
    images: []
  },

  gestion2: {
    htmlReports: [
      { title: "Rapport de cours Gestion 2", description: "Rapport de cours du module Gestion de classe 2.", path: "../assets/pdf/gestion2/rapport_gestion2.html" }
    ],
    pdfReports: [],
    presentations: [
      { title: "Gestion de classe 2", description: "Présentation du module Gestion de classe 2.", path: "../assets/presentations/gestion2/Gestion_G2.pptx" }
    ],
    resources: [],
    images: []
  },

  "vie-scolaire": {
    htmlReports: [
      { title: "L'internet safe", description: "Document interactif sur l'internet sécurisé.", path: "../assets/presentations/vie-scolaire/l'internet safe.html" }
    ],
    pdfReports: [
      { title: "La vie scolaire", description: "Document sur la vie scolaire.", path: "../assets/pdf/vie-scolaire/la vie scolaire.pdf" },
      { title: "Le projet d'établissement", description: "Document sur le projet d'établissement.", path: "../assets/pdf/vie-scolaire/Le projet d'etablicement.pdf" },
      { title: "Les clubs scolaires", description: "Document sur les clubs scolaires.", path: "../assets/pdf/vie-scolaire/Les clubes scolaire.pdf" }
    ],
    presentations: [],
    resources: [],
    images: []
  },

  "legislation-scolaire": {
    htmlReports: [],
    pdfReports: [],
    presentations: [
      { title: "Législation scolaire", description: "Présentation sur la législation scolaire.", path: "../assets/presentations/legislation-scolaire/almsuwlyat-walaqwbat-altadybyh-llastath-fy-altshrya-almghrby.pdf" }
    ],
    resources: [],
    images: []
  },

  "analyse-pratiques": {
    htmlReports: [],
    pdfReports: [],
    presentations: [
      { title: "Algorithmique La boucle", description: "Présentation sur l'algorithmique.", path: "../assets/presentations/analyse-pratiques/Algorithmique La boucle \"Répéter jusqu'à\".pdf" }
    ],
    resources: [],
    images: []
  },

  "production-didactique": {
    htmlReports: [],
    pdfReports: [
      { title: "Fiche de branche", description: "Fiche de branche pédagogique.", path: "../assets/pdf/production-didactique/fiche debranché (1).odt" }
    ],
    presentations: [
      { title: "Algorithmique la boucle tant que", description: "Présentation sur l'algorithmique.", path: "../assets/presentations/production-didactique/Algorithmique  la boucle tant que .pdf" }
    ],
    resources: [],
    images: []
  },

  reseaux: {
    htmlReports: [],
    pdfReports: [],
    presentations: [],
    resources: [],
    images: []
  },

  "developpement-web": {
    htmlReports: [],
    pdfReports: [],
    presentations: [
      { title: "Structure de base HTML", description: "Présentation sur la structure HTML.", path: "../assets/presentations/developpement-web/Structure de base HTML.pptx.pdf" }
    ],
    resources: [],
    images: []
  }
};
