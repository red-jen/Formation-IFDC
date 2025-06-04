import React from 'react';
/*import studentimage1 from '../assets/studentimage1.png';
export default function Cards() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          <article
            className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${studentimage1})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                 Devenir Membre
                </a>
              </h3>
            </div>
          </article>
          <article
            className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${studentimage1})`,
            }}
          >
           <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                 Devenir Membre
                </a>
              </h3>
            </div>
          </article>
          <article
            className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${studentimage1})`,
               }}
          >
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                 Devenir Membre
                </a>
              </h3>
            </div>
          </article>
        </section>
      </article>
    </section>
       
    );
}
*/


export default function Cards() {

  const posts = [
    {
        title: "Présentation Générale",
        desc: "L’Institut de Formation, de Développement de Compétences et d’Excellence (IFDCE) est un établissement spécialisé dans la formation professionnelle continue, la validation des acquis de l’expérience (VAE) et les diplômes professionnels accessibles à distance. Notre mission : rendre l’excellence accessible à tous, partout, en valorisant les parcours professionnels et en facilitant l’accès à des diplômes reconnus en France et en Europe. ",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        href: "javascript:void(0)"
    },
    {
        title: "Activités principales",
        desc: "Formations diplômantes : technicien et TS, Licences et Masters professionnels 100% en ligne - Validation des acquis de l’expérience  : accompagnement personnalisé - Formations certifiantes dans divers domaines :, droit, économie, management, informatique, infographie, etc.- Conseil en ingénierie de formation et accompagnement des entreprises",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        href: "javascript:void(0)"
    },
    {
        title: "Reconnaissance et Partenariat",
        desc: "Les diplômes sont délivrés en partenariat avec des organismes français . Tous les parcours sont alignés sur les standards européens, avec une reconnaissance en France et dans l’Union Européenne.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        href: "javascript:void(0)"
    },
    
    {
        title: "Public Cible",
        desc: "Nos formations et dispositifs s’adressent aux :- Professionnels en activité- Demandeurs d’emploi- Cadres et techniciens souhaitant évoluer- Personnes en reconversion- Étudiants cherchant une alternative flexible.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        href: "javascript:void(0)"
    },
 {
    title: "Qui sommes-nous ?",
    desc: "L’IFDCE est un institut spécialisé dans la formation professionnelle à distance. Nous proposons :- Des diplômes reconnus en France et en Europe- La validation des acquis de l’expérience (VAE)- Des certifications en droit, management, informatique, etc.- Un accompagnement sur mesure pour les professionnels et les entreprises.",
    img: "https://www.eagles-security.com/public/img/big/eea8b832fcae4563cbf8057f89f21c31.jpg",
    href: "javascript:void(0)"
}
,
  
]
    return (
        <section className="py-5">
            <div className=" container max-w-screen-xl mx-auto px-4 md:px-8">
                 <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Présentation Institutionnelle – IFDCE</h1>
                <ul className=" grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full h-1/2 rounded-lg overflow-auto" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 h-3/4 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </section>
    )
}