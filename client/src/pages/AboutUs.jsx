import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
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
    <div className="h-screen">About us</div>
  )
}

export default AboutUs