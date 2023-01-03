import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer className="footer px-10 pt-10 pb-5 bg-[#151531] text-base-content rounded mt-10">
      <div>
      <NavLink to='/' className=" text-xl flex items-center gap-2 text-secondary"><button className='btn btn-primary btn-sm flex flex-col'><svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4503 0.620361H0.896563C0.40572 0.620361 0.0078125 1.01827 0.0078125 1.50911V4.17536C0.0078125 4.6662 0.40572 5.06411 0.896563 5.06411H12.4503C12.9412 5.06411 13.3391 4.6662 13.3391 4.17536V1.50911C13.3391 1.01827 12.9412 0.620361 12.4503 0.620361Z" fill="#FFFAFF"/>
</svg>
<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4503 0.620361H0.896563C0.40572 0.620361 0.0078125 1.01827 0.0078125 1.50911V4.17536C0.0078125 4.6662 0.40572 5.06411 0.896563 5.06411H12.4503C12.9412 5.06411 13.3391 4.6662 13.3391 4.17536V1.50911C13.3391 1.01827 12.9412 0.620361 12.4503 0.620361Z" fill="#FFFAFF"/>
</svg>
</button>Pepper</NavLink>
<span className="w-80">
Pepper is one of the most reliable delievery patlform magement service to automate your network.
</span>
        <button className="btn btn-primary btm-nav-xs">Get Started</button>
        <div className="mt-5 grid grid-flow-col gap-4">
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:text-success"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:text-primary"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:text-green-700"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
        <span className="mt-20">© All rights reserved.<span className="text-green-700 font-semibold">Flowset.</span>Powered by<span className="text-primary font-semibold"> WF.</span></span>
      </div>
     <div className="flex-1">
        <span className="footer-title">Page Main</span>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">Blog</Link>
        <Link className="link link-hover">Blog Template</Link>
        <Link className="link link-hover">Pricing</Link>
        <Link className="link link-hover">Pricing Ecommerce</Link>
        <Link className="link link-hover">About</Link>
        <Link className="link link-hover">Career</Link>
        <Link className="link link-hover">Career Template</Link>
        <Link className="link link-hover">Contact</Link>
      </div>
      <div>
      <span className="footer-title">Template Pages</span>
        <Link className="link link-hover">Style Guide</Link>
        <Link className="link link-hover">Licenses</Link>
        <Link className="link link-hover">Changelog</Link>
      </div>
    </footer>   
    </div>
  );
};

export default Footer;
