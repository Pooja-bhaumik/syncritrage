
import React from "react";
import { Route,Routes } from "react-router-dom";
import {SignUpContainer} from './Pages/Authentication/SignUp'
import {SignInContainer} from './Pages/Authentication/SignIn'
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<SignUpContainer />} />
        <Route path='/login' element={<SignInContainer />} />
      </Routes>
    </div>
  );
}

export default App;
