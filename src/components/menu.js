import styles from '@/styles/Menu.module.css'
import {useLanguage, useSelected} from "@/components/context";

import Link from "next/link";
import Image from "next/image";

export function Menu() {
    const { t } = useLanguage()

    const about = t({ en: 'About', lt: 'Apie' })
    const services = t({ en: 'Services', lt: 'Paslaugos' })
    const contact = t({ en: 'Contact', lt: 'Susisiekite' })

    return (
        <>
            <div className={styles.menu_root}>
                <div className={styles.menu_container}>
                    <Button id={'about'} text={about} href={'/'}/>
                    <Button id={'services'} text={services} href={'/services'}/>
                    <Button id={'contact'} text={contact} href={'/contact'}/>
                    <LanguageSwitch/>
                </div>
            </div>
        </>
    )
}


function LanguageSwitch() {
    const { setLang } = useLanguage()
    const toggleLang = () => {
        const toggle = document.querySelector('#lang_toggle')
        toggle.checked = !toggle.checked

        switch (toggle.checked) {
            case true: {
                setLang('lt')
                break
            }
            case false: {
                setLang('en')
            }
        }
    }

    return (
        <>
            <div
                className={styles.lang_root}
                onClick={toggleLang}
            >
                <input
                    className={styles.lang_toggle}
                    type={'checkbox'}
                    id={'lang_toggle'}
                />
                <Image
                    src={''}
                    // alt={'Toggle language'}
                    className={styles.lang_logo}
                />
            </div>
        </>
    )
}


function Button({ id, text, href }) {
    const { selected } = useSelected()
    const selectPage = () => {
        document.querySelector('#menu_toggle').checked = false
    }

    return (
        <Link href={href}
              onClick={selectPage}
              className={selected === id ? styles.selected_page : ''}
        >
            {text}
        </Link>
    )
}



export function SocialIcon({ url, icon }) {
    return <a
        href={url}
        target={'_blank'}
        style={{ backgroundImage: `url(${icon})` }} />
}


export function MenuIcon() {
    return (
        <>
            <input
                className={styles.menu_toggle}
                type={'checkbox'}
                id={'menu_toggle'}
            />
            <div className={styles.menu_icon}>
                <div className={styles.top_bar}/>
                <div className={styles.middle_bar}/>
                <div className={styles.bottom_bar}/>
            </div>
        </>
    );
}