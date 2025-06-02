export default function Faqs() {

    const faqsList = [
        {
            q: "Pourquoi choisir IFDCE ?",
            a: "Diplômes français (T,TS, licence, master) Formations flexibles et en ligne Accompagnement sur mesure Reconnaissance européenne. La vraie question, c’est : qu’est-ce que vous attendez ?"
        },
        {
            q: "Vous ne savez pas si vous êtes éligible à la VAE ?",
            a: "Prenez un rendez-vous gratuit avec nos conseillers. Ils évalueront votre profil et vous guideront étape par étape.Lien dans la bio ou en message privé."
        },
        {
            q: "Pour qui ?",
            a: "Vous êtes salarié, demandeur d’emploi, entrepreneur, ou sans diplôme ?IFDCE s’adresse à vous.Notre accompagnement s’adapte à votre emploi du temps, vos besoins, vos ambitions.#AccessibleÀTous #VAEPourTous"
        },
        {
            q: "Formation ou VAE ?",
            a: " Quelle est la différence entre une formation diplômante et une VAE ? La formation, c’est apprendre de nouvelles compétences. La VAE, c’est faire reconnaître ce que vous savez déjà.  Et parfois, les deux se combinent !"
        },
        {
            q: "Quelle sont les étapes de la VAE?",
            a: "Étude gratuite de votre dossier .Constitution du livret d’expérience. Soutenance devant un jury .Obtention de votre diplôme français reconnu. Nous sommes à vos côtés à chaque étape."
        },
        {
            q: "Vous avez quitté les études trop tôt ?",
            a: "Vous travaillez depuis des années sans diplôme officiel? Avec IFDCE, vous pouvez reprendre le contrôle. ✔ Étude gratuite de votre dossier ✔ Accompagnement sur mesure"
        },        
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Questions fréquemment posées
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Nous avons répondu à toutes les questions fréquemment posées. Toujours confus ? N'hésitez pas à nous contacter.
                </p>
            </div>
            <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div 
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}