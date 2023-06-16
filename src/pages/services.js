import Head from "next/head";
import {useLanguage, useSelected} from "@/components/context";

import Image from 'next/image'
import styles from "@/styles/Services.module.css";

import forms from '../../public/forms.png'
import sidebar from '../../public/sidebar.png'
import visualisation from '../../public/visualisation.png'
import webapp from '../../public/webapp.png'

export default function Services() {
    const { setSelected } = useSelected()
    const { t } = useLanguage()
    setSelected('services')

    const intro = t({
        en: 'Google Apps Script is the easiest and fastest way to develop business and personal automations:',
        lt: 'Google Apps Script yra lengviausias ir greičiausias būdas kurti tiek verslo, tiek asmenines automatizavimo aplikacijas:'
    })

    const sidebarLabel = t({
        en: 'Enter data manually using templates and convenient user interface built right into the sheet',
        lt: 'Teksto įvedimas šablonais ir patogia naudotojo sąsaja pačiuose Google Sheets'
    })

    const webappLabel = t({
        en: 'Host web apps in Google Sheets for free for easier data manipulation and visualisation',
        lt: 'Interneto programos nemokamai host\'inamos Google Sheets lengvesniam informacijos apdorojimui ir vizualizacijai'
    })

    const visualisationLabel = t({
        en: 'Call any REST API and have your data always up to date. Query and process Shopify, Squarespace orders and items, Ebay auctions, scraped competitor prices and much more',
        lt: 'Prieiga prie bet kokios REST API, su kuriomis visada pasiekiama naujausia informacija. Informacijos apdorojimas ir automatiniai skaičiavimai iš įvarių platformų - Shopify, Squarespace inventorius ir užsakymai, Ebay aukcionai, konkurentų kainos ir daugiau'
    })

    const formsLabel = t({
        en: 'Create Google Forms in bulk based on values from sheets or other sources. Answers can be updated by submitting the same form again',
        lt: 'Google Forms automatinis kūrimas pagal informaciją esančią Google Sheets arba iš kitų šaltinių. Google Forms atsakymai gali būti atnaujinti užpildant tą pačią formą dar kartą'
    })

    return (
        <>
            <Head>
                <title>Services</title>
                <meta name="description" content="Automation Developer for ecommerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico?" />
            </Head>

            <main className={styles.main}>
                <div className={styles.introduction}>
                    <p>{intro}</p>
                    <ul>
                        <li>{ t({en: 'free of charge', lt: 'nemokamas išlaikymas ir priežiūra'}) }</li>
                        <li>{ t({en: 'no downtime, as it runs on Google servers', lt: 'nuolatinis veiksnumas, nes visa sistema veikia Google serveriuose'}) }</li>
                        <li>{ t({en: 'built-in Sheets, Drive, Gmail, Forms, Calendar integrations', lt: 'Integruotos Sheets, Drive, Gmail, Forms, Calendar paslaugos'}) }</li>
                        <li>{ t({en: 'ability to call virtually any API', lt: 'Integracija su bet kokia API'}) }</li>
                    </ul>
                </div>


                <Slide
                    text={sidebarLabel}
                    image={sidebar} />
                <Slide
                    text={webappLabel}
                    image={webapp} />
                <Slide
                    text={visualisationLabel}
                    image={visualisation} />
                <Slide
                    text={formsLabel}
                    image={forms} />
            </main>
        </>
    )
}

function Slide({ image, text }) {
    return (
        <div className={styles.slide}>
            <Image
                src={image}
                alt={''} />
            <p>{ text }</p>
        </div>
    )
}