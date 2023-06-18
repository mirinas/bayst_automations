import Head from "next/head";
import styles from "@/styles/Contact.module.css"
import axios from "axios"

export default function Contact() {

    const sendEmail = () => {
        const body = document.querySelector('#body').value
        console.log(body)
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
                    <input id={'email'} type={'email'} placeholder={'Your Email'}/>
                    <textarea id={'body'} placeholder={'Email Body'}/>
                    <button onClick={sendEmail}>Send</button>
                </div>
            </main>
        </>
    )
}