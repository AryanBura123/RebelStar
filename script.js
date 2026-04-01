gsap.registerPlugin(ScrollTrigger);

// 1. INTRO SEQUENCE
const tl = gsap.timeline();

tl.to(".intro-sub", { opacity: 1, y: -20, duration: 1, stagger: 1 })
  .to(".intro-main", { opacity: 1, scale: 1.2, duration: 1.5, ease: "power4.out" })
  .to(".fire-flash", { backgroundColor: "white", opacity: 1, duration: 0.1 })
  .to(".intro-overlay", { y: "-100%", duration: 1, ease: "expo.inOut" })
  .from(".hero-bg", { scale: 1.5, duration: 2 }, "-=0.5")
  .from(".massive-title", { y: 100, opacity: 0, duration: 1 }, "-=1");

// 2. PARALLAX HERO
gsap.to(".hero-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 200
});

// 3. MASONRY REVEAL
gsap.from(".m-item", {
    scrollTrigger: {
        trigger: ".masonry-grid",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8
});

// 4. CUSTOM CURSOR
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// 5. TYPING DIALOGUE
const text = document.getElementById('typing-text');
const strText = text.textContent;
text.textContent = "";
let i = 0;

function typeWriter() {
    if (i < strText.length) {
        text.textContent += strText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

ScrollTrigger.create({
    trigger: ".dialogue-box",
    onEnter: () => typeWriter()
});

// 6. AUDIO TOGGLE (Mockup)
const btn = document.getElementById('toggle-audio');
btn.addEventListener('click', () => {
    // Logic for playing copyright-free mass BGM
    btn.innerText = "🔊 BGM PLAYING";
    gsap.to("body", { shake: 2 }); // Adding a small visual feedback
});
