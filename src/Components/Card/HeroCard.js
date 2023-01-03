import React from 'react';

const HeroCard = ({card}) => {
    const {img,title} = card
    return (
        <div className='p-4 md:w-80 h-60 shadow-inner rounded-xl hover:shadow-md' data-aos="lg:zoom-out-up">
            <button className='w-8 h-8 rounded-lg  btn-primary mb-10'>
            {img}
            </button>
<h1 className='text-black font-bold text-2xl'>{title}</h1>
<p className='text-black text-sm max-w-sm'>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
            </div>
    );
};

export default HeroCard;