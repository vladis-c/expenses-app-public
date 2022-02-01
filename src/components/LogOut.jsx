import React from "react"
import { auth } from "../firebase"

function LogOut() {
  return (
    <div>
      <button className="btn-signout" style={{ width: "30%" }} onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default LogOut
