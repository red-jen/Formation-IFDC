import { useState, useEffect } from 'react';
import  image1 from '../assets/image1.jpg';
import  studentimage1 from '../assets/studentimage1.png';
import { Link } from 'react-router-dom';
export default function ImageSlider() {
  return (

    <section style=
    {{ backgroundImage: `url(${studentimage1})` ,
      backgroundSize: 'cover',
       backgroundPosition: 'center'}}

      className='h-screen relative flex items-center px-34'>
        <div  className='absolute inset-0 bg-black opacity-60'></div>

        <div className='z-10 grid gap-5 witdh'>
          <p className='text-4xl font-bold text-white'>
            Et si votre expérience valait un diplôme ?
          </p>
          <p className='text-2xl mt-4  text-white'>
            Chez IFDC, vous pouvez obtenir une licence ou un master reconnu grâce à la Validation des Acquis de l’Expérience.
           Votre parcours professionnel devient votre plus grande force.
            </p>
            <div>
           <Link
              to="/Authentification" // Replace with the actual path you want to link to
              className="bg-blue-500 p-4 inline-flex justify-center items-center rounded-full gap-10 "
          >
            <span className="text-xl text-white font-semibold">En savoir plus</span>
          </Link>
          </div>

        </div>
    </section>


  );
};






