import "./App.css";
import RoutesList from "./RoutesList";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SharebnbApi from "./api";
import decode from "jwt-decode";
import UserContext from "./UserContext";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.token);

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      console.debug("use effect, token=", token)

      async function getUser() {
        // only get user if a token is stored
        if (token) {
          // store token from login/register process to SharebnbApi class and localStorage
          SharebnbApi.token = token;
          localStorage.token = token;

          const { username } = decode(token);
          const currentUser = await SharebnbApi.getCurrentUser(username);

          setCurrentUser(currentUser);
        }
        setIsLoading(false);
      }
      setIsLoading(true);
      getUser();
    },
    [token]
  );


  async function addListing(formData) {
    await SharebnbApi.addListing(formData);
  }

  async function login(loginData) {
    const token = await SharebnbApi.login(loginData);
    setToken(token);
  }

  async function signup(formData) {
      const token = await SharebnbApi.register(formData);
      setToken(token);
    }


  async function search(searchTerm) {
    await SharebnbApi.getListings(searchTerm);
  }

  /** Handles site-wide logout. */
    function logout() {
      setToken(null);
      setCurrentUser(null);
      localStorage.clear();
    }


  if (isLoading) return <LoadingSpinner />;

  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser,
      }}
    >
      <div className="App">
        <NavBar logout={logout} search={search} />
        <RoutesList
          currentUser={currentUser}
          signup={signup}
          login={login}
          addListing={addListing}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;
