import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { userLogin, userRegister } from "../services/user.service";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const storedToken = window.localStorage.getItem("_token");

  useEffect(() => {
    if (storedToken) {
      const decodedToken = storedToken ? jwt_decode(storedToken) : null; // Si existe token, decodificar, sino nulo
      console.log(decodedToken)
      const {user} = decodedToken ? decodedToken : null; // Si se pudo decodificar, extraer payload, sino nulo

      setCurrentUser(user);

      return navigate("/");
    }
  }, []);

  function register(data) {
    userRegister(data)
      .then((res) => {
        if (res.ok) {
          alert(res.message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
          return;
        } else {
          return Promise.reject(res.message);
        }
      })
      .catch((err) => alert(JSON.stringify(err)));
  }

  function login(data) {
    userLogin(data)
      .then((res) => {
        if (res.ok) {
          window.localStorage.setItem("_token", res.token);

          const decodedToken = res.token ? jwt_decode(res.token) : null; // Si existe token, decodificar, sino nulo
          const { user } = decodedToken ? decodedToken : null; // Si se pudo decodificar, extraer payload, sino nulo

          setCurrentUser(user);
          return navigate("/");
        } else {
          return Promise.reject(res.message);
        }
      })
      .catch((err) => alert(err));
  }

  function logout() {
    setCurrentUser(null);
    window.localStorage.removeItem("_token");
    navigate("/login");
  }

  const contextValues = { currentUser, login, register, logout };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };
