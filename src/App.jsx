import { Fragment } from "react/cjs/react.production.min"
import "./App.css"
import AddTransaction from "./components/AddTransaction"

import Header from "./components/Header"
import Transactions from "./components/Transactions"
import SignIn from "./components/SignIn"
import { auth } from "./firebase.js"
import { useAuthState } from "react-firebase-hooks/auth"
import LogOut from "./components/LogOut"


function App() {
  const [user] = useAuthState(auth)
  

  return (
    <Fragment>
      <Header />
      <div>
        {user ? (
          <div className="container">
            
            <LogOut />
            <AddTransaction />
            <Transactions />
            
              
            
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </Fragment>
  )
}

export default App
