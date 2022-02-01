import React, { useState } from "react"
import { auth, db } from "../firebase"
import { setDoc, doc } from "@firebase/firestore"
import Select from "react-select"

function AddTransaction() {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")
  const [valueOfName, setValueOfName] = useState(null)

  const uniqueId = name + amount + text

  const { uid, photoURL, displayName, email } = auth.currentUser

  const nameList = [    
    { value: 1, label: "Vlad" },
    { value: -1, label: "Liisa" },
  ]

  async function onSubmitHandler(e) {
    e.preventDefault()

    const dateObj = new Date()
    const day = dateObj.getDate()
    const month = dateObj.toLocaleString("en-fi", { month: "long" })
    const year = dateObj.getFullYear()
    const newDate = day + " " + month + " " + year

    const newTransaction = {
      id: uniqueId,
      shortDate: newDate,
      date: new Date(),
      text,
      amount: valueOfName > 0 ? +amount : -+amount,
      name,
      uid,
      photoURL,
      displayName,
      email,
    }
    await setDoc(doc(db, "transactions", uniqueId), newTransaction)
    setAmount("")
    setText("")
    setName("")
    setValueOfName(null)
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Select   
            placeholder="Select"         
            options={nameList}
            onChange={(event) => {
              setName(event.label)
              setValueOfName(event.value)
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
