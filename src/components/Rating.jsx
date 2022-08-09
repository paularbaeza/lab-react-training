import React from 'react'

function Rating(props) {
    console.log(props)
    const ratingNumber = props.children

    const rating = (ratingNumber) => {
    if(ratingNumber < 0.5){
        return "☆☆☆☆☆"
    }else if(ratingNumber >= 0.5 && ratingNumber < 1.5){
        return "★☆☆☆☆"
    }else if(ratingNumber >= 1.5 && ratingNumber < 2.5){
    return "★★☆☆☆" 
    }else if(ratingNumber >= 2.5 && ratingNumber < 3.5){
    return "★★★☆☆"
    }else if(ratingNumber >= 3.5 && ratingNumber < 4.5){
    return "★★★★☆"
    }else if(ratingNumber >= 4.5 && ratingNumber <=5){
    return "★★★★★"}
}

  return (
    <div>
    <p>{rating(ratingNumber)}</p>   
    
    </div>
  )
}

export default Rating