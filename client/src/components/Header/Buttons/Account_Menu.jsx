import { useState } from "react";
import Profile_Modal from "../Modals/Profile_Modal";



export default function Account_Menu () {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

  return (
    <div>
        <div onClick={openModal} className='cursor-pointer w-fit border-black bg-white rounded-xl  text-black pt-[3%] pb-[3%] px-[10%]   duration-100  mr-6 focus:ring focus:outline-none focus:ring-blue-500'>Account</div>

        <Profile_Modal  isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

