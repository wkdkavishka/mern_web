// imports
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/home";
import MyNavbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" // path at which element home get rendered
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
