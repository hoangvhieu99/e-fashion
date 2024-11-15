import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SignUp } from '../screens';

const AuthRouter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-none d-lg-block d-xl-block">
          <h1>assd</h1>
        </div>
        <div className="col content-center">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default AuthRouter