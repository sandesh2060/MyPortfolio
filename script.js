// -------DROP-DOWN-MENU---------
const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown");

menuIcon.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
});
gsap.from("body", {
  color: "#495057",
  delay: 0.6,
  opacity: 0,
  marginTop: "1vw",
});
gsap.from(".hero-left h6,h4,p", {
  color: "#495057",
  marginTop: "1vw",
  delay: 0.6,
  opacity: 0,
});
var heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-2",
    start: "25.5% 50%",
    end: "40% 50%",
    scrub: true,
    pin: true,
  },
});
heroTimeline.to(".hero-2", {
  scale: ".9",
});
// Projects section animation
var projectsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".main1",
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    pin: true,
    markers: true,
  },
});
projectsTimeline
  .to(
    ".top",
    {
      top: "-500",
    },
    "slider"
  )
  .to(
    ".bottom",
    {
      bottom: "-500",
    },
    "slider"
  );
// -------for-iphone-----
var iphoneTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    pin: true,
    // markers: true,
  },
});
iphoneTimeline.to(".iphone", {
  left: "50vw",
  rotate: 0.1,
});
var iphoneTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "50.1% 50%",
    end: "70% 50%",
    scrub: true,
    pin: true,
    // markers: true,
  },
});
iphoneTimeline2.to(".iphone", {
  rotate: 90.1,
  scale: 1,
});
var iphoneTimeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "50.2% 50%",
    end: "80% 50%",
    scrub: true,
    pin: true,
    // markers: true,
  },
});
iphoneTimeline2.to(".iphone", {
  scale: 1.9,
});
// -------for-iphone-message-section-----
iphoneTimeline2.to(".iphone-container", {
  rotate: -90.1,
  scale: 0.7,
  left: "-2vw",
});
// -----here-----
const cardList = document.querySelector(".card-list");
const cards = document.querySelectorAll(".card-item");
const cardWidth = cards[0].offsetWidth + 20; // Each card width + margin
let currentPosition = 0;

document.querySelector(".slide-right").addEventListener("click", () => {
  if (currentPosition > -(cards.length - 1) * cardWidth) {
    currentPosition -= cardWidth;
    cardList.style.transform = `translateX(${currentPosition}px)`;
  }
});

document.querySelector(".slide-left").addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    cardList.style.transform = `translateX(${currentPosition}px)`;
  }
});

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  gsap.from(".hero-2", {
    scale: false, // Simpler animation for smaller screens
  });
}
if (mediaQuery.matches) {
  gsap.to(".hero-2", {
    scale: false, // Simpler animation for smaller screens
  });
}
