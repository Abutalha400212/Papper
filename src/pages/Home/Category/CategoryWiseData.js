import { ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryWiseData = () => {
    const {bg,img,name,price,_id,display,chipset,memory,software,battery,misc,body} = useLoaderData()
    return (
        <div className=''>
        <div className={`min-h-screen mt-10 mx-auto text-center flex flex-col gap-3 p-5 ${bg}`
    }>
      <h1 className="text-6xl font-bold font-sans">{name}</h1>
      <p className="text-3xl font-mono">Big and Bigger</p>
      <p className="text-3xl font-mono">${price}</p>
      <div className="flex justify-center items-center text-blue-800 font-serif">
        <Link
        to={`/cart/${_id}`}
          className="cursor-pointer link-hover text-xl ml-2"
        >
          Buy
          <ChevronRightIcon className="w-4 inline " />
        </Link>
      </div>
      <figure className="flex justify-center">
        <img src={img} alt="" width={500} />
      </figure>
      </div>
      <div className='md:w-9/12 md:mx-auto mx-4 my-5  ' >
            <h1 className="text-lg font-bold underline font-mono">
              Product Details
            </h1>
            <ul className="text-md">
              <li>
                <span className="font-semibold text-md">Body: </span> {body}
              </li>
              <li>
                <span className="font-semibold text-md">Display: </span>
                {display}
              </li>
              <li>
                <span className="font-semibold text-md">Chipset: </span>
                {chipset}
              </li>
              <li>
                <span className="font-semibold text-md"> Memory: </span>
                {memory}
              </li>
              <li>
                <span className="font-semibold text-md">Software: </span>
                {software}
              </li>
              <li>
                <span className="font-semibold text-md">Misc:</span> {misc}
              </li>
              <li>
                <span className="font-semibold text-md">Battery: </span>
                {battery}
              </li>
            </ul>
          </div>
    
    </div>
    );
};

export default CategoryWiseData;