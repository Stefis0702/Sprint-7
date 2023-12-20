import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProtectedRoute from "../utils/ProtectedRoute";
import { useNavContext } from "../api/ApiStartW";

 function  RoutesCom (): JSX.Element {
    const {isUserLoggedIn} = useNavContext();

    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute canActivate={isUserLoggedIn} redirectPath='/Login'/>} >
        <Route path="/App" element={<App />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
        
    )
}
export default RoutesCom

    