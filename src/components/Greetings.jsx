import React from 'react'

function Greetings(props) {
    console.log(props)
    const {de, en, es, fr} = props
    const langGreeting = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        en: 'Hello',
      };
  return (
    <div>
    <p>{props.children}</p>
    </div>
  )
}

export default Greetings