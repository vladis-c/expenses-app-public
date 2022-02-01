import React, { Fragment } from "react"
import ReactDOM from "react-dom"

function Backdrop(props) {
  return <div className="backdrop"></div>
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  )
}

const portalEl = document.getElementById("overlays")

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  )
}

export default Modal
