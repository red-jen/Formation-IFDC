import React from 'react';
import herosilder from '../component/herosilder';
import { main } from 'framer-motion/client';
import HeroSlider from '../component/herosilder';
import Presentation from '../component/presentation';
import Stats from '../component/stats';
import Partener from '../component/partener';
import Cards from '../component/cards';
import Presentation2 from '../component/presentation2';
import Bloc from '../component/bloc';

export default function Home() {

return ( 
   <>
    <HeroSlider/>
    <Partener/>
    
    <Presentation2/>
    <Presentation/>
  <Stats/>
   
    
    
    
   </>
    );
    
  }