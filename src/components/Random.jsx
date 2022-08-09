import React from 'react'

function Random(props) {
console.log (props)
    const {min, max} = props
    const getRandomNum = (min,max) => {
        return Math.floor (Math.random () * (max-min) + min)
    }
  return (
    <div>
    
    <p>Random value between {min} and {max} => {getRandomNum(min,max)}</p>
    </div>
  )
}

export default Random