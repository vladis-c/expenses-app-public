import React, { Fragment, useEffect, useState } from "react"
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "@firebase/firestore"
import { db } from "../firebase"
import Balance from "./Balance"
import ConfirmationToDelete from "./ConfirmationToDelete"

function Transaction() {
  const [transactions, setTransactions] = useState([])

  const totalBalance = transactions.map((transaction) => transaction.amount)

  const name1Balace = totalBalance
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const name2Balance = totalBalance
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0 * -1)
    .toFixed(2)

  useEffect(() => showAllTransactions(), [])

  function showAllTransactions() {
    const queryForTransactions = query(
      collection(db, "transactions"),
      orderBy("date")
    )
    onSnapshot(queryForTransactions, (querySnapshot) => {
      setTransactions(querySnapshot.docs.map((e) => e.data()))
    })
  }

  function deleteTransaction(id) {
    setModalIsShown(false)
    deleteDoc(doc(db, "transactions", id))
  }

  const [modalIsShown, setModalIsShown] = useState(false)

  return (
    <div>
      <h1 className="balance">Balance</h1>
      <Balance
        name1={name1Balace}
        name2={Math.abs(name2Balance).toFixed(2)}
        visibleName1="Vlad"
        visibleName2="Liisa"
      />
      <ul className="list">
        {transactions.map(({ id, text, amount, shortDate }) => (
          <div key={id}>
            {modalIsShown && (
              <ConfirmationToDelete
                onNo={() => setModalIsShown(false)}
                onYes={() => deleteTransaction(id)}
              />
            )}
            <li className={amount < 0 ? "minus" : "plus"}>
              <Fragment>
                <span>{text} </span>
                <span>{shortDate} </span>
                <span>{Math.abs(amount)}€</span>
              </Fragment>

              <button
                className="delete-btn"
                onClick={() => {
                  setModalIsShown(true)
                  deleteTransaction(id)
                }}
              >
                x
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Transaction
