import React from 'react';
import UserReview from '../../../Components/Card/ReviewCard/UserReview';

const UserReviewSection = () => {
    return (
       <div className='md:w-[90%] mx-auto '>
        <div>
        <h1 className='text-3xl text-gray-900 font-semibold max-w-sm'>Don’t take our words for it - listen to our clients</h1>
        <p className='text-sm my-4 text-gray-600 max-w-sm'>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
        </div>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            <UserReview/>
            <UserReview/>
            <UserReview/>
            <UserReview/>
            <UserReview/>
            <UserReview/>

        </div>
       </div>
    );
};

export default UserReviewSection;