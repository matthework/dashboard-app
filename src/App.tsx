import { Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import SignInSide from "./components/sign-in-side/SignInSide";
import Dashboard from "./components/dashboard/Dashboard";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<SignInSide />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/properties" element={<PropertiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
