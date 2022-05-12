import "./App.css";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {

  function addListing(formData) {}

  function login(formData){}

  function signup(formData){}


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <RoutesList addListing={addListing}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
