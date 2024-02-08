import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
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
    <>
      <div className="h-screen">
        Home. Hello {user.fName}
      </div>
    </>
  );
};

export default Home;
