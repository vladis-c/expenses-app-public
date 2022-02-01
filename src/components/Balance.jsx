import React from 'react'

function NameName(props) {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>{props.visibleName1}</h4>
        <p className="money plus">{props.name1}€</p>
      </div>
      <div>
        <h4>{props.visibleName2}</h4>
        <p className="money minus">{(props.name2)}€</p>
      </div>
    </div>
  )
}

export default NameName
