import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1AndText from "../components/H1AndText"
import ContactFooter from "../components/ContactFooter"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <H1AndText
                    mainline="Wer ist eigentlich PixelPink?"
                    subline="Unsere Geschichte, unsere Herangehensweise."
                    body="Alles Begann während unserer gemeinsamen Studienzeit des Medien- und Kommunikationsdesign in Berlin. Zu Beginn gestalteten wir Websites für Familie und Freunde, doch die Leidenschaft hatte uns gepackt und wir konnte nicht mehr aufhören. Wir wollten mehr machen, professioneller arbeiten und größere Projekte umsetzten. PixelPink war geboren. Bis heute versuchen wir unseren Klienten den Weg in die Digitalisierung zu erleichtern und die Welt jeden Tag ein bisschen bunter, ein bisschen schöner zumachen. Haben Sie Interesse, oder Fragen? Schreiben Sie uns einfach an, wir freuen uns von Ihnen zu hören!"
                />
                <H1AndText
                    mainline="Unser Prozess"
                    subline="Double Diamond"
                    body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidu"
                />
                <ContactFooter mainline="Lassen Sie sich von uns überraschen!" />
            </StandardLayout>
        )
    }
}
export default IndexPage
