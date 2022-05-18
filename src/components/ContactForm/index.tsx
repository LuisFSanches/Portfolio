/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import { LayoutContext } from '../../contexts/LayoutContext';
import { Container, FormContainer, InputContainer } from "./style";

type FormValues = {
    name: string;
    email:string;
    message:string
}

export function ContactForm(){

    const {register, handleSubmit, formState:{errors}, reset} = useForm<FormValues>()

    const {sendingEmail, setSendingEmail, emailSentMessage, handleEmailSentMessage, emailError, setEmailError} = useContext(LayoutContext)

    async function handleSubmitForm(data:FormValues){
        
        const {name, email, message } = data

        try{
            setSendingEmail(true)
            const response = await fetch("/api/sendmail",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                body:JSON.stringify({name, email, message})
            })
            setSendingEmail(false)
            handleEmailSentMessage()
            reset()
        } catch(err){
            setEmailError(true)
        }
    }

    if(sendingEmail === true && emailSentMessage === false){
        return(
            <Container>
                <img src="/images/loading.gif" alt="Enviando e-mail" />
                <h2 className="gold-text">Enviando e-mail</h2>
            </Container>
        )
    } else if(sendingEmail === false && emailSentMessage === true){
        return(
            <Container>
                <h1 className="gold-text">E-mail enviado com sucesso!</h1>
                <p>Obrigado.</p>
            </Container>
        )
    } else{
        return(
            <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
                <p className="error-message">{emailError ? 'Ocorreu um erro, tente novamente mais tarde.' : ''}</p>
                <InputContainer>
                    <div className="form-row">
                        <input type="text" placeholder="Nome" {...register("name", {
                            required:"Nome inválido",
                            minLength:{
                                value:3,
                                message:"Nome inválido"
                            }
                        })}/>
                        <p className="error-message">{errors.name?.message}</p>
                    </div>

                        <div className="form-row">
                            <input type="email" className="left" placeholder="E-mail" {...register("email",{
                                required:"E-mail inválido",
                                pattern:{
                                value:/\S+@\S+\.\S+/,
                                    message:"E-mail inválido"
                                }
                            })}/>
                            <p className="error-message">{errors.email?.message}</p>
                        </div>
                </InputContainer>
               
                  <textarea rows={4} placeholder="Mensagem" {...register("message", {
                      required:"Campo Obrigatório",
                  })}></textarea>
                  <p className="error-message">{errors.message?.message}</p>
    
                  <button className="submit-button" type="submit">Enviar</button>
            </FormContainer>
        )
    }
    
}