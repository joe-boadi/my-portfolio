"use client"
import React from "react";
import Styles from "@/app/Styles/Contact.module.css";
// import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    // const [ state, handleSubmit ]= useForm("xoqgolqv")
    // if (state.succeeded){
    //     return <p>Thanks for reaching out!</p>
    // }
   
    const handleSubmit = async (event:any) => {
        event.preventDefault()
        const form = event.target
        const data = new FormData(form)

        try{
            const res = await fetch("https://formspree.io/f/xoqgolqv",{
                method: 'POST',
                body: data,
            })
            if(res.ok){
                form.reset()
                alert("Thank you for reaching out to me. I will get back to you as soon as possible.")
            }else{
                throw new Error("Error sending message")
            }
            }catch(e){
                console.error("Error: ", e )
            }
    }

    const handleChange = (event:any) => {
        console.log("Form input changed: ", event.target.name, event.target.value)
    }

    return (
        <section id='contact' className={`${Styles.contactSection} text-sm text-center mt-12 font-mono items-center border rounded-lg hover:bg-base-300 bottom-6`}>
            <h2 className={`${Styles.h2} mb-6 text-base-content`}>Contact</h2>
            <form action={'#'} method='post' onSubmit={handleSubmit} className={`${Styles.form}`}>
                {/* Form fields go here */}
                <div className={`${Styles.inputGroup} text-base-content`}>

                    <input className={`${Styles.input} bg-base-200 mb-4`} 
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='Name' required
                        onChange={handleChange}
                    />

                    <input className={`${Styles.input} bg-base-200`} 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Email' required 
                        onChange={handleChange}
                        />
                </div>

                <textarea className={`${Styles.textarea} bg-base-200`} 
                    name="message" 
                    id='message' 
                    placeholder='Message required'
                    onChange={handleChange}

                ></textarea>

                <button 
                    className={`${Styles.button} btn btn-outline hover:bg-green-400`} 
                    type="submit"
                >Submit</button>
            </form>
        </section>

    )
}

export default Contact

