import React, {useRef} from "react"
import emailjs from '@emailjs/browser';


import SocialMedia from "../../components/SocialMedia/SocialMedia";
import fluidBackground from "../../static/new_wave_579.6067417388444.png"
import "./Contact.css"



export default function Contact() {

    const form = useRef()

    const sendEmial = (e) => {
        e.preventDefault()
        //todo: make an info box for use to let them know if message was sent
        emailjs.sendForm('service_8jtqmnh', 'template_r0r4pom', form.current, '_RUEqrRY9G_i4uE1v')
            .then((result) =>  {
                console.log('sent')
            }, (error) => {
                console.log(error)
            })
    }


    return (
        <div id={'contact-container'}>
            <form id={'contact-form'} onSubmit={sendEmial} ref={form}>
                <input type="text" id={'contactName'} placeholder={'name'} name={'from_name'}/>
                <input type="email" id={'contactEmail'} placeholder={'e-mail'} name={'reply_to'}/>
                <textarea id={'messageContent'} placeholder={'message'} name={'message'}/>
                <input className={'submit-form-button'} type={'submit'} value={'Send'}/>
            </form>
            <img src={fluidBackground} id={'fluid-background'} alt={'waves'}/>
            <SocialMedia/>
        </div>
    )
}