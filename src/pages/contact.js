import Head from "next/head";
import styles from "@/styles/Contact.module.css"
import { useSelected } from "@/components/context";
import axios from "axios"
import {useState} from "react";

export default function Contact() {
    const { setSelected } = useSelected()
    setSelected('contact')

    const [notification, setNotification] = useState({pos: 'hidden'})

    const checkEmail = e => {
        const address = String(e.target.value)
        const hidden = {...notification, pos: 'hidden'}

        if(address.length === 0) {
            setNotification(hidden)
            return
        }
        if(!address.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setNotification({
                pos: 'shown',
                type: 'error',
                message: 'Email invalid!'
            })
            return
        }
        setNotification(hidden)
    }

    const sendEmail = () => {
        const body = String(document.querySelector('#body').value)
        const address = String(document.querySelector('#email').value)

        if(address.length === 0) {
            const empty = {pos: 'shown', type: 'error', message: 'Email is blank!'}
            setNotification(empty)
            setTimeout(() => setNotification({...empty, pos: 'hidden'}), 3000)
            return
        }

        const info = {pos: 'shown', type: 'info', message: 'Sending...'}
        setNotification(info)

        axios.get('https://script.google.com/macros/s/AKfycbwslSIIiuXP6s8ftYorW6zPTiNUzLF3UuSdjm3jjeOOlpgPaCSjkKKm0bZp9NuNrtwT6Q/exec' +
        `?email=${encodeURIComponent(address)}&body=${encodeURIComponent(body)}`)
        .then(() => {
            setNotification({...info, message: 'Email sent!'})
            document.querySelector('#body').value = '';
            setTimeout(() => setNotification({...info, pos: 'hidden'}), 3000)

        }).catch(err => {
            const errNotify = {...info, type: 'error', message: `ERROR: ${err.message}`}
            setNotification(errNotify)
            setTimeout(() => setNotification({...errNotify, pos: 'hidden'}), 3000)
        })
    }

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Automation Developer for ecommerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico?" />
            </Head>
            <main className={styles.main}>

                <h1>Contact Me!</h1>
                <div className={styles.form}>
                    <p>I would love to answer any questions that You have, help explore the possibilities and benefits to your business
                        and suggest the best way to automate your processes! I'm always available on LinkedIn, but you can also send me an email via a form below:
                    </p>
                    <input id={'email'} type={'email'} placeholder={'Your Email'}
                           onBlur={checkEmail}
                    />
                    <textarea id={'body'} placeholder={'Email Body'}/>
                    <button disabled={notification.pos !== 'hidden'}
                            onClick={sendEmail}>Send</button>
                </div>
                <div id={styles.notification} className={ `${styles[notification.type]} ${styles[notification.pos]}` } >
                    {notification.message}
                </div>
            </main>
        </>
    )
}