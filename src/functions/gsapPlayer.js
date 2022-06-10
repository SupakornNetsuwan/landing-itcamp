import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const playGsap = () => {
    const mainLogoTl = gsap.timeline({})
    mainLogoTl.from("#main-logo", {
        scale: 1.2,
        rotation: "45deg",
        duration: 1,
        ease: "expo.out",
    })

    const introBuildingTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro-section",
            markers: false,
            start: "80% 60%",
            end: "bottom 30%",
            scrub: 2
        }
    })

    introBuildingTl.to("#intro-building", {
        yPercent: 100,
        duration: 2
    })

    gsap.to(".intro-header", {
        scrollTrigger: {
            trigger: "#intro-section",
            start: "50% center",
            end: "bottom center",
            markers: false,
            scrub: 1
        },
        opacity: 0,
        stagger: 0.4,
        duration: 1,
        yPercent: -100
    })


    /* --------------- Intro 2 --------------- */

    const intro2Header = Array.from(document.getElementsByClassName("intro-2-header"))

    intro2Header.forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                markers: false,
                start: "top 90%",
                end: "top 70%",
                scrub: 2
            },
            opacity: 0,
            yPercent:100
        })
    })
}

export default playGsap