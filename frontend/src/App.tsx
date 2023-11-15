import React, { useState }  from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Header from './Components/Header/Header';
import LogIn from './Components/Body/LogInAdmin/LogIn';
import Footer from './Components/Footer/Footer';
import Exit from './Components/ModalWindow/Exit'
import Main from './Components/Body/MainPage/Main';
function App () {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  

  return (
    <div className="App" id='App'>
  
      <BrowserRouter>
        {!isAuthenticated === false ? (
          <>
            <div className='disabled'>
              <Header />
            </div>
            <div className="App_body">
              <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/exite" element={<Exit />} />
              </Routes>
            </div>
            <div className='disabled'>
              <Footer />
            </div>
          </>
        ) : (
          <>
            <Header />
            <div className="App_body">
              <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/exite" element={<Exit />}/>
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
