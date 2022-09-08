gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".hero > .header",
  { opacity: 0 },
  { x: 250, opacity: 1, duration: 0.5 }
);

gsap.fromTo(
  ".subheader",
  { x: 800, opacity: 0 },
  { x: 250, opacity: 1, duration: 0.5 }
);

gsap.to(".geo-box", {
  scrollTrigger: {
    trigger: ".geo-box",
    start: "top bottom",
    scrub: true,
    markers: true,
  },
  borderRadius: "+=8em 0 +=8em 0",
  duration: 0.75,
});

gsap.to(".bird-box", {
  scrollTrigger: {
    trigger: ".bird-box",
    start: "top bottom",
    scrub: true,
    markers: true,
  },
  borderRadius: "+=8em 0 +=8em 0",
  duration: 0.75,
});

document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".hero").forEach((box) => {
    const cx = Math.ceil(window.innerWidth / 2.0);
    const cy = Math.ceil(window.innerHeight / 2.0);
    const dx = e.pageX - cx;
    const dy = e.pageY - cy;

    const tiltx = dy / cy;
    const tilty = dx / cx;

    gsap.to(box, {
      backgroundPosition: `${tilty * 15}px ${tiltx * 15}px`,
    });
  });
}

// Scroll snapping shits
let sections = gsap.utils.toArray(".section");

gsap.to(sections, {
  yPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".content",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".content").offsetWidth,
  },
});
