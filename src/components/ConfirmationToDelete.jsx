import React from "react"
import Modal from "./Modal"

function ConfirmationToDelete(props) {
  return (
    <Modal>
      <div style={{ textAlign: "center" }}>
        <p>Are you sure you want to delete this transaction?</p>
        <button className="btn" style={{ width: "30%" }} onClick={props.onYes}>
          Yes
        </button>
        {` `}
        <button className="btn" style={{ width: "30%" }} onClick={props.onNo}>
          No
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmationToDelete
