import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      if (!cookies.token) {
        navigate("/");
      }
    }
    checkAuth();
  }, [])
  return (
    <div className="h-screen">
      <div className="p-3">
        <div className="">
          <h1 className="font-semibold">Account & Settings</h1>
        </div>
        {/* Settings */}
        <div className="grid grid-rows-1 gap-1 mt-8 ">
          {/* Profile Settings */}
          <Link to="/profile-settings">
          <div className="flex gap-1 border-t border-r border-l shadow-md hover:border-quartenary hover:shadow-lg hover:m-3 cursor-pointer  hover:bg-primary/30  duration-300 ease-in-out bg-white p-3 rounded-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div>Profile Settings</div>
          </div>
          </Link>
          {/* Dark mode Settings */}
          <div className="flex gap-1 border-t border-r border-l shadow-md hover:border-quartenary hover:shadow-lg hover:m-3 cursor-pointer  hover:bg-primary/30  duration-300 ease-in-out bg-white p-3 rounded-lg">
            <div className="flex rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </div>
            <div>Dark Mode</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
