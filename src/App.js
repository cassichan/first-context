import { useState, createContext } from "react";
import Menubar from "./Components/Menubar";
import Hero from "./Components/Hero";
import "./App.css";

export const UserInfoContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserInfoContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
    >
      <Menubar />
      <Hero />
    </UserInfoContext.Provider>
  );
}

export default App;
