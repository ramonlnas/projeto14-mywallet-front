import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from "./Enter/Enter";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";




export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path = "/home" element={<Home/>}/>
            <Route path="/enter" element={<Enter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
