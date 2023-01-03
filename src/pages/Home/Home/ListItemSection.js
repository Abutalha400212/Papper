import React from 'react';
const activitiesOne =["Activity Stream","Public and Private chat","Event Sheduler","Appoinment Sheduling","Creadit card Required","Group Video Call"]
const activitiesTwo =["Group Video Call","Event Sheduler","Expert on Demand Call","Email Support for 24/7","Activity Stream","Creadit card Required"]
const ListItemSection = () => {
    return (
       <div className='grid gap-y-5 my-10'>
         <ul className='grid grid-cols-2 md:grid-cols-6 gap-6'>
            {activitiesOne.map(doc => <li className='list-none flex gap-1 items-center flex-wrap text-black font-semibold text-sm'><button className='w-6 h-6 rounded-full btn-primary'>
            <svg width="26" height="10" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 0.450504C16.4786 0.814204 16.5207 1.446 16.157 1.8616L7.40702 11.8616C7.04472 12.2757 6.41583 12.3193 5.99993 11.9591L0.749924 7.4137C0.332324 7.0522 0.286925 6.4206 0.648425 6.0031C1.00992 5.5856 1.64142 5.5401 2.05902 5.9016L6.55692 9.796L14.6518 0.544604C15.0155 0.129004 15.6473 0.0869042 16.0629 0.450504Z" fill="#FFFAFF"/>
</svg>
            </button>
            {doc}
                </li>)}
        </ul>
        <ul className='grid grid-cols-2 md:grid-cols-6 gap-6 mt-10'>
        {activitiesTwo.map(doc => <li className='list-none flex gap-1 items-center flex-wrap text-black font-semibold text-sm'><button className='w-6 h-6 rounded-full btn-success'>
        <svg width="26" height="10" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 0.450504C16.4786 0.814204 16.5207 1.446 16.157 1.8616L7.40702 11.8616C7.04472 12.2757 6.41583 12.3193 5.99993 11.9591L0.749924 7.4137C0.332324 7.0522 0.286925 6.4206 0.648425 6.0031C1.00992 5.5856 1.64142 5.5401 2.05902 5.9016L6.55692 9.796L14.6518 0.544604C15.0155 0.129004 15.6473 0.0869042 16.0629 0.450504Z" fill="#FFFAFF"/>
</svg>
        </button>
        {doc}
            </li>)}
    </ul>
       </div>
    );
};

export default ListItemSection;