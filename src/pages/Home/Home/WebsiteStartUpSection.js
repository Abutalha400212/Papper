import React from 'react';
import HeroCard from '../../../Components/Card/HeroCard';
const startUp =[{title:"7.000 Happy users",img:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
},{
    title:"24/7 Support",
    img:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
  </svg>
  
},{
    title:"Global community",
    img:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
  
    
}]
const WebsiteStartUpSection = () => {
    return (
        <div className='md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between my-10 gap-4'>
            <div className=''>
                <h1 className='text-black max-w-sm md:max-w-xs font-bold text-2xl'>Build a powerful website for your startup.</h1>
                <p className='text-black text-sm max-w-sm md:max-w-xs my-4'>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
                <button className='btn btn-primary text-white'>Read More</button>
            </div>
            <div className='grid gap-y-3 w-96'>
                {startUp.slice(0,2).map(card=><HeroCard card={card}/>)}   
            </div>
            <div className='w-96'>
            {startUp.slice(2,3).map(card=><HeroCard card={card}/>)}   
            </div>
         
        </div>
    );
};

export default WebsiteStartUpSection;