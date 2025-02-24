import MyNavbar from "./components/UI/navbar/MyNavbar";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
      <BrowserRouter>
        <MyNavbar/>
        <AppRouter/>
      </BrowserRouter>
    );
}

export default App;