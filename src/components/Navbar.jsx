import { NavLink } from "react-router-dom";
import CMlogo from "../assets/images/CM.png";

const Navbar = () => {
  return (
    <header className='header flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-filter backdrop-blur-md'>
      <NavLink to='/' className='group'>
        <img src={CMlogo} alt='logo' className='w-20 h-20 object-contain transform group-hover:scale-105 transition-transform duration-300 ease-in-out' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium relative'>
        <NavLink to='/about' className='text-gradient hover:shadow-lg hover:shadow-red-500/50 transition duration-300 ease-in-out'>
          About
        </NavLink>
        <NavLink to='/projects' className='text-gradient hover:shadow-lg hover:shadow-red-500/50 transition duration-300 ease-in-out'>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
