
import photograph from '../assets/photograph.png';


export default function Bloc() {
  return(
   <section style=
    {{ backgroundImage: `url(${photograph})` ,
      backgroundSize: 'cover',
       backgroundPosition: 'center'}}

      className='h-screen relative flex items-center px-34'>
        <div  className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 text-white'>
            <h1 className='text-3xl font-bold'>Bienvenue à l’Institut de Formation de Développement IFDCE</h1>
           
            </div>

    </section>

  );
};