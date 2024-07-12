import logo from './logo.svg';
import './App.css';
import LeftNav from './pages/shared/LeftNav';
import Register from './pages/Register';
import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthorList from './pages/authors/AuthorList'
import Error from './pages/shared/Error';
function App() {
  
  return (
    <div className="App">
      
       
          <div className='leftMenu'>
            <LeftNav />
          </div>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/authors' element={<AuthorList  />}>
                  <Route path='add' element={<AuthorList  />} />
                  <Route path='edit' element={<AuthorList  />} />
                  <Route path='detail/:id' element={<AuthorList  />} />
              </Route>
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </div>
        
        
    </div>
  );
}

export default App;
