import React from 'react'
import { useState } from 'react'

function LikeButton() {

    let [likes, setLikes] = useState(0)
    
    let addLike = () => {
        setLikes (likes+1)
    }

  return (
    <button onClick = {addLike}>{likes} likes</button>
  )
}

export default LikeButton