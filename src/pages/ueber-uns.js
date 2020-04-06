import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import HeadlineAndText from "../components/HeadlineAndText"
import ContactFooter from "../components/ContactFooter"
import UberUnsImage from "../components/UberUnsImage"
import OurProcess from "../components/OurProcess"
import OurTools from "../components/OurTools"
import LogoMobile from "../components/LogoMobile"
import FiftyFiftyBlackIMGAboutUs from "../components/layout/FiftyFiftyBlackIMGAboutUs"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Über Uns"
                    keywords={[
                        `über uns`,
                        `pixelpink`,
                        `team`,
                        `prozess`,
                        `tools`,
                        `tech-stack`,
                    ]}
                />
                <LogoMobile />
                <UberUnsImage />
                <HeadlineAndText
                    h1="Wer steht eigentlich hinter PixelPink?"
                    subline="Unsere Geschichte, unsere Herangehensweise"
                    body="
                    PixelPink, das sind wir, Felix und Jannis, Design- und Technik-Enthusiasten. Alles begann während unseres gemeinsamen Medien- und Kommunikationsdesignstudiums in Berlin. Wir gestalteten zunächst Websites für Freunde und Familie, doch die Leidenschaft hatte uns gepackt und wir konnte nicht mehr aufhören. Wir wollten mehr machen und haben schnell erkannt, dass wir in unserer Konstellation sehr effizient und kreativ arbeiten können. Seit 2015 bilden wir gemeinsam mit unserem Netzwerk aus Freischaffenden, PixelPink. Unser Vorteil liegt in der Zusammenarbeit: Die Mischung unserer Expertisen aus Design & Tech bietet die optimale Grundlage für kritische Diskussionen und qualitativ hochwertigen Output. Aktuell begleiten wir unsere Kunden bei der Unternehmensdigitalisierung und bemühen uns, die (digitale) Welt jeden Tag ein bisschen bunter und sinnvoller zumachen. Wie können wir Dir helfen digital durchzustarten? "
                />
                <FiftyFiftyBlackIMGAboutUs />
                <HeadlineAndText
                    h2="Unser Prozess"
                    subline="Double Diamond"
                    body="Als eingespieltes Team ist unserer vom Design Thinking inspirierter Prozessablauf mittlerweile selbstverständlich: Wir analysieren das Projekt und die Details in ihrem Kontext, erstellen einen Lösungsansatz und verbessern ihn. Wenn wir dann nicht zufrieden sind, geht es in die nächste Runde. Durch diese iterative Arbeitsweise perfektionieren wir das Produkt Schritt für Schritt bis zum Ziel."
                >
                    <OurProcess></OurProcess>
                </HeadlineAndText>
                <HeadlineAndText
                    h2="Unsere Tools"
                    subline="Modernes Teck-Stack"
                    body="Für uns ist es wichtig, das richtige Werkzeug für den richtigen Job zu haben. Deshalb arbeiten wir mit einer Vielzahl an Tools. Hier findest du eine Auswahl unserer liebsten und meist genutzen."
                >
                    <OurTools></OurTools>
                </HeadlineAndText>
                <ContactFooter mainline="Lass Dich von uns überraschen!" />
            </StandardLayout>
        )
    }
}
export default IndexPage
