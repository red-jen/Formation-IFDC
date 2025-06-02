export default function Stats() {

     const stats = [
        {
            data: "+107 K",
            title: "DOSSIER TRAITÉS"
        },
        {
            data: "148",
            title: "ÉCOLES MEMBRES"
        },
        {
            data: "10K+",
            title: "DIPLÔMÉS"
        },
        {
            data: "21+",
            title: "PAYS REPRÉSENTÉS"
        },
    ]
    return (
     <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Inscrivez-vous aujourd’hui.
                    </h3>
                    <p className="mt-3">
                        toutes les formations sont certifiées
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
  }