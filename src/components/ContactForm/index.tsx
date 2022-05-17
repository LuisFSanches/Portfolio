import { useState } from "react";
import { FormContainer } from "./style";

export function ContactForm(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        const response = await fetch("/api/sendmail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify({name, email, message})
        })

        let result = await response.json()

        console.info(result)

    }

    return(
        <FormContainer onSubmit={handleSubmit}>
             <div className="form-row">
              <input type="text" placeholder="Nome" onChange={(e)=>setName(e.target.value)}/>
              <input type="text" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
              <textarea rows={4} placeholder="Mensagem" onChange={(e)=>setMessage(e.target.value)}></textarea>

              <button className="submit-button">Enviar</button>
        </FormContainer>
    )
}