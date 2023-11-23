import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eviwmel', 'template_uf39155', form.current, 'B812BeCJDoMn3C_QW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <center>
        <div className="container" style={{width:"70%", marginTop:20, background:"#A8BAAA", padding:20}}>
            <form ref={form} onSubmit={sendEmail}  id='miFormulario'>
                <h1 className='h2' style={{fontFamily:"unset"}}>Contáctenos</h1>
                <input className='form-control form-control-lg my-2'name='user_name' type='text' placeholder='User' />
                <input className='form-control form-control-lg my-2'name='user_email'  type='email' placeholder='Email'/>
                <textarea className='form-control form-control-lg my-2'name='message' cols="30" rows="8" placeholder='Mensaje'></textarea>
                <button className='btn btn-secondary btn-lg my-2' type='submit' value='send'>Enviar</button>
            </form>
        </div>
    </center>
  )
}
