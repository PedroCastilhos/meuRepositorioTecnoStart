import React from "react";

export default function Login () {

  function HandleOnChange(event){
    const rebece = event.target.value
    return console.log(rebece)
  }

  return(
      <div>
        <button>Sign in</button>
        <input onChange={HandleOnChange} type="text" />
        
      </div>
  )
}