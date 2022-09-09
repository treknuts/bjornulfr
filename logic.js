gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", { y: -400, opacity: 0, duration: 1 });
gsap.from(".subtitle", { x: -400, duration: 1 });

gsap.to(".geo-box", {
  scrollTrigger: {
    trigger: ".geo-box",
    start: "top bottom",
    scrub: true,
  },
  borderRadius: "+=8em 0 +=8em 0",
  duration: 0.75,
});

gsap.to(".bird-box", {
  scrollTrigger: {
    trigger: ".bird-box",
    start: "top bottom",
    scrub: true,
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
      backgroundPosition: `${Math.min(0, tilty * 8)}px ${Math.min(
        0,
        tiltx * 8
      )}px`,
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
