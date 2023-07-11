import { createContext, useState, useContext, useEffect } from "react";
import { getMe } from "../api/auth-api";
import { getAllBeer, getBeerById } from "../api/beer-api";
import { getBreweryById } from "../api/brewery-api";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;

    const fetchMe = async () => {
      const rs = await getMe(token);
      setUser(rs.data);
    };

    fetchMe();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  //  beer

  const [beer, setBeer] = useState([]);

  const fetchBeer = async () => {
    const res = await getAllBeer();
    console.log(res);
    setBeer(res.data);
  };

  const [beerById, setBeerById] = useState([]);

  const fetchBeerById = async (id) => {
    const res = await getBeerById(id);
    setBeerById(res.data);
    console.log(res.data);
  };

  const [breweryById, setBreweryById] = useState([]);

  const fetchBreweryById = async (id) => {
    const res = await getBreweryById(id);
    setBreweryById(res.data);
    console.log("8888888888888888888", res.data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // fetchMe,
        logout,
        beer,
        fetchBeer,
        beerById,
        fetchBeerById,
        breweryById,
        fetchBreweryById,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
