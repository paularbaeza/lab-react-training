import React from 'react'

function Greetings(props) {
    const {lang} = props
    // const langGreeting = {
    //     de: 'Hallo',
    //     fr: 'Bonjour',
    //     es: 'Hola',
    //     en: 'Hello',
    //   };

      const langGreeting = (lang) => {
        if (lang ==="de"){
            return "Hallo"
        }else if (lang === "fr"){
            return "Bonjour"
        }else if (lang === "es"){
            return "Hola"
        }else if (lang === "en"){
            return "Hello"
        }
      }
  return (
    <div>
    <p> {langGreeting(lang)} {props.children}</p>
    </div>
  )
}

export default Greetings