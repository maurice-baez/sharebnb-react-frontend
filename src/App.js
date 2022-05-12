import "./App.css";
import RoutesList from "./RoutesList";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SharebnbApi from "./api";
import decode from "jwt-decode";
import UserContext from "./UserContext";


function App() {
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: false,
  });

  const [token, setToken] = useState(window.localStorage.token);

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = decode(token);
            // put the token on the Api class so it can use it to call the API.
            SharebnbApi.token = token;
            let currentUser = await SharebnbApi.getCurrentUser(username);

            setCurrentUser({
              infoLoaded: true,
              data: currentUser,
            });
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser({
              infoLoaded: true,
              data: null,
            });
          }
        }
      }
      getCurrentUser();
    },
    [token]
  );

  function addListing(formData) {}

  async function login(loginData) {
    const token = await SharebnbApi.login(loginData);
    setToken(token);
  }

  function signup(formData) {}

  function logout() {}

  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser.data,
        setCurrentUser
      }}
    >
      <div className="App">
        <NavBar />
        <RoutesList login={login} addListing={addListing} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
