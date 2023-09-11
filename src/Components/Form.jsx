import React, { useState } from "react";
import { useRecipeStates } from "./utils/global.context";

const Form = () => {

  const {contextTheme} = useRecipeStates()

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
      <form className='form' id={contextTheme} onSubmit={onSubmitForm}>
      <p className="form-title">Want to know more?</p>
      <p className="form-subtitle">Send us your questions and we will contact you</p> 
       <div className="input-container">
        <input 
          type="text"
          placeholder="Name" 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value})}
        />
        </div>
        <div className="input-container">
        <input 
          type="mail" 
          placeholder="Mail"
          value={contact.mail}
          onChange={(e) => setContact({...contact, mail: e.target.value})}
        />
        </div>
        <div>
        <button className='submit' type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
