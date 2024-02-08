import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie"
import { enqueueSnackbar } from "notistack";

/* eslint-disable react/prop-types */
const Profile_Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const logout = () => {
    removeCookie('token');
    removeCookie('username');
    enqueueSnackbar("Logout Successfully", {variant: 'success'})
    navigate("/");
  }
  
  return (
    <div  className="absolute duration-300 animate-[pulse_0.5s] right-0 top-0 text-black h-screen w-screen">
      
       
        <div  
        onClick={onClose}
            className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity"
            aria-hidden="true">
          
        </div>

      
    <div>
        {/* Content */}

        <div className="absolute shadow-md border-t  border-black/30 bg-white -right-5 top-8 mx-10 p-3 rounded-xl mt-3 text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl font-semibold">
        {/* Name of the User */}
        <div className="rounded-xl cursor-pointer p-3">
          Roberto Rodriguez Tupaz
        </div>

        {/* Divider */}
        <div className="pt-3">
          <hr />
        </div>
        {/* Settings */}
        <Link to='/settings'>
        <div  onClick={onClose} className="duration-300 ease-in-out rounded-xl hover:bg-stone-500/15 cursor-pointer p-3">Settings</div>

        </Link>
        {/* Log Out */}
        <div 
        className="duration-300 ease-in-out rounded-xl hover:bg-stone-500/15 cursor-pointer p-3"
        onClick={logout}
        >Log Out</div>
        </div>

        </div>
        
    </div>
  )
}

export default Profile_Modal