import Head from 'next/head'
import styles from '@/styles/About.module.css'
import {useLanguage, useSelected} from "@/components/context";

import {InfoCard} from "@/components/infoCard";

export default function About() {
    const { t } = useLanguage()
    const {setSelected} = useSelected()
    setSelected('about')


    const intro = t({
        en: 'A third year Computer Science student with a strong background in Front-End and Application development',
        lt: 'Trečio kurso Computer Science studentas anglijoje su stipriomis Front-End ir aplikacijų kūrimo žiniomis '
    })
    const algo = t({
        en: 'Algorithms - Data Structures',
        lt: 'Algoritmai - Duomenų struktūros'
    })

    const dataManagement = t({
        en: 'Data Management - UNIX',
        lt: 'Duomenų valdymas - UNIX'
    })

    const distSys = t({
        en: 'Distributed Systems and Networks',
        lt: 'Paskirstytos sistemos ir tinklai'
    })

    const plc = t({
        en: 'Programming Language Concepts',
        lt: 'Programavimo kalbų principai'
    })

    const nwerc = t({
        en: 'Represented University of Southampton in regional programming contest held by Delft University of Technology',
        lt: 'Atstovavau savo universitetą regioniniame Europos programavimo konkurse surengtą Delfe, Nyderlanduose'
    })

    const position = t({
        en: 'SO Cameras - Automations Developer',
        lt: 'SO Cameras - Automatizavimo inžinierius'
    })

    const date = t({
        en: 'July 2021 - August 2022',
        lt: '2021 liepa - 2022 rugpjūtis'
    })

    const jobDescription = t({
        en: 'Designed and developed tens of automations to facilitate company’s buying and selling, item listing to Shopify platform, by calling different APIs, analyzing and displaying data in various spreadsheets',
        lt: 'Suprojektavau ir išpildžiau dešimtis automatizacijų, kurios palengvino įmonės pirkimus ir pardavimus, inventoriaus įkėlimą į Shopify platformą. Tai buvo išpildyta naudojant įvairius API, kurių išvestys buvo naudojamos skaičiavimuose ir viskas rodoma Google Sheets'
    })

    const scripts = t({
        en: 'Developed JavaScript apps to fetch and upload store’s products, generate competitive pricing by scraping, send customer-facing emails',
        lt: 'Kūriau JavaScript programas, kurios atsisiunčia ir atnaujina el. parduotuvės produktus, automatiškai generuoja konkurencingas kainas ir siunčia el. paštus klientams'
    })

    const ads = t({
        en: 'Managed Google Ads account and developed a system to automate Google Ads based on current sold items and interactions with the ads',
        lt: 'Valdžiau Google Ads paskyrą ir kūriau automatines sistemas, kurios tvarkė reklamas pagal produktų perkamumą ir susidomėjimą reklamomis'
    })

    const clickUps = t({
        en: 'Communicated estimations, planned and co-developed automations with my team members. Used ClickUp to track multiple projects. Created technical reports describing automation goals, methodology, stakeholders, requirements and limitations',
        lt: 'Dalinomės ir kūrėm planus komandoje, juos įgyvendinome kartu. Komunikacijai naudojama ClickUp platforma, kurioje buvo sekamas projektų progresas. Rašiau techninius dokumentus, apibūdinančius aplikacijų tikslus, veikimo metodiką, suinteresuotas šalis ir limitus'
    })

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Automation Developer for ecommerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico?" />
            </Head>
            <main className={styles.main}>

                <h1 className={styles.title}>Augustas Mirinas</h1>
                <p>{intro}</p>

                <InfoCard title={'University of Southampton'}>
                    <h4>BSc Computer Science</h4>
                    <ul>
                        <li>{algo}</li>
                        <li>{dataManagement}</li>
                        <li>{distSys}</li>
                        <li>{plc}</li>
                    </ul>
                </InfoCard>

                <InfoCard title={'NWERC 2022'} style={{ top: '460px' }} >
                    <p>{nwerc}</p>
                    <a
                        href={'https://2022.nwerc.eu/'}
                        target={'_blank'}
                    >
                        2022.nwerc.eu</a>
                </InfoCard>

                <InfoCard title={position} style={{ left: '800px', top: 120 }} >
                    <h4>{date}</h4>
                    <p>{jobDescription}</p>
                    <ul>
                        <li>{scripts}</li>
                        <li>{ads}</li>
                        <li>{clickUps}</li>
                    </ul>
                </InfoCard>

            </main>
        </>
      )
}
