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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51L0rNdLhP8cwGCsE70YW56ZHYr5i09iCVump00zzWSvXOAffEtQngH63U3txXfP4Qji5FzlQnIu7ZEaBOAEJG8bQ00pCBvBe7t');

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
          <Route 
            path='/' 
            element={<><Header /><Home /></>} />
          <Route 
            path='/checkout' 
            element={<><Header /><Checkout /></>} />
          <Route 
            path='/login' 
            element={<Login />} />
          <Route 
            path='/payment' 
            element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
