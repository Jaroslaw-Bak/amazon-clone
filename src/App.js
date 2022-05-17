import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import Login from './Login';
import Payment from './Payment';
import Checkout from './Checkout';
import { useEffect } from 'react';
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is : ', authUser);

      if (authUser) { 
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<><Header /><Home /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={<><Header /><Payment /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
