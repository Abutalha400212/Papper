import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const {name,img,price} = product
    return (
        <div className='mt-10 mx-auto text-center flex flex-col gap-3 p-5'>
            <h1 className='text-6xl font-bold font-sans'>{name}</h1>
            <p className='text-3xl font-mono'>Big and  Bigger</p>
            <p className='text-3xl font-mono'>${price}</p>
            <div className='flex justify-center items-center text-blue-800 font-serif'>
                <Link className='link-hover text-xl'>Learn More<ChevronRightIcon className='w-4 inline ml-0'/></Link>
                <Link className='link-hover text-xl ml-2'>Buy<ChevronRightIcon className='w-4 inline '/></Link>
                
            </div>
            <figure className='flex justify-center'><img src={img} alt='' width={500}/></figure>
        </div>
    );
};

export default ProductCard;