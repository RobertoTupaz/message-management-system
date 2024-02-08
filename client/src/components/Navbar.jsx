import { NavLink } from "react-router-dom"
import Account_Menu from "./Header/Buttons/Account_Menu"

const Navbar = () => {
  return (
    <header className="header h-[3rem] border-b bg-gradient-to-r  border-quartenary from-primary to-secodary text-white ">

<nav className="flex duration-300 justify-between text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl gap-7 font-medium pt-2  px-3 sm:px-5 md:px-5 lg:px-28 xl:px-28 ">
    <div className="flex gap-3">
    <NavLink to="/home" className={({ isActive }) => isActive ? '  border-black border-b-2 pb-[7%] duration-100 ease-in-out ' : 'text-white'  }>
        Home
    </NavLink>
    <NavLink to="/aboutus" className={({ isActive }) => isActive ? ' border-black border-b-2 pb-[7%] duration-100  ease-in-out' : 'text-white '  }>
       About us
    </NavLink>
    </div>

<div>
<Account_Menu />
  
</div>
    
    {/* <div>
    <NavLink to="#" className={({ isActive }) => isActive ?  '  border-black bg-white rounded-xl  text-black py-[6%] px-[16%]   duration-100  mr-6 focus:ring focus:outline-none focus:ring-blue-500 ' : '  border-black bg-white rounded-xl  text-black py-[6%] px-[16%]   duration-100  mr-6'   }>
       Account
    </NavLink>
    </div> */}
</nav>
    </header>
  )
}

export default Navbar