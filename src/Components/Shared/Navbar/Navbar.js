import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar md:w-[95%] mx-auto">
        <div className="navbar-start">
          <NavLink to='/' className=" text-xl flex items-center gap-2 text-secondary"><button className='btn btn-primary btn-sm flex flex-col'><svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4503 0.620361H0.896563C0.40572 0.620361 0.0078125 1.01827 0.0078125 1.50911V4.17536C0.0078125 4.6662 0.40572 5.06411 0.896563 5.06411H12.4503C12.9412 5.06411 13.3391 4.6662 13.3391 4.17536V1.50911C13.3391 1.01827 12.9412 0.620361 12.4503 0.620361Z" fill="#FFFAFF"/>
</svg>
<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4503 0.620361H0.896563C0.40572 0.620361 0.0078125 1.01827 0.0078125 1.50911V4.17536C0.0078125 4.6662 0.40572 5.06411 0.896563 5.06411H12.4503C12.9412 5.06411 13.3391 4.6662 13.3391 4.17536V1.50911C13.3391 1.01827 12.9412 0.620361 12.4503 0.620361Z" fill="#FFFAFF"/>
</svg>
</button>Pepper</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
          <li><NavLink to='/blog'>About</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/career'>Careers</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 ">
          <button className='flex items-center gap-1 text-secondary'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.6528 2.89062H0.046875V0.890625H4.44095L4.88976 4.89062H16.0469V10.8291L3.81628 13.2601L2.6528 2.89062ZM15.5469 17.8906C14.7184 17.8906 14.0469 17.2191 14.0469 16.3906C14.0469 15.5622 14.7184 14.8906 15.5469 14.8906C16.3753 14.8906 17.0469 15.5622 17.0469 16.3906C17.0469 17.2191 16.3753 17.8906 15.5469 17.8906ZM5.54688 17.8906C4.71845 17.8906 4.04688 17.2191 4.04688 16.3906C4.04688 15.5622 4.71845 14.8906 5.54688 14.8906C6.3753 14.8906 7.04688 15.5622 7.04688 16.3906C7.04688 17.2191 6.3753 17.8906 5.54688 17.8906Z" fill="#9D0AFF"/>
</svg>Cart
          </button>

          <div  className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden btm-nav-sm flex flex-col text-white font-bold ">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-8 rounded-sm ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content p-3 mt-3 shadow rounded-box w-28 mr-5 bg-white text-black absolute right-[-40px]">
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/career'>Careers</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </div>
         <div className='hidden md:flex gap-4'>    
          <button className="btn btn-outline btn-primary ">Login</button>
          <button className="btn py-2 bg-primary text-white ">Get started</button>
         </div>
        </div>
      </div>
    );
};

export default Navbar;