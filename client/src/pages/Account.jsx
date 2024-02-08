import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Account = () => {
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
    <div className="h-screen">Account</div>
  )
}

export default Account