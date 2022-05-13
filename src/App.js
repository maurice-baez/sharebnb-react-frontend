import "./App.css";
import RoutesList from "./RoutesList";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SharebnbApi from "./api";
import decode from "jwt-decode";
import UserContext from "./UserContext";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [currentUser, setCurrentUser] = useState({
    data: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  const [token, setToken] = useState(localStorage.getItem("token"));

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          let { username } = decode(token);
          // put the token on the Api class so it can use it to call the API.
          let currentUser = await SharebnbApi.getCurrentUser(username);
          SharebnbApi.token = token;
          setCurrentUser({
            data: currentUser,
          });
          localStorage.setItem("token", token);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
      getCurrentUser();
      // if (token && isLoading === true) {
      //   getCurrentUser();
      // }else{
      //   setIsLoading(false)
      // }
    },
    [token]
  );

  function addListing(formData) {}

  async function login(loginData) {
    const token = await SharebnbApi.login(loginData);
    setToken(token);
  }

  function signup(formData) {}

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser({
      data: null,
    });
    setToken(null);
    localStorage.clear();
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser.data,
        setCurrentUser,
      }}
    >
      <div className="App">
        <NavBar logout={logout} />
        <RoutesList
          currentUser={currentUser.data}
          login={login}
          addListing={addListing}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;
