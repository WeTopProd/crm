import React, { useState } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import "./Components/Page/Main.scss";
// Components
import Header from "./Components/Header/Header";
import LogIn from "./Components/LogInAdmin/LogIn";
import Footer from "./Components/Footer/Footer";
import Exit from "./Components/ModalWindow/Exit";
import Main from "./Components/Page/Main";
import {Client} from "./Components/Page/Clients/Client";
import {store} from './Redux/Store'
import { Project } from "./Components/Page/Project/Project";
import {Proposals} from "./Components/Page/Proposals";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Provider store={store}>
        {!isAuthenticated === false ? (
          <>
            <div className="disabled">
              <Header />
            </div>
            <div className="App_body">
              <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/exite" element={<Exit />} />
              </Routes>
            </div>
            <div className="disabled">
              <Footer />
            </div>
          </>
        ) : (
          <>
            <Header />
            <div className="App_body">
              <Main />
              <Routes>
                
                <Route path="/exite" element={<Exit />} />
                <Route path="/clients" element={<Client />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/proposals" element={<Proposals />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
