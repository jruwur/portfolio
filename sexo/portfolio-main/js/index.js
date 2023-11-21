var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger) 


let sections = gsap.utils.toArray(".scroll");
let tops = sections.map(scroll => ScrollTrigger.create({trigger: scroll, start: "top top"}));

sections.forEach((scroll, i) => {
    ScrollTrigger.create({
      trigger: scroll,
      start: () => scroll.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
      pin: true, 
      pinSpacing: false ,
      scrub: true
    });
  });

  ScrollTrigger.create({
    snap: {
      snapTo: (progress, self) => {
        let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
            snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
        return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
      },
      duration: 0.5
    }
  });
//animacion para los titulos
  gsap.to(".title",{
    scrollTrigger: {
      trigger: ".title",
      start:"center center",
      end: "top 100px",
      scrub: 2
    },
    y:-90,
    delay: 1,
    duration: 3,
    ease:"back"
  })
  gsap.to(".title2",{
    scrollTrigger: {
      trigger: ".title2",
      start:"center center",
      end: "top 100px",
      scrub: 2
    },
    y:-70,
    delay: 1,
    duration: 3,
    ease:"back"
  })
  gsap.to(".title3",{
    scrollTrigger: {
      trigger: ".title3",
      start:"center center",
      end: "top 100px",
      scrub: 2
    },
    y:-50,
    delay: 1,
    duration: 3,
    ease:"back"
  })

gsap.from(".container1", { duration: 3, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".container1 h1, .container1 h2, .container1 p, .container1 .cta , .container1 .imagenPrincipal", { duration: 3, y: 50, opacity: 0, stagger: 0.2, ease: "bounce" });

function Next() {
tl.to(".container1", {duration:2, x: 100, opacity: 0, ease: "power2.out" ,display: "none"})
tl.to(".container2",{
     duration: 2, y: -50, opacity: 1, ease: "back", display: "inline-block",
      })
gsap.fromTo(".background",
    {
        duration:2,
        opacity: 0.5
    },
{
duration: 2,
opacity: 1,
ease:"back",
backgroundImage :'url("img/home.png")' ,
backgroundSize: "100% 100%"
})
}
