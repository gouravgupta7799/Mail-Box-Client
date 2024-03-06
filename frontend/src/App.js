

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignupPage from './Components/pages/LoginSignup/LoginSignupPage';
import HomePage from './Components/pages/HomePage/Home'
import { useSelector } from 'react-redux';
import Inbox from './Components/pages/Editor/Inbox';


function App() {

  const isLoggedIn = useSelector((state) => state.authRdx.isLoggedIn);


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignupPage />} />
          <Route path='/home' element={isLoggedIn ? <HomePage /> : <LoginSignupPage />} />
          <Route path='/forgetPassword' element={<Inbox />} />

        </Routes>

      </BrowserRouter>
    </div >

  );

}

export default App;
