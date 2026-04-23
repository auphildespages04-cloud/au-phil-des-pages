"use client";
// update
import { useMemo, useState } from "react";

export default function AuPhilDesPagesSite() {
  const whatsappLink =
    "https://wa.me/33766179444?text=Bonjour%20Au%20Phil%20des%20Pages%2C%20je%20souhaite%20vous%20envoyer%20un%20document.";
  const paypalLink = "https://paypal.me/REPLACE_WITH_YOUR_LINK";

  const prestations = [
    {
      emoji: "🧩",
      color: "from-pink-400 to-red-400",
      title: "Décryptage express",
      desc: "Un document vous donne envie de lever les yeux au ciel ? Je le traduis en langage clair, simple et humain.",
    },
    {
      emoji: "✍️",
      color: "from-yellow-400 to-orange-400",
      title: "Réponse bien ficelée",
      desc: "Mail, courrier, réponse administrative : on range les idées, on pose les bons mots et on respire.",
    },
    {
      emoji: "📚",
      color: "from-purple-400 to-indigo-400",
      title: "Synthèse anti-galère",
      desc: "Contrat d’assurance, devis, document immobilier ou courrier complexe : l’essentiel, sans noyade en eau bureaucratique.",
    },
  ];

  const tarifs = [
    {
      title: "Décryptage express",
      price: "Dès 20 €",
      desc: "Pour comprendre un document, débloquer une situation ou savoir quoi faire ensuite.",
      fun: "⏱️ Rapide, clair, efficace",
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Réponse bien ficelée",
      price: "Dès 40 €",
      desc: "Pour repartir avec un mail, un courrier ou une réponse nette, propre et prête à l’emploi.",
      fun: "✨ Le plus demandé",
      color: "from-orange-400 to-yellow-400",
    },
    {
      title: "Mission anti-pagaille",
      price: "Sur devis",
      desc: "Quand il y a plusieurs documents, plusieurs questions ou un joli chaos à remettre dans l’ordre.",
      fun: "📎 Pour les cas plus costauds",
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const documents = [
    "Courriers administratifs",
    "Contrats d’assurance",
    "Devis travaux",
    "Documents immobiliers",
    "Réponses à rédiger",
    "Synthèses claires",
    "Mise en forme professionnelle",
    "Explications simples et utiles",
    "Conditions générales",
    "Documents de copropriété",
    "Courriers de relance",
    "Dossiers à trier",
  ];

  const faq = [
    {
      q: "Est-ce que vous faites les démarches à ma place ?",
      a: "Non. Je vous accompagne, je vous explique et je vous aide à rédiger, mais vous gardez toujours la main sur vos démarches.",
    },
    {
      q: "Puis-je vous envoyer une photo ou un PDF sur WhatsApp ?",
      a: "Oui, c’est même la solution la plus simple pour un premier contact. Vous m’envoyez le document, je vous dis rapidement ce que je peux faire.",
    },
    {
      q: "Est-ce que vous donnez un conseil juridique ?",
      a: "Non. Mon rôle est de simplifier, résumer, expliquer et rédiger clairement, pas de remplacer un avocat, un notaire ou un conseiller juridique.",
    },
    {
      q: "À qui s’adresse ce service ?",
      a: "Aux particuliers comme aux professionnels qui veulent comprendre un document, clarifier une situation ou rédiger proprement sans y passer des heures.",
    },
  ];

  const avisReels = [
    {
      nom: "Avis client réel à ajouter",
      note: 5,
      texte: "Ajoutez ici un vrai retour client Google ou Facebook, mot pour mot ou légèrement raccourci.",
      source: "Source à préciser",
    },
    {
      nom: "Avis client réel à ajouter",
      note: 5,
      texte: "Ajoutez ici un deuxième vrai avis. Exemple idéal : un client qui a mieux compris un contrat, un courrier ou un devis.",
      source: "Source à préciser",
    },
    {
      nom: "Avis client réel à ajouter",
      note: 5,
      texte: "Ajoutez ici un troisième vrai avis. Je n’ai volontairement pas inventé de faux témoignages.",
      source: "Source à préciser",
    },
  ];

  const [form, setForm] = useState({
    nom: "",
    email: "",
    type: "Courrier / document administratif",
    message: "",
  });

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`Demande - ${form.type}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nNom : ${form.nom || ""}\nEmail : ${form.email || ""}\nType de document : ${form.type}\n\nMessage :\n${form.message || ""}\n\nJe souhaite être recontacté.`
    );
    return `mailto:auphildespages@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="min-h-screen text-slate-900 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100/60 via-yellow-100/60 to-purple-100/60" />

      <a
        href={whatsappLink}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
      >
        💬 WhatsApp
      </a>

      <a
        href={paypalLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-5 z-50 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
      >
        💳 Payer par PayPal
      </a>

      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-tight text-purple-700">Au Phil des Pages</div>
            <div className="text-sm text-slate-600">Clarté • Simplicité • Sérénité… avec du fun 🎉</div>
          </div>
          <div className="hidden md:flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
            <a href="#prestations" className="hover:text-purple-700 transition">Prestations</a>
            <a href="#formulaire" className="hover:text-purple-700 transition">Envoyer mon document</a>
            <a href="#avis" className="hover:text-purple-700 transition">Avis</a>
            <a href="#tarifs" className="hover:text-purple-700 transition">Tarifs</a>
            <a href="#faq" className="hover:text-purple-700 transition">FAQ</a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              WhatsApp direct
            </a>
            <a
              href="#formulaire"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Envoyer mon document
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow">
              🤹 On simplifie la vie
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight">
              Marre des papiers ? 😵
              <br />
              On va les dompter ensemble 🐉
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              Ici, les documents compliqués deviennent compréhensibles.
              Moins de stress, plus de clarté… et un peu de bonne humeur en bonus 😄
            </p>
            <div className="mt-6 rounded-2xl bg-yellow-100 p-5 text-sm shadow leading-7">
              ⚠️ <span className="font-bold">Important :</span> je ne fais pas les démarches à votre place.
              <br />
              ✔️ Je vous explique, je vous guide et je vous aide à rédiger.
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#prestations"
                className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow hover:scale-105 transition"
              >
                Voir les prestations
              </a>
              <a
                href="#formulaire"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-3 text-sm font-bold text-white shadow hover:scale-105 transition animate-pulse"
              >
                Envoyer mon document
              </a>
              <a
                href={paypalLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold shadow hover:scale-105 transition"
              >
                Payer en ligne
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/90 p-4 shadow text-sm font-semibold">⚡ Réponse rapide</div>
              <div className="rounded-2xl bg-white/90 p-4 shadow text-sm font-semibold">🔒 Confidentialité</div>
              <div className="rounded-2xl bg-white/90 p-4 shadow text-sm font-semibold">💳 Paiement PayPal</div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/70 p-3 shadow-2xl backdrop-blur ring-4 ring-white/60 hover:scale-[1.01] transition">
            <img
              src="https://i.postimg.cc/52Knvcwy/Chat-GPT-Image-22-avr-2026-18-50-53.png"
              alt="Illustration humoristique inspirée de la galère administrative"
              className="w-full rounded-[1.5rem] object-cover shadow-lg"
            />
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="bg-red-200 p-4 rounded-2xl shadow hover:-rotate-1 hover:scale-105 transition text-sm font-bold text-slate-800">
                😵 Avant : “Je comprends rien...”
              </div>
              <div className="bg-green-200 p-4 rounded-2xl shadow hover:rotate-1 hover:scale-105 transition text-sm font-bold text-slate-800">
                😌 Après : “Ah ok… c’est clair maintenant !”
              </div>
              <div className="bg-blue-200 p-4 rounded-2xl shadow hover:-rotate-1 hover:scale-105 transition text-sm font-bold text-slate-800">
                🚀 Mission : simplifier ta vie
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-lg">
              <div className="text-sm font-bold uppercase tracking-wide text-pink-600">Pour qui ?</div>
              <h2 className="mt-3 text-3xl font-black">Particuliers & professionnels</h2>
              <p className="mt-4 text-slate-700 leading-7">
                Si vous êtes bloqué devant un document, si vous ne savez pas comment répondre, ou si vous avez simplement besoin d’y voir plus clair, vous êtes au bon endroit.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>✔️ Particuliers face à des courriers ou contrats compliqués</li>
                <li>✔️ Professionnels qui veulent une rédaction claire et propre</li>
                <li>✔️ Personnes qui veulent gagner du temps et éviter les erreurs</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-lg">
              <div className="text-sm font-bold uppercase tracking-wide text-purple-600">Ce que vous recevez</div>
              <h2 className="mt-3 text-3xl font-black">Du concret, pas du blabla</h2>
              <p className="mt-4 text-slate-700 leading-7">
                Mon objectif est simple : vous faire repartir avec quelque chose d’utile, clair et exploitable tout de suite.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>✔️ Une explication simple du document</li>
                <li>✔️ Les points clés à retenir</li>
                <li>✔️ Une réponse rédigée si nécessaire</li>
                <li>✔️ Une vision claire de la suite à donner</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="prestations" className="mx-auto max-w-6xl px-6 py-8">
          <h2 className="text-3xl font-black mb-2">Les prestations 🎯</h2>
          <p className="mb-8 max-w-3xl text-slate-700 leading-7">
            J’interviens quand un document devient flou, quand un courrier tarde à être rédigé, ou quand une situation mérite d’être remise dans l’ordre calmement et clairement.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {prestations.map((item) => (
              <div key={item.title} className={`rounded-2xl bg-gradient-to-r ${item.color} p-6 text-white shadow-lg hover:scale-105 transition`}>
                <div className="text-3xl">{item.emoji}</div>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-white/90 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="formulaire" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <div className="text-sm font-bold uppercase tracking-wide text-fuchsia-600">Envoyer mon document</div>
              <h2 className="mt-3 text-3xl font-black">Expliquez-moi votre besoin</h2>
              <p className="mt-4 text-slate-700 leading-7">
                Remplissez ce formulaire pour un premier contact. Pour l’envoi des fichiers, WhatsApp reste la solution la plus simple tant qu’aucun espace sécurisé de dépôt n’est connecté.
              </p>
              <div className="mt-4 rounded-2xl bg-yellow-50 p-4 text-sm leading-7 text-slate-700">
                📎 Pour l’instant, ce formulaire prépare votre demande. Les pièces jointes sont à envoyer ensuite par WhatsApp ou par email.
              </div>
            </div>
            <form className="rounded-[2rem] bg-white p-8 shadow-xl space-y-4" action={mailtoLink} method="get">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Nom</label>
                <input
                  type="text"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Type de document</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0"
                >
                  <option>Courrier / document administratif</option>
                  <option>Contrat d’assurance</option>
                  <option>Devis travaux</option>
                  <option>Document immobilier</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Votre message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0"
                  placeholder="Expliquez brièvement votre besoin"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition"
                >
                  Envoyer ma demande
                </button>
                <a
                  href={whatsappLink}
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition"
                >
                  Envoyer les fichiers sur WhatsApp
                </a>
              </div>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-black mb-2">Quels documents puis-je regarder ? 📄</h2>
          <p className="mb-8 max-w-3xl text-slate-700 leading-7">
            Dès qu’un papier vous semble mal expliqué, trop dense, trop administratif ou trop flou, il y a de bonnes chances que je puisse vous aider à le rendre plus lisible.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((item) => (
              <div key={item} className="rounded-2xl bg-white px-4 py-4 shadow font-medium text-slate-700 hover:scale-105 transition">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-black mb-8">Exemples concrets 🎯</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <div className="text-xl mb-2">📄</div>
              <h3 className="font-black mb-2">Courrier incompréhensible</h3>
              <p className="text-sm text-slate-700">👉 Avant : “Je comprends rien” 😵</p>
              <p className="text-sm text-slate-700 mt-2">👉 Après : résumé clair + explication + quoi faire ✔️</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <div className="text-xl mb-2">🛡️</div>
              <h3 className="font-black mb-2">Contrat d’assurance</h3>
              <p className="text-sm text-slate-700">👉 Avant : jargon incompréhensible 🤯</p>
              <p className="text-sm text-slate-700 mt-2">👉 Après : points clés + pièges + résumé simple ✔️</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <div className="text-xl mb-2">🏗️</div>
              <h3 className="font-black mb-2">Devis travaux</h3>
              <p className="text-sm text-slate-700">👉 Avant : trop d’infos, trop flou 😵</p>
              <p className="text-sm text-slate-700 mt-2">👉 Après : explication + lecture claire + compréhension ✔️</p>
            </div>
          </div>
        </section>

        <section id="comment" className="mx-auto max-w-6xl px-6 py-6">
          <div className="rounded-[2rem] bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 p-8 text-white shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-black">📲 Un document qui te fatigue ?</div>
              <p className="mt-3 text-white/90 text-lg">Envoie-le directement sur WhatsApp et on regarde ça ensemble.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/20 p-5 text-center">
                <div className="text-3xl">1️⃣</div>
                <div className="mt-2 font-black">Vous envoyez</div>
                <p className="mt-2 text-sm text-white/90">Votre document, votre question ou votre besoin.</p>
              </div>
              <div className="rounded-2xl bg-white/20 p-5 text-center">
                <div className="text-3xl">2️⃣</div>
                <div className="mt-2 font-black">Je vous réponds</div>
                <p className="mt-2 text-sm text-white/90">Je vous dis ce que je peux faire et à quel tarif.</p>
              </div>
              <div className="rounded-2xl bg-white/20 p-5 text-center">
                <div className="text-3xl">3️⃣</div>
                <div className="mt-2 font-black">Vous avancez</div>
                <p className="mt-2 text-sm text-white/90">Avec une explication claire, une synthèse ou un texte rédigé.</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href={whatsappLink}
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-black text-fuchsia-600 shadow-lg hover:scale-105 transition"
              >
                Envoyer mon document maintenant
              </a>
            </div>
          </div>
        </section>

        <section id="avis" className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-black mb-2">Avis clients ⭐</h2>
              <p className="max-w-2xl text-slate-700 leading-7">
                J’ai préparé la section pour de vrais avis clients. Je n’ai volontairement pas inventé de faux témoignages : remplacez ces contenus par vos vrais avis Google ou Facebook.
              </p>
            </div>
            <a
              href="https://www.google.com/business/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow hover:scale-105 transition"
            >
              Ajouter mes vrais avis Google
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {avisReels.map((item, index) => (
              <div key={`${item.nom}-${index}`} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
                <div className="text-yellow-400 text-xl">{"★".repeat(item.note)}{"☆".repeat(5 - item.note)}</div>
                <p className="mt-3 text-slate-700 italic">“{item.texte}”</p>
                <div className="mt-4 font-bold">— {item.nom}</div>
                <div className="mt-1 text-sm text-slate-500">{item.source}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="tarifs" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-black mb-2">Les tarifs 💰</h2>
          <p className="mb-8 max-w-3xl text-slate-700 leading-7">
            Les tarifs sont donnés à titre indicatif selon la complexité du document, le temps nécessaire et le niveau d’accompagnement demandé.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {tarifs.map((item) => (
              <div key={item.title} className={`rounded-2xl bg-gradient-to-r ${item.color} p-6 text-white shadow-lg hover:scale-105 transition`}>
                <div className="text-sm font-bold">{item.fun}</div>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <div className="mt-4 text-3xl font-black">{item.price}</div>
                <p className="mt-3 text-white/90 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white p-5 shadow text-center font-bold leading-7">
            💳 Paiement sécurisé via PayPal
            <br />
            📌 Un tarif précis vous est confirmé avant toute intervention.
            <div className="mt-4">
              <a
                href={paypalLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition"
              >
                Payer maintenant par PayPal
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-black mb-8">FAQ ❓</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="text-lg font-black text-slate-900">{item.q}</h3>
                <p className="mt-3 text-slate-700 leading-7">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl grid gap-6 md:grid-cols-2 items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-wide text-purple-600">À propos</div>
              <h2 className="mt-3 text-3xl font-black">Un accompagnement humain, clair et rassurant</h2>
              <p className="mt-4 text-slate-700 leading-7">
                Au Phil des Pages est né d’une idée simple : beaucoup de documents sont inutilement compliqués, alors qu’ils pourraient être compris avec des mots simples, une bonne méthode et un peu de recul.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Mon rôle n’est pas de vous remplacer, mais de vous aider à reprendre la main avec plus de clarté, moins de stress et des réponses mieux structurées.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100 p-6 shadow-inner">
              <div className="text-xl font-black">Pourquoi choisir Au Phil des Pages ?</div>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>✅ Un ton simple, humain et compréhensible</li>
                <li>✅ Des explications claires, sans jargon inutile</li>
                <li>✅ Une approche pratique, concrète et rassurante</li>
                <li>✅ Un contact direct et rapide</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-3xl font-black mb-4">Contact 📞</h2>
          <p className="text-lg mb-4">Un document te fait soupirer ? Envoie-le 😄</p>
          <div className="text-2xl font-black">07 66 17 94 44</div>
          <div className="mt-4 text-slate-700">Email : auphildespages@gmail.com</div>
          <div className="mt-4 flex justify-center gap-4 flex-wrap">
            <a
              href={whatsappLink}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition"
            >
              WhatsApp direct
            </a>
            <a
              href="mailto:auphildespages@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow hover:scale-105 transition"
            >
              Envoyer un email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
