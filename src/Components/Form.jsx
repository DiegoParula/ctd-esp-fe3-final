import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contact, setContact] = useState({
    name:'',
    mail:''
  })
  const [mail, setMail] = useState()

  const regexName = /^(?!\s)[a-zA-Z _-]+$/
  const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  const validateMail = (value) =>{
    if(regexMail.test(value)){
      return true
    }else {
      return false
    }
  }

  const validateName = (value) =>{
    if (regexName.test(value) && value.length > 5){
      return true
    }else {
      return false
    }
  }


  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log()
    if(!validateMail(contact.mail.trim()) || !validateName(contact.name)){
      alert("Por favor verifique su información nuevamente")
    } else {
      alert(`Gracias ${contact.name}, te contactaremos cuando antes vía mail`)
     
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input 
          type="text"
          placeholder="Name" 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value})}
        />
        <input 
          type="mail" 
          placeholder="Mail"
          value={contact.mail}
          onChange={(e) => setContact({...contact, mail: e.target.value})}
        />

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Form;
