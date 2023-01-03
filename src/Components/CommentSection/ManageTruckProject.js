import React from 'react';

const ManageTruckProject = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-10 items-center'>
            <div className='w-96'>
                <img src="https://s3-alpha-sig.figma.com/img/3071/6b9f/216923cc891f86eea295e26f73810ffd?Expires=1673827200&Signature=JRAzx-2D5Btxe-NrgrVu5yMckRnr0lHzP2KPe5w2DLBeo24TkdVG0iHr9JLTNLj2bnp3Nrtb1oAZ0HlFa0PhKSufVskyjNWJCe9V4WlPV1k6JIO2cOwmcNnEZIKbpc6ZkvlU31kpbtRPQCDTFJIbjCv1TXre~uOQg2K4cSMS6K2Odn0tWk6bMILrFWJHvpFYq8j0x9mQ1RPmRyU3K-J3mETyS6zMGp0MENF51nlQ6ZCK5SDz5C48bdxwRfzgI0IOp5n8g2-4wKQbzxmEw5pvytiowDgcGEvWp-W1Ya2ISr5DDzec4iu7E42yBFOCvqTw2XQy7U44ScyS~tHCa34m7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className=''>
                <h1 className='text-3xl max-w-sm mx-auto text-black font-semibold'>Manage and Track Your Projects</h1>
                <p className='text-sm max-w-sm mx-auto text-black my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <ul className='grid gap-y-1 '>
                <li className='list-none flex gap-1 items-center flex-wrap text-black font-semibold text-sm'><button className='w-6 h-6 rounded-full btn-primary'>
            <svg width="26" height="10" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 0.450504C16.4786 0.814204 16.5207 1.446 16.157 1.8616L7.40702 11.8616C7.04472 12.2757 6.41583 12.3193 5.99993 11.9591L0.749924 7.4137C0.332324 7.0522 0.286925 6.4206 0.648425 6.0031C1.00992 5.5856 1.64142 5.5401 2.05902 5.9016L6.55692 9.796L14.6518 0.544604C15.0155 0.129004 15.6473 0.0869042 16.0629 0.450504Z" fill="#FFFAFF"/>
</svg>
            </button>
            Create posts, reels and stories.
                </li>
                <li className='list-none flex gap-1 items-center flex-wrap text-black font-semibold text-sm'><button className='w-6 h-6 rounded-full btn-primary'>
            <svg width="26" height="10" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 0.450504C16.4786 0.814204 16.5207 1.446 16.157 1.8616L7.40702 11.8616C7.04472 12.2757 6.41583 12.3193 5.99993 11.9591L0.749924 7.4137C0.332324 7.0522 0.286925 6.4206 0.648425 6.0031C1.00992 5.5856 1.64142 5.5401 2.05902 5.9016L6.55692 9.796L14.6518 0.544604C15.0155 0.129004 15.6473 0.0869042 16.0629 0.450504Z" fill="#FFFAFF"/>
</svg>
            </button>
            Publish your Facebook posts dynamically.
                </li>
                <li className='list-none flex gap-1 items-center flex-wrap text-black font-semibold text-sm'><button className='w-6 h-6 rounded-full btn-primary'>
            <svg width="26" height="10" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 0.450504C16.4786 0.814204 16.5207 1.446 16.157 1.8616L7.40702 11.8616C7.04472 12.2757 6.41583 12.3193 5.99993 11.9591L0.749924 7.4137C0.332324 7.0522 0.286925 6.4206 0.648425 6.0031C1.00992 5.5856 1.64142 5.5401 2.05902 5.9016L6.55692 9.796L14.6518 0.544604C15.0155 0.129004 15.6473 0.0869042 16.0629 0.450504Z" fill="#FFFAFF"/>
</svg>
            </button>
            Schedule any Twitter posts.
                </li>
                </ul>
               
            </div>
        </div>
    );
};

export default ManageTruckProject;