import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import HeadlineAndText from "../components/HeadlineAndText"
import ContactFooter from "../components/ContactFooter"
import UberUnsImage from "../components/UberUnsImage"
import OurProcess from "../components/OurProcess"
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
                <LogoMobile />
                <UberUnsImage />
                <HeadlineAndText
                    h1="Wer oder was ist PixelPink eigentlich?"
                    subline="Unsere Geschichte, unsere Herangehensweise."
                    body="Alles Begann während unserer gemeinsamen Studienzeit des Medien- und Kommunikationsdesign in Berlin. Zu Beginn gestalteten wir Websites für Freunde und Familie, doch die Leidenschaft hatte uns gepackt und wir konnte nicht mehr aufhören. Wir wollten mehr machen und hatten schnell erkannt, dass wir in unserer Teamkonstellation herausragend effizient und kreativ arbeiten konnten. PixelPink war geboren. Unser Vorteil liegt in der Zusammenarbeit, die Mischung unserer Expertisen aus Design & Tech bietet die optimale Grundlage für kritische Diskussionen und garantiert fundierte Outputs und Deliverables. Aktuell begleiten wir unsere Klienten auf dem Weg in die Digitalisierung und bemühen uns dabei die (digitale) Welt jeden Tag ein bisschen bunter, ein bisschen sinnvoller zumachen. Wie können wir Ihnen helfen digital durchzustarten?"
                />
                <FiftyFiftyBlackIMGAboutUs />
                <HeadlineAndText
                    h2="Unser Prozess"
                    subline="Double Diamond"
                    body="Der Design-Thinking Prozess bildet für uns das Fundament eines erfolgreichen Projektes. In der Regel durchlaufen wir die unterschiedlichen Phasen von der 'Problemdefinition' über 'Erkunden und Explorieren' hin zu 'Design' und dem 'Test' iterativ."
                >
                    <OurProcess></OurProcess>
                </HeadlineAndText>
                <ContactFooter mainline="Lassen Sie sich von uns überraschen!" />
            </StandardLayout>
        )
    }
}
export default IndexPage
