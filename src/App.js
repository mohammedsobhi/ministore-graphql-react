import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
