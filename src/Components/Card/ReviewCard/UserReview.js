import React from 'react';

const UserReview = () => {
    return (
        <div className=" py-6 px-3 shadow-inner rounded-xl lg:w-80 w-96">
            <div>
                <p className='text-sm max-w-sm text-black ml-2'>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
            
                <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden"></input>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 "></input>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2"></input>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 "></input>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2"></input>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2"></input>
</div>
                </div>
                <div className='ml-2'>
                    <h1 className='text-xl text-gray-900 font-semibold'>Ronald Richards</h1>
                    <p className='text-sm  text-gray-600 '>CEO- Utlta</p>
                </div>
            </div>
     
    );
};

export default UserReview;