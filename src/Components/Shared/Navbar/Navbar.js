import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';
import useProduct from '../../../hooks/useProduct';
const Navbar = () => {
  const [show,setShow] = useState(false)
const [categories]= useProduct()
    const navItem =<>
    <li><Link to={'/'}>Home</Link></li>
     {categories.map(category => <li><Link to={`/category/${category._id}`}>{category.name}</Link></li>)}
    </>
    return (
        <div className="navbar bg-black text-white font-serif opacity-80">
  <div className="navbar-start">
    <div className="dropdown">
      <label onClick={()=>setShow(!show)} tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      {show && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
        {navItem}
      </ul>}
    </div>
    <Link className="btn btn-ghost normal-case text-4xl"><FaApple/></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {navItem}
    </ul>
  </div>
</div>
    );
};

export default Navbar;