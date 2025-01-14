import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "./Pages/signup";
import SignInPage from "./Pages/signin";
import { Setup } from "./Pages/setup";
import { Physics } from "./Pages/physics";
import { Chemistry } from "./Pages/chem";
import { Biology } from "./Pages/bio";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<SignupPage></SignupPage>} />
        <Route path="/signin" element={<SignInPage></SignInPage>} />
        <Route path="/" element={<Setup></Setup>} />
        <Route path="/phy" element={<Physics></Physics>} />
        <Route path="/chem" element={<Chemistry></Chemistry>} />
        <Route path="/bio" element={<Biology></Biology>} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
