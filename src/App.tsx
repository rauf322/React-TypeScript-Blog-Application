import MyNavbar from "./components/UI/navbar/MyNavbar";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
    return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <MyNavbar/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    );
}

export default App;