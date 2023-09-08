import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState()
  const [mail, setMail] = useState()


  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(name + mail)
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input 
          type="text"
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="mail" 
          placeholder="Mail"
          onChange={(e) => setMail(e.target.value)}
        />

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Form;
