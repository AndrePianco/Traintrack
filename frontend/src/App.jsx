import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home.jsx";
import AddWorkout from "./Pages/AddWorkout/AddWorkout.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Login from "./Pages/Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Se a rota não for /login, o Header será exibido */}
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* O Header só será renderizado nas outras páginas */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
