import React from "react"
import UeberUnsPage from "../components/pages/UeberUnsPage"

const content = {
    seo: {
        title: "Über uns",
        keywords: [
            `über uns`,
            `pixelpink`,
            `team`,
            `prozess`,
            `tools`,
            `tech-stack`,
        ],
    },
    headlineAndText1: {
        mainline: "Wer steht eigentlich hinter PixelPink?",
        subline: "Unsere Geschichte, unsere Herangehensweise",
        copy:
            "PixelPink, das sind wir, Felix und Jannis, Design- und Technik-Enthusiasten. Alles begann während unseres gemeinsamen Medien- und Kommunikationsdesignstudiums in Berlin. Wir gestalteten zunächst Websites für Freunde und Familie, doch die Leidenschaft hatte uns gepackt und wir konnten nicht mehr aufhören. Wir wollten mehr machen und haben schnell erkannt, dass wir in unserer Konstellation sehr effizient und kreativ arbeiten können. Seit 2015 bilden wir, gemeinsam mit unserem Netzwerk aus Freischaffenden, PixelPink.",
    },
    headlineAndText2: {
        mainline: "Unser Vorteil",
        copy:
            "Unser Vorteil liegt in der Zusammenarbeit: Die Mischung unserer Expertisen aus Design und Tech bietet die optimale Grundlage für kritische Diskussionen und qualitativ hochwertigen Output. Aktuell begleiten wir unsere Kunden bei der Unternehmensdigitalisierung und bemühen uns dabei, die (digitale) Welt jeden Tag ein bisschen bunter und sinnvoller zumachen. Wie können wir Dir helfen, digital durchzustarten?",
    },
    headlineAndText3: {
        mainline: "Unser Prozess",
        subline: "Double Diamond",
        copy:
            "Als eingespieltes Team ist unserer vom Design Thinking inspirierter Prozessablauf mittlerweile selbstverständlich: Wir analysieren das Projekt und die Details in ihrem Kontext, erstellen einen Lösungsansatz und verbessern ihn. Wenn wir dann nicht zufrieden sind, geht es in die nächste Runde. Durch diese iterative Arbeitsweise perfektionieren wir das Produkt Schritt für Schritt bis zum Ziel.",
    },
    headlineAndText4: {
        mainline: "Unsere Tools",
        subline: "Design- und Tech-Stack",
        copy:
            "Für uns ist es wichtig, das richtige Werkzeug für den richtigen Job zu haben. Deshalb arbeiten wir mit einer Vielzahl an Tools. Hier findest Du eine Auswahl unserer liebsten und meistgenutzten.",
    },
    footer: {
        title: "Lass Dich von uns überraschen!",
    },
}
const UeberUns = (props) => (
    <UeberUnsPage
        seo={content.seo}
        headlineAndText1={content.headlineAndText1}
        headlineAndText2={content.headlineAndText2}
        headlineAndText3={content.headlineAndText3}
        headlineAndText4={content.headlineAndText4}
        footer={content.footer.title}
    />
)

export default UeberUns
