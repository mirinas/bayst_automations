import Head from 'next/head'

import styles from '@/styles/Portfolio.module.css'
import {useLanguage, useSelected} from "@/components/context";
import {InfoCard} from "@/components/infoCard";

export default function Portfolio() {
    const { t } = useLanguage()
    const {setSelected} = useSelected()
    setSelected('portfolio')

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Automation Developer for ecommerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

                <h1 className={styles.title}>Augustas Mirinas</h1>
                <p>A second year Computer Science student with strong background in Front-End and Application development</p>

                <InfoCard title={'University of Southampton'}>
                    <h4>BSc Computer Science</h4>
                    <ul>
                        <li>Algorithms - Data Structures</li>
                        <li>Data Management - UNIX</li>
                        <li>Distributed Systems and Networks</li>
                        <li>Programming Language Concepts</li>
                    </ul>
                </InfoCard>

                <InfoCard title={'NWERC 2022'} style={{ top: '460px' }} >
                    <p>Represented University of Southampton in regional programming contest held by Delft University of Technology</p>
                    <a
                        href={'https://2022.nwerc.eu/'}
                        target={'_blank'}
                    >
                        2022.nwerc.eu</a>
                </InfoCard>

                <InfoCard title={'SO Cameras - Automations Developer'} style={{ left: '800px' }} >
                    <h4>July 2021 - August 2022</h4>
                    <p>Designed and developed tens of automations to facilitate company’s buying and selling, item listing to Shopify platform, by calling different APIs and displaying data in various spreadsheets</p>
                    <ul>
                        <li>Developed JavaScript apps to fetch and upload store’s products, generate competitive pricing by scraping, send customer-facing emails</li>
                        <li>Managed Google Ads account and developed a system to automate Google Ads based on current sold items and interactions with the ads</li>
                        <li>Communicated estimations, planned and co-developed automations with my team members. Used ClickUps to plan and track multiple projects. Created technical reports describing automation goals, methodology, stakeholders, requirements and limitations</li>
                    </ul>
                </InfoCard>

            </main>
        </>
    )
}