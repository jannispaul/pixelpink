import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1AndText from "../components/H1AndText"
import ContactFooter from "../components/ContactFooter"
import UberUnsImage from "../components/UberUnsImage"
import LogoMobile from "../components/LogoMobile"
import FiftyFiftyBlackIMGAboutUs from "../components/layout/FiftyFiftyBlackIMGAboutUs"



class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                 <LogoMobile/>
                <UberUnsImage />
                <H1AndText
                    mainline="Wer steht eigentlich hinter PixelPink?"
                    subline="Unsere Geschichte, unsere Herangehensweise."
                    body="Alles Begann während unserer gemeinsamen Studienzeit des Medien- und Kommunikationsdesign in Berlin. Zu Beginn gestalteten wir Websites für Familie und Freunde, doch die Leidenschaft hatte uns gepackt und wir konnte nicht mehr aufhören. Wir wollten mehr machen, professioneller arbeiten und größere Projekte umsetzten. PixelPink war geboren. Unser Vorteil liegt in der Zusammenarbeit, die Mischung unserer Expertisen aus Design & Tech bietet die optimale Grundlage für kritische Diskussionen und garantiert fundierte Outputs und Deliverables. Bis heute versuchen wir unseren Klienten den Weg in die Digitalisierung zu erleichtern und die (digitale) Welt jeden Tag ein bisschen bunter, ein bisschen schöner zumachen. Haben Sie Interesse, oder Fragen? Schreiben Sie uns einfach an, wir freuen uns von Ihnen zu hören!"
                />
                <FiftyFiftyBlackIMGAboutUs/>
                <H1AndText
                    mainline="Unser Prozess"
                    subline="Double Diamond"
                    body="Der Design-Thinking Prozess (auch gerne als DoubleDiamond dargestellt) bildet für uns das Fundament eines erfolgreichen Projektes. In der Regel durchlaufen wir die unterschiedlichen Phasen von der ”Problemdefinition” über ”Discover & Research” hin zu ”Design” und ”Test” iterativ.  "
                />
                <ContactFooter mainline="Lassen Sie sich von uns überraschen!" />
            </StandardLayout>
        )
    }
}
export default IndexPage
