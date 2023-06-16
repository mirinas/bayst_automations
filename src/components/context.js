import {Menu, MenuIcon, SocialIcon} from "@/components/menu";
import styles from '@/styles/Menu.module.css'
import {createContext, useContext, useReducer, useState} from 'react';

export const LanguageContext = createContext({
    t: d => '',
})

export const SelectedContext = createContext({})

export function useLanguage() {
    return useContext(LanguageContext)
}

export function useSelected() {
    return useContext(SelectedContext)
}

export function Context({ children }) {
    if(typeof document !== 'undefined') {
        const blur = document.querySelector(`.${styles.blurScreen}`);
        blur.addEventListener('click', () => {
            document.querySelector('#menu_toggle').checked = false
        })
    }


    const reducer = (t, lang) => d => d[lang]
    const [t, setLang] = useReducer(reducer, d => d['en']);

    const [selected, setSelected] = useState('About')

    return (
        <LanguageContext.Provider value={{ t, setLang }}>
            <SelectedContext.Provider value={{ selected, setSelected }}>
                <MenuIcon/>
                <Menu/>
                <div className={styles.socials}>
                    <SocialIcon
                        url={'https://www.linkedin.com/in/augustas-mirinas/'}
                        icon={'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'} />
                    <SocialIcon
                        url={'https://git.soton.ac.uk/am26g21'}
                        icon={'https://about.gitlab.com/images/press/press-kit-icon.svg'} />
                    <SocialIcon
                        url={'https://www.fiverr.com/mirinas'}
                        icon={'https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/fiverr-icon.svg'} />
                </div>
                <BlurScreen/>
                {children}
            </SelectedContext.Provider>
        </LanguageContext.Provider>
    )
}

function BlurScreen() {
    return <div className={styles.blurScreen}/>
}












