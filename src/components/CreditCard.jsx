import React from 'react'

function CreditCard(props) {
    const{type, number, expirationMonth, expirationYear,bank, owner, bgColor, color} = props
    let secretNumber = number.substring(number.lenght-4,4)

  return (
    <div  style={{backgroundColor: `${bgColor}`, color:`${color}`, height: 200, width: 400, borderRadius:20 }}>
    <p>{type}</p>
    <p style={{fontWeight: "bold", fontSize: 30, marginBottom:0, }}>••• ••• ••• {secretNumber}</p>
    <div style={{display: "flex", flexDirection: "row",}}>
    <p style={{marginRight:25, marginLeft:20, marginBottom:0}}>Expires {expirationMonth}/{expirationYear}</p>
    <p>{bank}</p>
    </div>
    <p style={{marginTop:0, marginLeft:20, textAlign:"left"}}>{owner}</p>
    
    
    </div>
  )
}

export default CreditCard