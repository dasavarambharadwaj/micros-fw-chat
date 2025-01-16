import { useState, useEffect } from "react";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(getCookie("auth_token"));
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const updateAuthToken = () => {
      const token = getCookie("auth_token");
      setAuthToken(token);
      if (token) {
        setUserData(JSON.parse(atob(token.split(".")[1])));
      } else {
        setUserData({});
      }
    };

    const handleCookieChange = () => {
      updateAuthToken();
    };
    cookieStore.addEventListener("change", handleCookieChange);

    updateAuthToken();

    return () => {
      cookieStore.removeEventListener("change", handleCookieChange);
    };
  }, []);

  return { authToken, userData };
};

export default useAuthToken;
