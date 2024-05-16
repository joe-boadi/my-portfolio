import Styles from '@/app/Styles/Contact.module.css'

export default function Contact () {
    return (
        <section className={`${Styles.contactSection} sm:grid-cols-1 text-center font-mono items-center border rounded-lg`}>
            <h2 className={`${Styles.h2} text-base-content`}>Contact</h2>
            <form action={'#'} method='post' className={Styles.form}>
            {/* Form fields go here */}
            <div className={`${Styles.inputGroup} text-base-content`}>
                <input className={`${Styles.input} bg-base-200`} type="text" id='name' name='name' placeholder='Name' required/>
                <span className={`${Styles.span} bg-base-200`}></span>
                <input className={`${Styles.input} bg-base-200`} type="email" name="email" id="email" placeholder='Email' required />
            </div>
            <textarea className={`${Styles.textarea} bg-base-200`} name="message" id='message' placeholder='Message required'></textarea>
            <button className={`${Styles.button} btn btn-outline rounded-lg`} type="submit">Submit</button>
            </form>
        </section>

    )
}

