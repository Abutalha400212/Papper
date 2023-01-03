import React from 'react';
import { Items } from '../../../Components/SponsoredItem/SponsoredItem';

const SponsoredSection = () => {
    return (
       <div className='my-10 md:w-[90%] mx-auto '>
        <p className='text-center text-gray-500 text-lg '>Trusted and loved by the world’s best teams</p>
         <div className='lg:flex hidden justify-center items-center gap-16 bg-[url(https://i.ibb.co/WDd1vBD/div.png)] mt-10'>
            {Items.map(item => item)}
        </div>
         <div className='lg:hidden flex justify-center items-center gap-16 bg-[url(https://i.ibb.co/WDd1vBD/div.png)] mt-10'>
            {Items.slice(2,3).map(item => item)}
        </div>
       </div>
    );
};

export default SponsoredSection;