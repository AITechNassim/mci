// src/App.js
import React, { useState } from 'react';
import { Download, Search, Mail, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFullBio, setShowFullBio] = useState(false);

  // Your author information
  const authorInfo = {
    name: "Mohamed Chérif Ilmane",
    title: "Professeur en économie",
    shortBio: "Mohamed Chérif Ilmane est un professeur d'économie à l'Ecole Supérieure de Commerce d'Alger, titulaire d'un doctorat en sciences économiques appliquées de l'Université Catholique de Louvain, reconnu pour ses contributions académiques et son expertise en politique monétaire.",
    fullBio: "Mohamed Chérif Ilmane est un éminent professeur en économie à l'Ecole Supérieure de Commerce d'Alger. Titulaire d'un doctorat en sciences économiques appliquées de l'Université Catholique de Louvain, il a une carrière académique riche et a également occupé des postes de consultant à l'Institut Algérien des Hautes Etudes Financières. Son expertise s'étend à la politique monétaire, ayant été vice-gouverneur de la Banque d'Algérie. Il est impliqué dans diverses recherches et conférences sur les enjeux économiques contemporains en Algérie, contribuant activement au développement des connaissances dans son domaine. En plus de ses activités académiques, il est également engagé dans le conseil économique auprès des institutions algériennes.",
    socialLinks: {
      email: "ilmane.mc@gmail.com",
      linkedin: "https://www.linkedin.com/in/mohamed-ch%C3%A9rif-ilmane-50b24065/"
    },
}

  // Your articles data
  const articles = [
  {
    "title": "Cadre Institutionnel et Légal du Contrôle et de la Supervision de l'Activité Bancaire",
    "description": "Présentation des structures réglementaires encadrant le secteur bancaire en Algérie.",
    "category": "Banque & Réglementation",
    "publishDate": "2018-01-01",
    "pdfUrl": "https://drive.google.com/file/d/12vNH_VtvwoiK2jb1gGdUjzLGtXQGchLP/view?usp=drive_link"
  },
  {
    "title": "Mise en Place du Comité d'Audit Selon le Règlement 11-08",
    "description": "Analyse des dispositions réglementaires concernant la création du Comité d'Audit dans les banques.",
    "category": "Audit & Contrôle",
    "publishDate": "2014-04-03",
    "pdfUrl": "https://drive.google.com/file/d/1QnK1vIbaYRi3EVfbnT-b9JQCIiqVWGk4/view?usp=sharing"
  },
  {
    "title": "Évolution de l'Économie Algérienne (1985-2014)",
    "description": "Analyse macroéconomique des périodes de crise, de stabilisation et de relance en Algérie.",
    "category": "Économie",
    "publishDate": "2016-12-01",
    "pdfUrl": "https://drive.google.com/file/d/1545PFaOPDmTQBnkT94SaybHvUzMVitBI/view?usp=sharing"
  },
  {
    "title": "Réglementation Prudentielle 2016-2017",
    "description": "Présentation du cadre réglementaire prudentiel bancaire en Algérie et des normes internationales.",
    "category": "Banque & Réglementation",
    "publishDate": "2018-01-01",
    "pdfUrl": "https://drive.google.com/file/d/1pwN3X_WJ5iNOGxC5QkMaithAXaSo3HtV/view?usp=sharing"
  },
  {
    "title": "Cours de Macroéconomie - Partie 2",
    "description": "Présentation des bases de la macroéconomie et des analyses économiques.",
    "category": "Économie",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/1pwN3X_WJ5iNOGxC5QkMaithAXaSo3HtV/view?usp=sharing"
  },
  {
    "title": "Contrôle Interne Bancaire",
    "description": "Explication du cadre légal et des bonnes pratiques en matière de contrôle interne bancaire.",
    "category": "Audit & Contrôle",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/1pwN3X_WJ5iNOGxC5QkMaithAXaSo3HtV/view?usp=sharing"
  },
  {
    "title": "Modèle AS-AD et Courbe de Phillips",
    "description": "Analyse approfondie du modèle macroéconomique AS-AD et de la courbe de Phillips.",
    "category": "Économie",
    "publishDate": "2018-01-01",
    "pdfUrl": "https://drive.google.com/file/d/1KgnuBXG6HE2KYX9nehLgEoC09Fx2O137/view?usp=sharing"
  },
  {
    "title": "Économie Ouverte - Macro II",
    "description": "Étude des équilibres macroéconomiques en économie ouverte.",
    "category": "Économie",
    "publishDate": "2018-01-01",
    "pdfUrl": "https://drive.google.com/file/d/1CN7mJPaiFo1a2f6Agla25THfM93FU_S5/view?usp=sharing"
  },
  {
    "title": "Économie Algérienne - Macro II",
    "description": "Analyse approfondie de l'économie algérienne et des différentes phases de son évolution.",
    "category": "Économie",
    "publishDate": "2018-01-01",
    "pdfUrl": "https://drive.google.com/file/d/1ZAGlY0Mqc5rWIooSxMtADMKZxaTpgmOV/view?usp=sharing"
  },
  {
    "title": "Politique Macroprudentielle",
    "description": "Présentation des concepts de stabilité financière et des réglementations macroprudentielles.",
    "category": "Banque & Réglementation",
    "publishDate": "2022-11-01",
    "pdfUrl": "https://drive.google.com/file/d/1lEev8RNzOO_kjo9A8BdOC9lfpjmHd4CV/view?usp=sharing"
  },
  {
    "title": "Les Trois Phases de Développement du Système Bancaire et Monétaire Algérien",
    "description": "Analyse historique du système bancaire et monétaire algérien entre 1962 et 2012.",
    "category": "Banque & Économie",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/1FNcDgdZ-ec3eqRDKqV8RbncLLglzdVR8/view?usp=sharing"
  },
  {
    "title": "Modèle Macroéconomique DSGE pour l'Algérie",
    "description": "Présentation d'un modèle macroéconomique DSGE appliqué à l'économie algérienne.",
    "category": "Macroéconomie",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/19Bi7itv4G-AX3P09dfUHVxnlP8R4_-e4/view?usp=sharing"
  },
  {
    "title": "Taux de Change Réel du Dinar Algérien",
    "description": "Analyse du taux de change réel d'équilibre et des phénomènes économiques associés en Algérie.",
    "category": "Économie Monétaire",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/1zPdqcahSnl4P6WDCgGv72VxkigLNsGLD/view?usp=sharing"
  },
  {
    "title": "Taux de Change du Dinar Algérien : Politique et Gestion",
    "description": "Étude des politiques et de la gestion du taux de change du dinar algérien.",
    "category": "Économie Monétaire",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/18UHQgmEKraNXntsHtkzohE8B3UQXkHFI/view?usp=sharing"
  },
  {
    "title": "Incohérences de la Réglementation Prudentielle Algérienne",
    "description": "Analyse critique des incohérences dans la nouvelle réglementation prudentielle des banques en Algérie.",
    "category": "Banque et Finance",
    "publishDate": "2024-02-19",
    "pdfUrl": "https://drive.google.com/file/d/1viepBYiELC7NV5G0LkhZMFc9YiprSo65/view?usp=sharing"
  },
  {
    "title": "Économie Algérienne (1985-2014)",
    "description": "Étude macroéconomique de l'évolution de l'économie algérienne, entre crise, stabilisation et relance.",
    "category": "Économie",
    "publishDate": "2018-01-01",
    "pdfUrl": "https://drive.google.com/file/d/1ZAGlY0Mqc5rWIooSxMtADMKZxaTpgmOV/view?usp=sharing"
  },
  {
    "title": "Nécessité et Possibilité de Mise en Place du Mécanisme de Change à Terme",
    "description": "Discussion sur la nécessité de la couverture du risque de change et la faisabilité de sa mise en place en Algérie.",
    "category": "Finance Internationale",
    "publishDate": "2012-10-15",
    "pdfUrl": "https://drive.google.com/file/d/1EjwstzJxHR5v9tXCHYymfymRfwozXeTQ/view?usp=sharing"
  },
  {
    "title": "Mise en Place du Comité d'Audit dans les Banques",
    "description": "Analyse des dispositions réglementaires sur la mise en place des comités d'audit dans les banques algériennes.",
    "category": "Audit et Gouvernance",
    "publishDate": "2014-04-03",
    "pdfUrl": "https://drive.google.com/file/d/1QnK1vIbaYRi3EVfbnT-b9JQCIiqVWGk4/view?usp=sharing"
  },
  {
    "title": "Les Trois Phases du Développement du Système Bancaire et Monétaire Algérien",
    "description": "Une étude historique des évolutions du système bancaire algérien de 1962 à 2012.",
    "category": "Histoire Économique",
    "publishDate": "2012-12-08",
    "pdfUrl": "https://drive.google.com/file/d/1mqX58Spn6J8EYuUPl-dvoTYrldDjoId_/view?usp=sharing"
  },
  {
    "title": "Le Mécanisme d'Offre de Monnaie en Situation d'Excès Structurel de Liquidités",
    "description": "Une analyse de l'offre de monnaie en Algérie et des mécanismes économiques sous-jacents.",
    "category": "Économie Monétaire",
    "publishDate": "2014-01-15",
    "pdfUrl": "https://drive.google.com/file/d/1_9CtZVRS7L13gT1QnTYe4tD68JTE4mBt/view?usp=sharing"
  },
  {
    "title": "Le Contrôle Interne - Application au Cas Algérien",
    "description": "Une étude du contrôle interne dans le secteur bancaire algérien, son cadre légal et ses implications.",
    "category": "Banque et Finance",
    "publishDate": "2024-01-15",
    "pdfUrl": "https://drive.google.com/file/d/1y5N9yBJ3HZ76qXmNXvdhOQnJQ44ntf6u/view?usp=sharing"
  },
  {
    "title": "Couverture du Risque de Change",
    "description": "Discussion sur la nécessité, les opportunités et la faisabilité d'un mécanisme de couverture du risque de change pour les entreprises et banques algériennes.",
    "category": "Finance internationale",
    "publishDate": "2016-03-31",
    "pdfUrl": "https://drive.google.com/file/d/1AJrDwxRps8yvAaNsI02HqWZrrl57B7rm/view?usp=sharing"
  },
  {
    "title": "L'équilibre du Marché de la Monnaie",
    "description": "Présentation des théories de l'offre et de la demande de monnaie ainsi que les mécanismes d'équilibre du marché monétaire.",
    "category": "Macroéconomie",
    "publishDate": "2012-03-01",
    "pdfUrl": "https://drive.google.com/file/d/1FmoLOuCoWAQiIdEqXiTRBi6qeCFH-BIU/view?usp=sharing"
  },
  {
    "title": "Le Comportement de Consommation",
    "description": "Étude macroéconomique sur la fonction de consommation et ses déterminants en Algérie.",
    "category": "Macroéconomie",
    "publishDate": "2012-02-01",
    "pdfUrl": "https://drive.google.com/file/d/1udcK3RCxkOeaIbRkyCI0XVozEoTp2-4b/view?usp=sharing"
  },
  {
    "title": "Indépendance de la Banque d'Algérie",
    "description": "Analyse des enjeux institutionnels et économiques liés à l'indépendance de la Banque d'Algérie.",
    "category": "Banque et finance",
    "publishDate": "2011-01-01",
    "pdfUrl": "https://drive.google.com/file/d/188He9QWJARkGjrHusHttPnOrsi3aD0Ff/view?usp=sharing"
  },
  {
    "title": "De la Politique de Change en Algérie",
    "description": "Synthèse de l'évolution de la politique des changes en Algérie entre 1962 et 2009, mettant en évidence les grandes ruptures et ajustements.",
    "category": "Économie monétaire",
    "publishDate": "2009-12-01",
    "pdfUrl": "https://drive.google.com/file/d/1GKYfLhjUgDowCmv2RKzCeiFHehmsNn7l/view?usp=sharing"
  },
  {
    "title": "Canaux de Transmission de la Politique Monétaire en Algérie",
    "description": "Analyse des mécanismes de transmission de la politique monétaire en Algérie entre 1990 et 2008, avec une emphase sur le canal du crédit bancaire.",
    "category": "Économie monétaire",
    "publishDate": "2009-12-01",
    "pdfUrl": "https://drive.google.com/file/d/133YNvNChosLbtWFDK3atrNyFhES2DlOx/view?usp=sharing"
  },
  {
    "title": "L'incidence de la Crise Financière sur l'Algérie",
    "description": "Analyse des effets de la crise financière internationale de 2007-2008 sur l'économie algérienne.",
    "category": "Économie internationale",
    "publishDate": "2009-01-01",
    "pdfUrl": "https://drive.google.com/file/d/1PH5oxfy02hKFpSivq2pMYd3qYWgQC1KO/view?usp=sharing"
  },
  {
    "title": "Indépendance de la Banque Centrale d'une Économie en Transition",
    "description": "Étude sur l'indépendance de la Banque Centrale d'Algérie dans le contexte de la transition économique du pays.",
    "category": "Banque et finance",
    "publishDate": "2007-11-01",
    "pdfUrl": "https://drive.google.com/file/d/1Jvd50QUUxPlddnogDgFnmboq8VAEKeeJ/view?usp=sharing"
  },
  {
    "title": "Efficacité de la Politique Monétaire en Algérie (1990-2006)",
    "description": "Analyse critique de l'efficacité de la politique monétaire algérienne durant la transition vers l'économie de marché.",
    "category": "Économie monétaire",
    "publishDate": "2007-11-01",
    "pdfUrl": "https://drive.google.com/file/d/1Lksj5XiQgG2nhcE--MQ9OVzwrneYHYD1/view?usp=sharing"
  }
];

  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
    <div className="min-h-screen bg-gray-50">
      {/* Author Introduction Section */}
      <section className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{authorInfo.name}</h1>
              <h2 className="text-xl text-gray-600 mb-4">{authorInfo.title}</h2>
              <p className="text-lg text-gray-600  leading-relaxed">
                {showFullBio ? authorInfo.fullBio : authorInfo.shortBio}
              </p>
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-gray-600 hover:text-gray-900 underline transition-colors"
              >
                {showFullBio ? 'Show less' : 'Read more'}
              </button>

              <div className="flex gap-4 mt-4">
                <a href={`mailto:${authorInfo.socialLinks.email}`}
                   className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail size={24} />
                </a>
                <a href={authorInfo.socialLinks.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-4 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Articles publiés</h2>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher des articles par titre, description ou catégorie..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6">
            {filteredArticles.map(article => (
              <Card className="bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-all py-4 px-4">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {article.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        Publication: {new Date(article.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">
                    {article.description}
                  </CardDescription>
                  <div className="flex justify-end">
                    <button
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-300"
                      onClick={() => window.open(article.pdfUrl, '_blank')}
                    >
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;